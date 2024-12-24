import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { Item } from "@/types/items";
import { LootTable, Loot, LootTableGroup, NoLootId } from "@/types/loot";

export default function generateLoot(lootTable: LootTable): Loot {
  let loot: Loot = {};

  Object.entries(lootTable).forEach(([_, lootTableGroup]) => {
    const totalWeight = getTotalWeight(lootTableGroup);
    const roll = Math.random() * totalWeight;
    let currentWeight = 0;

    for (const itemId in lootTableGroup) {
      let data = lootTableGroup[itemId as ItemId]!;
      currentWeight += data.weight;
      if (roll < currentWeight) {
        if (!(itemId in itemTable)) {
          break;
        }
        loot[itemId as ItemId] = Math.floor(
          Math.random() * (data.maxQuantity - data.minQuantity + 1) +
            data.minQuantity,
        );
        break;
      }
    }
  });
  return loot;
}

export function generateDropRates(lootTable: LootTable): {
  item: Item;
  chance: number;
  minQuantity: number;
  maxQuantity: number;
}[][] {
  let dropRates = [];

  for (const lootTableGroup in lootTable) {
    let totalWeight = getTotalWeight(lootTable[lootTableGroup]);
    let dropGroup = [];

    for (const itemId in lootTable[lootTableGroup]) {
      if (itemId === NoLootId.NO_LOOT) {
        continue;
      }

      let data = lootTable[lootTableGroup][itemId as ItemId]!;

      dropGroup.push({
        item: itemTable[itemId as ItemId],
        minQuantity: data.minQuantity,
        maxQuantity: data.maxQuantity,
        chance: Math.floor((data.weight / totalWeight) * 100),
      });
    }
    dropRates.push(dropGroup);
  }
  return dropRates;
}

function getTotalWeight(lootTableGroup: LootTableGroup) {
  let totalWeight = 0;
  Object.entries(lootTableGroup).forEach(
    ([_, lootDetails]) => (totalWeight += lootDetails.weight),
  );
  return totalWeight;
}

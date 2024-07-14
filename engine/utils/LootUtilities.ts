import { Item } from "@/data/items/types";
import { itemTable } from "../../data/items/items";

export default function generateLoot(lootTable: LootTable): Loot {
  let loot: Loot = {};

  Object.entries(lootTable).forEach(([_, lootTableGroup]) => {
    const totalWeight = getTotalWeight(lootTableGroup);
    const roll = Math.random() * totalWeight;
    let currentWeight = 0;

    for (const itemId in lootTableGroup) {
      let data = lootTableGroup[itemId];
      currentWeight += data.weight;
      if (roll < currentWeight) {
        if (!(itemId in itemTable)) {
          break;
        }
        loot[itemId] = Math.floor(
          Math.random() * (data.maxQuantity - data.minQuantity + 1) +
            data.minQuantity
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
      if (!(itemId in itemTable)) {
        continue;
      }

      let data = lootTable[lootTableGroup][itemId];

      dropGroup.push({
        item: itemTable[itemId],
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
    ([_, lootDetails]) => (totalWeight += lootDetails.weight)
  );
  return totalWeight;
}
export type LootTable = {
  [lootGroupId: string]: LootTableGroup;
};
export type LootTableGroup = {
  [itemId: string]: {
    weight: number;
    minQuantity: number;
    maxQuantity: number;
  };
};
export type Loot = { [itemId: string]: number };

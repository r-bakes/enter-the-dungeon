import { ItemId } from "@/data/items/enums";

export type LootTable = {
  [lootGroupId: string]: LootTableGroup;
};

export enum NoLootId {
  NO_LOOT = "NO_LOOT",
}

export type LootTableGroup = {
  [id in ItemId | NoLootId]?: {
    weight: number;
    minQuantity: number;
    maxQuantity: number;
  };
};
export type Loot = { [id in ItemId]?: number };

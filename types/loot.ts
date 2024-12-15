import { ItemId } from "./items";

export type LootTable = {
  [lootGroupId: string]: LootTableGroup;
};
export type LootTableGroup = {
  [id in ItemId]?: {
    weight: number;
    minQuantity: number;
    maxQuantity: number;
  };
};
export type Loot = { [id in ItemId]: number };

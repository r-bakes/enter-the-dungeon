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

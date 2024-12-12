import { armorTable } from "@/data/items/armor";
import { barsTable } from "@/data/items/bars";
import { mineralsTable } from "@/data/items/minerals";
import { miscTable } from "@/data/items/misc";
import { weaponTable } from "@/data/items/weapons";
import { Item, ItemId } from "@/types/items";
import { plantsTable } from "./plants";
import { seedsTable } from "./seeds";

export const itemTable: { [id in ItemId]: Item } = {
  ...armorTable,
  ...barsTable,
  ...mineralsTable,
  ...miscTable,
  ...weaponTable,
  ...plantsTable,
  ...seedsTable,
};

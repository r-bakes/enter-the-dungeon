import { armorTable } from "@/data/items/armor";
import { barsTable } from "@/data/items/bars";
import { mineralsTable } from "@/data/items/minerals";
import { miscTable } from "@/data/items/misc";
import { weaponTable } from "@/data/items/weapons";
import { Item } from "@/types/items";

export const itemTable: { [itemId: string]: Item } = {
  ...armorTable,
  ...barsTable,
  ...mineralsTable,
  ...miscTable,
  ...weaponTable,
};

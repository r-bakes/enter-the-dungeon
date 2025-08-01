import { armorTable } from "@/data/items/armor";
import { barsTable } from "@/data/items/bars";
import { mineralsTable } from "@/data/items/minerals";
import { miscTable } from "@/data/items/misc";
import { weaponTable } from "@/data/items/weapons";
import { plantsTable } from "./plants";
import { seedsTable } from "./seeds";
import { flasksTable } from "./flasks";
import { potionsTable } from "./potions";
import { ItemId } from "./enums";
import { Item } from "@/types/items";

export const itemTable = {
  ...armorTable,
  ...barsTable,
  ...mineralsTable,
  ...miscTable,
  ...weaponTable,
  ...plantsTable,
  ...seedsTable,
  ...flasksTable,
  ...potionsTable,
} as { [id in ItemId]: Item };

import { Item } from "./types";
import { armorTable } from "./armor";
import { barsTable } from "./bars";
import { mineralsTable } from "./minerals";
import { miscTable } from "./misc";
import { weaponTable } from "./weapons";

export const itemTable: { [itemId: string]: Item } = {
  ...armorTable,
  ...barsTable,
  ...mineralsTable,
  ...miscTable,
  ...weaponTable,
};

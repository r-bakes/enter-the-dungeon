import { Item } from "./types";
import { armorTable } from "./armor";
import { barsTable } from "./bars";
import { mineralsTable } from "./minerals";
import { miscTable } from "./misc";
import { weaponTable } from "./weapons";
import { ItemId } from "../gameObject";

export const itemTable: { [itemId: ItemId]: Item } = {
  ...armorTable,
  ...barsTable,
  ...mineralsTable,
  ...miscTable,
  ...weaponTable,
};

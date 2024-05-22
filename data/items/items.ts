import {
  copperOre,
  geode,
  silverOre,
  coal,
  ironOre,
  tinOre,
  sapphire,
  goldOre,
  emerald,
} from "./minerals";
import {
  bronzeSword,
  ironGreatSword,
  ironShield,
  ironSword,
  steelSword,
} from "./weapons";
import {
  bronzeBar,
  goldBar,
  ironBar,
  silverBar,
  steelBar,
} from "./bars";
import { Item } from "../GameObject";
import { gold } from "./misc";

const ALL_ITEMS: Item[] = [
  gold,
  copperOre,
  tinOre,
  ironOre,
  silverOre,
  coal,
  geode,
  sapphire,
  emerald,
  bronzeSword,
  ironSword,
  ironShield,
  ironGreatSword,
  bronzeBar,
  ironBar,
  steelBar,
  silverBar,
  goldBar,
  goldOre,
  steelSword,
];

export const ITEM_BY_ID: { [itemId: string]: Item } = Object.fromEntries(
  ALL_ITEMS.map((item) => [item.id, item])
);

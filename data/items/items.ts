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
  adamantiteOre,
  mithrilOre,
} from "./minerals";
import {
  adamantSword,
  bronzeDagger,
  bronzeGreatSword,
  bronzeShield,
  bronzeSword,
  ironGreatSword,
  ironShield,
  ironSword,
  mithrilSword,
  steelSword,
} from "./weapons";
import {
  bronzeBar,
  goldBar,
  ironBar,
  silverBar,
  steelBar,
  mithrilBar,
  adamantBar,
} from "./bars";
import { gold } from "./misc";
import { Item } from "./types";

const ALL_ITEMS: Item[] = [
  gold,
  copperOre,
  tinOre,
  ironOre,
  silverOre,
  goldOre,
  mithrilOre,
  adamantiteOre,
  coal,
  geode,
  sapphire,
  emerald,
  bronzeDagger,
  bronzeSword,
  bronzeShield,
  bronzeGreatSword,
  ironSword,
  ironShield,
  ironGreatSword,
  bronzeBar,
  ironBar,
  steelBar,
  silverBar,
  goldBar,
  steelSword,
  mithrilSword,
  adamantSword,
  mithrilBar,
  adamantBar,
];

export const ITEM_BY_ID: { [itemId: string]: Item } = Object.fromEntries(
  ALL_ITEMS.map((item) => [item.id, item])
);

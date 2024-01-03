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
} from "./allItems/minerals";
import { Menu } from "../menus/Menu";
import {
  bronzeSword,
  ironGreatSword,
  ironShield,
  ironSword,
  steelSword,
} from "./allItems/weapons";
import {
  bronzeBar,
  goldBar,
  ironBar,
  silverBar,
  steelBar,
} from "./allItems/bars";
import { Card } from "../cards/Card";

class Items {
  items: Item[] = [
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
  itemById: { [itemId: string]: Item } = {};

  constructor() {
    this.items.forEach((item) => (this.itemById[item.id] = item));
  }

  get(id: string): Item {
    return this.itemById[id];
  }
}
export interface Item extends Menu {
  type: "equipment" | "supply" | "trade-good" | "material";
}
export interface Equipment extends Item {
  attackBonus: number;
  defenseBonus: number;
  healthBonus: number;
  cards: Card[];
  slot:
    | "head"
    | "neck"
    | "shoulder"
    | "cloak"
    | "chest"
    | "waist"
    | "leg"
    | "wrist"
    | "glove"
    | "feet"
    | "ring"
    | "trinket"
    | "flask"
    | "hand";
}
export interface Weapon extends Equipment {
  isTwoHanded?: boolean;
}

export const items = new Items();

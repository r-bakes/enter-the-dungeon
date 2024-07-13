import {
  Gavel,
  Hand,
  HardHat,
  RectangleVertical,
  Shield,
  Shirt,
  Slice,
  Sword,
  Tangent,
  ToyBrick,
} from "lucide-react";
import { Skill } from "./skills";
import { Task } from "./skills";
import { mineralsTable } from "../items/minerals";
import { barsTable } from "../items/bars";

const smithBronzeDagger: Task = {
  id: "smithBronzeDagger",
  name: "Bronze Dagger",
  description: "Smith a dagger.",
  icon: Slice,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    dagger: { bronzeDagger: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { bronzeBar: 1 },
};
const smithBronzeSword: Task = {
  id: "smithBronzeSword",
  name: "Bronze Sword",
  description: "Smith a sword.",
  icon: Sword,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    sword: { bronzeSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { bronzeBar: 2 },
};
const smithBronzeShield: Task = {
  id: "smithBronzeShield",
  name: "Bronze Shield",
  description: "Smith a shield.",
  icon: Shield,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    smith: { bronzeShield: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { bronzeBar: 2 },
};
const smithBronzeGreatSword: Task = {
  id: "smithBronzeGreatSword",
  name: "Bronze Great Sword",
  description: "Smith a great sword.",
  icon: Sword,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    smith: { bronzeGreatSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { bronzeBar: 4 },
};
const smithBronzeHelmet: Task = {
  id: "smithBronzeHelmet",
  name: "Bronze Helmet",
  description: "Smith a helmet.",
  icon: HardHat,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    smith: { bronzeHelmet: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { bronzeBar: 2 },
};
const smithBronzeChestplate: Task = {
  id: "smithBronzeChestplate",
  name: "Bronze Chestplate",
  description: "Smith a chestplate.",
  icon: Shirt,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    smith: { bronzeChestplate: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { bronzeBar: 4 },
};
const smithBronzeBelt: Task = {
  id: "smithBronzeBelt",
  name: "Bronze Belt",
  description: "Smith a belt.",
  icon: Tangent,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    smith: { bronzeBelt: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { bronzeBar: 2 },
};
const smithBronzePlateleggings: Task = {
  id: "smithBronzePlatelegs",
  name: "Bronze Plate Leggings",
  description: "Smith plateleggings.",
  icon: ToyBrick,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    smith: {
      bronzePlateleggings: { weight: 1, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: { bronzeBar: 4 },
};
const smithBronzeGauntlets: Task = {
  id: "smithBronzeGauntlets",
  name: "Bronze Gauntlets",
  description: "Smith gauntlets.",
  icon: Hand,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    smith: {
      bronzeGauntlets: { weight: 1, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: { bronzeBar: 2 },
};
const smithIronSword: Task = {
  id: "smithIronSword",
  name: "Iron Sword",
  description: "Smith a sword.",
  icon: Sword,
  iconStyle: { fill: mineralsTable.ironOre.iconStyle.fill },
  durationSec: 10,
  experience: 10,
  requiredLevel: 10,
  lootTable: {
    smith: { ironSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { ironBar: 1 },
};
const smithIronShield: Task = {
  id: "smithIronShield",
  name: "Iron Shield",
  description: "Smith a shield.",
  icon: Shield,
  iconStyle: { fill: mineralsTable.ironOre.iconStyle.fill },
  durationSec: 10,
  experience: 20,
  requiredLevel: 10,
  lootTable: {
    sword: { ironShield: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { ironBar: 2 },
};
const smithIronGreatSword: Task = {
  id: "smithIronGreatsword",
  name: "Iron Great Sword",
  description: "Smith a great sword.",
  icon: Sword,
  iconStyle: { fill: mineralsTable.ironOre.iconStyle.fill },
  durationSec: 10,
  experience: 20,
  requiredLevel: 10,
  lootTable: {
    sword: { ironGreatSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { ironBar: 2 },
};
const smithSteelSword: Task = {
  id: "smithSteelSword",
  name: "Steel Sword",
  description: "Smith a sword.",
  icon: Sword,
  iconStyle: { fill: barsTable.steelBar.iconStyle.fill },
  durationSec: 10,
  experience: 20,
  requiredLevel: 20,
  lootTable: {
    sword: { steelSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { steelBar: 1 },
};
const smithMithrilSword: Task = {
  id: "smithMithrilSword",
  name: "Mithril Sword",
  description: "Smith a sword.",
  icon: Sword,
  iconStyle: { fill: mineralsTable.mithrilOre.iconStyle.fill },
  durationSec: 10,
  experience: 90,
  requiredLevel: 50,
  lootTable: {
    sword: { mithrilSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { mithrilBar: 1 },
};
const smithAdamantSword: Task = {
  id: "smithAdamantSword",
  name: "Adamant Sword",
  description: "Smith a sword.",
  icon: Sword,
  iconStyle: { fill: mineralsTable.adamantiteOre.iconStyle.fill },
  durationSec: 10,
  experience: 100,
  requiredLevel: 60,
  lootTable: {
    sword: { adamantSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { adamantBar: 1 },
};
const smeltBronzeBar: Task = {
  id: "smeltBronzeBar",
  name: "Bronze Bar",
  description: "Smelt a bronze bar.",
  icon: RectangleVertical,
  iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
  durationSec: 2,
  experience: 1,
  requiredLevel: 1,
  lootTable: {
    bar: { bronzeBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { copperOre: 1, tinOre: 1, coal: 1 },
};
const smeltIronBar: Task = {
  id: "smeltIronBar",
  name: "Iron Bar",
  description: "Smelt a iron bar.",
  iconStyle: { fill: mineralsTable.ironOre.iconStyle.fill },
  icon: RectangleVertical,
  durationSec: 2,
  experience: 10,
  requiredLevel: 10,
  lootTable: {
    bar: { ironBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { ironOre: 2, coal: 2 },
};
const smeltSteelBar: Task = {
  id: "smeltSteelBar",
  name: "Steel Bar",
  description: "Smelt a steel bar.",
  icon: RectangleVertical,
  iconStyle: { fill: barsTable.steelBar.iconStyle.fill },
  durationSec: 2,
  experience: 20,
  requiredLevel: 20,
  lootTable: {
    bar: { steelBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { ironOre: 5, coal: 5 },
};
const smeltSilverBar: Task = {
  id: "smeltSilverBar",
  name: "Silver Bar",
  description: "Smelt a silver bar.",
  icon: RectangleVertical,
  iconStyle: { fill: mineralsTable.silverOre.iconStyle.fill },
  durationSec: 2,
  experience: 20,
  requiredLevel: 20,
  lootTable: {
    bar: { silverBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { silverOre: 5, coal: 5 },
};
const smeltGoldBar: Task = {
  id: "smeltGoldBar",
  name: "Gold Bar",
  description: "Smelt a gold bar.",
  icon: RectangleVertical,
  iconStyle: { fill: mineralsTable.goldOre.iconStyle.fill },
  durationSec: 2,
  experience: 30,
  requiredLevel: 30,
  lootTable: {
    bar: { goldBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { goldOre: 5, coal: 10 },
};
const smeltMithrilBar: Task = {
  id: "smeltMithrilBar",
  name: "Mithril Bar",
  description: "Smelt a mithril bar.",
  icon: RectangleVertical,
  iconStyle: { fill: mineralsTable.mithrilOre.iconStyle.fill },
  durationSec: 2,
  experience: 90,
  requiredLevel: 50,
  lootTable: {
    bar: { mithrilBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { mithrilOre: 5, coal: 10 },
};
const smeltAdamantBar: Task = {
  id: "smeltAdamantBar",
  name: "Adamant Bar",
  description: "Smelt an adamant bar.",
  icon: RectangleVertical,
  iconStyle: { fill: mineralsTable.adamantiteOre.iconStyle.fill },
  durationSec: 2,
  experience: 100,
  requiredLevel: 30,
  lootTable: {
    bar: { adamantBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { adamantiteOre: 5, coal: 15 },
};
export const smithing: Skill = {
  id: "smithing",
  name: "Smithing",
  description: "The ability to forge arms, armor, and trade goods.",
  icon: Gavel,
  iconStyle: {},
  tasks: {
    smelting: [
      smeltBronzeBar,
      smeltIronBar,
      smeltSteelBar,
      smeltSilverBar,
      smeltGoldBar,
      smeltMithrilBar,
      smeltAdamantBar,
    ],
    "bronze smithing": [
      smithBronzeDagger,
      smithBronzeSword,
      smithBronzeShield,
      smithBronzeGreatSword,
      smithBronzeHelmet,
      smithBronzeChestplate,
      smithBronzeBelt,
      smithBronzePlateleggings,
      smithBronzeGauntlets,
    ],
    "iron smithing": [smithIronSword, smithIronShield, smithIronGreatSword],
    "steel smithing": [smithSteelSword],
    "mithril smithing": [smithMithrilSword],
    "adamant smithing": [smithAdamantSword],
  },
};

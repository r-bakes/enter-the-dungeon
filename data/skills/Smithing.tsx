import { Gavel, RectangleVertical, Shield, Sword } from "lucide-react";
import { Skill } from "./skills";
import { Task } from "./skills";

const smithBronzeSword: Task = {
  id: "smithBronzeSword",
  name: "Bronze Sword",
  description: "Smith a sword.",
  icon: Sword,
  durationSec: 10,
  experience: 1,
  requiredLevel: 5,
  lootTable: {
    sword: { bronzeSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { bronzeBar: 1 },
};
const smithIronSword: Task = {
  id: "smith-iron-sword",
  name: "Iron Sword",
  description: "Smith a sword.",
  icon: Sword,
  durationSec: 10,
  experience: 10,
  requiredLevel: 10,
  lootTable: {
    sword: { ironSword: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { ironBar: 1 },
};
const smithIronShield: Task = {
  id: "smith-iron-shield",
  name: "Iron Shield",
  description: "Smith a shield.",
  icon: Shield,
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
  durationSec: 2,
  experience: 1,
  requiredLevel: 1,
  lootTable: {
    bar: { bronzeBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { copperOre: 1, tinOre: 1, coal: 1 },
};
const smeltIronBar: Task = {
  id: "smelt-iron-bar",
  name: "Iron Bar",
  description: "Smelt a iron bar.",
  icon: RectangleVertical,
  durationSec: 2,
  experience: 10,
  requiredLevel: 10,
  lootTable: {
    bar: { ironBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { ironOre: 1, coal: 1 },
};
const smeltSteelBar: Task = {
  id: "smeltSteelBar",
  name: "Steel Bar",
  description: "Smelt a steel bar.",
  icon: RectangleVertical,
  durationSec: 2,
  experience: 20,
  requiredLevel: 20,
  lootTable: {
    bar: { steelBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { ironOre: 3, coal: 2 },
};
const smeltSilverBar: Task = {
  id: "smeltSilverBar",
  name: "Silver Bar",
  description: "Smelt a silver bar.",
  icon: RectangleVertical,
  durationSec: 2,
  experience: 20,
  requiredLevel: 20,
  lootTable: {
    bar: { silverBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { silverOre: 5, coal: 1 },
};
const smeltGoldBar: Task = {
  id: "smeltGoldBar",
  name: "Gold Bar",
  description: "Smelt a gold bar.",
  icon: RectangleVertical,
  durationSec: 2,
  experience: 30,
  requiredLevel: 30,
  lootTable: {
    bar: { goldBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { goldOre: 5, coal: 1 },
};
const smeltMithrilBar: Task = {
  id: "smeltMithrilBar",
  name: "Mithril Bar",
  description: "Smelt a mithril bar.",
  icon: RectangleVertical,
  durationSec: 2,
  experience: 90,
  requiredLevel: 50,
  lootTable: {
    bar: { mithrilBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { mithrilOre: 5, coal: 1 },
};
const smeltAdamantBar: Task = {
  id: "smeltAdamantBar",
  name: "Adamant Bar",
  description: "Smelt an adamant bar.",
  icon: RectangleVertical,
  durationSec: 2,
  experience: 100,
  requiredLevel: 30,
  lootTable: {
    bar: { adamantBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: { adamantiteOre: 5, coal: 1 },
};
export const smithing: Skill = {
  id: "smithing",
  name: "Smithing",
  description: "The ability to forge arms, armor, and trade goods.",
  icon: Gavel,
  tasks: {
    smelting: [
      smeltBronzeBar,
      smeltIronBar,
      smeltSteelBar,
      smeltSilverBar,
      smeltGoldBar,
      smeltMithrilBar,
      smeltAdamantBar
    ],
    "bronze smithing": [smithBronzeSword],
    "iron smithing": [smithIronSword, smithIronShield, smithIronGreatSword],
    "steel smithing": [smithSteelSword],
    "mithril smithing": [smithMithrilSword],
    "adamant smithing": [smithAdamantSword],
  },
};

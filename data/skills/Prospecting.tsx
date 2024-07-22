import { Circle, Gem, Mountain, SearchSlash } from "lucide-react";
import { Skill, Task } from "./skills";
import { mineralsTable } from "../items/minerals";
import {
  SKILL_AND_MENU_ICON_STYLE,
  TASK_AND_ITEM_ICON_STYLE,
} from "../configurations";
import { SkillModifierType } from "../modifiers/skillModifiers";

const prospectingCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

const mineCopperOre: Task = {
  id: "mineCopperOre",
  name: "Mine Copper",
  description: "Mine copper ore.",
  icon: Mountain,
  iconStyle: {
    fill: mineralsTable.copperOre.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 1,
  requiredLevel: 1,
  lootTable: {
    ore: { copperOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 95, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 5, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const mineTinOre: Task = {
  id: "mineTinOre",
  name: "Mine Tin",
  description: "Mine tin ore.",
  icon: Mountain,
  iconStyle: {
    fill: mineralsTable.tinOre.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 1,
  requiredLevel: 1,
  lootTable: {
    ore: { tinOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 95, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 5, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const mineCoal: Task = {
  id: "mineCoal",
  name: "Mine Coal",
  description: "Mine coal.",
  icon: Circle,
  iconStyle: {
    fill: mineralsTable.coal.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 5,
  requiredLevel: 1,
  lootTable: {
    ore: { coal: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const mineIronOre: Task = {
  id: "mineIronOre",
  name: "Mine Iron",
  description: "Mine iron ore.",
  icon: Mountain,
  iconStyle: {
    fill: mineralsTable.ironOre.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 10,
  requiredLevel: 10,
  lootTable: {
    ore: { ironOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 95, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 5, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const mineSilverOre: Task = {
  id: "mineSilverOre",
  name: "Mine Silver",
  description: "Mine silver ore.",
  icon: Mountain,
  iconStyle: {
    fill: mineralsTable.silverOre.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 20,
  requiredLevel: 20,
  lootTable: {
    ore: { silverOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 95, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 5, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const mineGoldOre: Task = {
  id: "mineGoldOre",
  name: "Mine Gold",
  description: "Mine gold ore.",
  icon: Mountain,
  iconStyle: {
    fill: mineralsTable.goldOre.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 20,
  requiredLevel: 30,
  lootTable: {
    ore: { goldOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 95, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 5, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const mineMithrilOre: Task = {
  id: "mineMithrilOre",
  name: "Mine Mithril",
  description: "Mine mithril ore.",
  icon: Mountain,
  iconStyle: {
    fill: mineralsTable.mithrilOre.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 20,
  requiredLevel: 30,
  lootTable: {
    ore: { mithrilOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 95, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 5, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const minePlatinumOre: Task = {
  id: "minePlatinumOre",
  name: "Mine Platinum",
  description: "Mine platinum ore.",
  icon: Mountain,
  iconStyle: {
    fill: mineralsTable.mithrilOre.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 20,
  requiredLevel: 50,
  lootTable: {
    ore: { platinumOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 95, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 5, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const mineAdamantiteOre: Task = {
  id: "mineAdamantiteOre",
  name: "Mine Adamantite",
  description: "Mine adamantite ore.",
  icon: Mountain,
  iconStyle: {
    fill: mineralsTable.adamantiteOre.iconStyle.fill,
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 5,
  experience: 20,
  requiredLevel: 50,
  lootTable: {
    ore: { platinumOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 95, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 5, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: {},
  applicableModifiers: prospectingCommonModifiers,
};
const cutGeode: Task = {
  id: "cutGeode",
  name: "Cut Geode",
  description: "Cut a geode into a gem.",
  icon: Gem,
  iconStyle: { fill: "#FF70AB", ...TASK_AND_ITEM_ICON_STYLE },
  durationSec: 8,
  experience: 100,
  requiredLevel: 10,
  lootTable: {
    gems: {
      sapphire: { weight: 90, minQuantity: 1, maxQuantity: 1 },
      emerald: { weight: 9, minQuantity: 1, maxQuantity: 1 },
      diamond: { weight: 1, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: { geode: 1 },
  applicableModifiers: prospectingCommonModifiers,
};

export const prospecting: Skill = {
  id: "prospecting",
  name: "Prospecting",
  description: "The ability to search for and excavate mineral deposits.",
  icon: SearchSlash,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {
    mining: [
      mineCopperOre,
      mineTinOre,
      mineCoal,
      mineIronOre,
      mineSilverOre,
      mineGoldOre,
      mineMithrilOre,
      minePlatinumOre,
      mineAdamantiteOre,
    ],
    crafting: [cutGeode],
  },
};

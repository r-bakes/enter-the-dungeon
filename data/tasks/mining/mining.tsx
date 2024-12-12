import { Circle, Gem, Mountain, SearchSlash } from "lucide-react";

import {
  SKILL_AND_MENU_ICON_STYLE,
  TASK_AND_ITEM_ICON_STYLE,
} from "@/configurations/configurations";
import { Task } from "@/types/skills";
import { SkillModifierType } from "@/data/modifiers/enums";
import { mineralsTable } from "@/data/items/minerals";
import { ProspectingTaskCategories } from "@/data/skills/enums";

const prospectingCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const miningTasks: { [taskId: string]: Task } = {
  mineCopperOre: {
    id: "mineCopperOre",
    name: "Mine Copper",
    description: "Mine copper ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
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
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  mineTinOre: {
    id: "mineTinOre",
    name: "Mine Tin",
    description: "Mine tin ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable.tinOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
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
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  mineCoal: {
    id: "mineCoal",
    name: "Mine Coal",
    description: "Mine coal.",
    icon: Circle,
    iconStyle: {
      fill: mineralsTable.coal.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 5,
    requiredLevel: 1,
    lootTable: {
      ore: { coal: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: {},
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  mineIronOre: {
    id: "mineIronOre",
    name: "Mine Iron",
    description: "Mine iron ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
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
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  mineSilverOre: {
    id: "mineSilverOre",
    name: "Mine Silver",
    description: "Mine silver ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable.silverOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
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
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  mineGoldOre: {
    id: "mineGoldOre",
    name: "Mine Gold",
    description: "Mine gold ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable.goldOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
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
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  mineMithrilOre: {
    id: "mineMithrilOre",
    name: "Mine Mithril",
    description: "Mine mithril ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
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
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  minePlatinumOre: {
    id: "minePlatinumOre",
    name: "Mine Platinum",
    description: "Mine platinum ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
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
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  mineAdamantiteOre: {
    id: "mineAdamantiteOre",
    name: "Mine Adamantite",
    description: "Mine adamantite ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
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
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
};

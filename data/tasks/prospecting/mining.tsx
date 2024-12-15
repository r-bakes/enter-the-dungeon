// src/data/tasks/miningTasks.ts

import { Circle, Mountain } from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { mineralsTable } from "@/data/items/minerals";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { MineralId } from "@/data/items/enums";
import { Task } from "@/types/tasks";
import { ProspectingMiningTaskId } from "./enum";

const prospectingCommonModifiers = new Set<SkillModifierType>([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const miningTasks: { [id in ProspectingMiningTaskId]: Task } = {
  [ProspectingMiningTaskId.MINE_COPPER_ORE]: {
    id: ProspectingMiningTaskId.MINE_COPPER_ORE,
    name: "Mine Copper",
    description: "Mine copper ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
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
  [ProspectingMiningTaskId.MINE_TIN_ORE]: {
    id: ProspectingMiningTaskId.MINE_TIN_ORE,
    name: "Mine Tin",
    description: "Mine tin ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable[MineralId.TIN_ORE].iconStyle.fill,
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
  [ProspectingMiningTaskId.MINE_COAL]: {
    id: ProspectingMiningTaskId.MINE_COAL,
    name: "Mine Coal",
    description: "Mine coal.",
    icon: Circle,
    iconStyle: {
      fill: mineralsTable[MineralId.COAL].iconStyle.fill,
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
  [ProspectingMiningTaskId.MINE_IRON_ORE]: {
    id: ProspectingMiningTaskId.MINE_IRON_ORE,
    name: "Mine Iron",
    description: "Mine iron ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ProspectingMiningTaskId.MINE_SILVER_ORE]: {
    id: ProspectingMiningTaskId.MINE_SILVER_ORE,
    name: "Mine Silver",
    description: "Mine silver ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable[MineralId.SILVER_ORE].iconStyle.fill,
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
  [ProspectingMiningTaskId.MINE_GOLD_ORE]: {
    id: ProspectingMiningTaskId.MINE_GOLD_ORE,
    name: "Mine Gold",
    description: "Mine gold ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable[MineralId.GOLD_ORE].iconStyle.fill,
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
  [ProspectingMiningTaskId.MINE_MITHRIL_ORE]: {
    id: ProspectingMiningTaskId.MINE_MITHRIL_ORE,
    name: "Mine Mithril",
    description: "Mine mithril ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
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
  [ProspectingMiningTaskId.MINE_PLATINUM_ORE]: {
    id: ProspectingMiningTaskId.MINE_PLATINUM_ORE,
    name: "Mine Platinum",
    description: "Mine platinum ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable[MineralId.PLATINUM_ORE].iconStyle.fill,
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
  [ProspectingMiningTaskId.MINE_ADAMANTITE_ORE]: {
    id: ProspectingMiningTaskId.MINE_ADAMANTITE_ORE,
    name: "Mine Adamantite",
    description: "Mine adamantite ore.",
    icon: Mountain,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 20,
    requiredLevel: 50,
    lootTable: {
      ore: { adamantiteOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } }, // Corrected from platinumOre to adamantiteOre
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

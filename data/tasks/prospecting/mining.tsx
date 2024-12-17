// src/data/tasks/miningTasks.ts

import { Circle, Mountain } from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { Task } from "@/types/tasks";
import { ItemId } from "@/data/items/enums";
import { TaskId } from "../enum";
import { itemTable } from "@/data/items/items";
import { NoLootId } from "@/types/loot";

const prospectingCommonModifiers = new Set<SkillModifierType>([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const miningTasks: { [id in TaskId]?: Task } = {
  [TaskId.MINE_COPPER_ORE]: {
    id: TaskId.MINE_COPPER_ORE,
    name: "Mine Copper",
    description: "Mine copper ore.",
    icon: Mountain,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 1,
    requiredLevel: 1,
    lootTable: {
      ore: {
        [ItemId.COPPER_ORE]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
      geode: {
        [NoLootId.NO_LOOT]: { weight: 95, minQuantity: 0, maxQuantity: 0 },
        [ItemId.GEODE]: { weight: 5, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {},
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  [TaskId.MINE_TIN_ORE]: {
    id: TaskId.MINE_TIN_ORE,
    name: "Mine Tin",
    description: "Mine tin ore.",
    icon: Mountain,
    iconStyle: {
      fill: itemTable[ItemId.TIN_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 1,
    requiredLevel: 1,
    lootTable: {
      ore: { [ItemId.TIN_ORE]: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
      geode: {
        [NoLootId.NO_LOOT]: { weight: 95, minQuantity: 0, maxQuantity: 0 },
        [ItemId.GEODE]: { weight: 5, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {},
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  [TaskId.MINE_COAL]: {
    id: TaskId.MINE_COAL,
    name: "Mine Coal",
    description: "Mine coal.",
    icon: Circle,
    iconStyle: {
      fill: itemTable[ItemId.COAL].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 5,
    requiredLevel: 1,
    lootTable: {
      ore: { [ItemId.COAL]: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: {},
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  [TaskId.MINE_IRON_ORE]: {
    id: TaskId.MINE_IRON_ORE,
    name: "Mine Iron",
    description: "Mine iron ore.",
    icon: Mountain,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 10,
    requiredLevel: 10,
    lootTable: {
      ore: { [ItemId.IRON_ORE]: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
      geode: {
        [NoLootId.NO_LOOT]: { weight: 95, minQuantity: 0, maxQuantity: 0 },
        [ItemId.GEODE]: { weight: 5, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {},
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  [TaskId.MINE_SILVER_ORE]: {
    id: TaskId.MINE_SILVER_ORE,
    name: "Mine Silver",
    description: "Mine silver ore.",
    icon: Mountain,
    iconStyle: {
      fill: itemTable[ItemId.SILVER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 20,
    requiredLevel: 20,
    lootTable: {
      ore: {
        [ItemId.SILVER_ORE]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
      geode: {
        [NoLootId.NO_LOOT]: { weight: 95, minQuantity: 0, maxQuantity: 0 },
        [ItemId.GEODE]: { weight: 5, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {},
    category: ProspectingTaskCategories.MINE,
    applicableModifiers: prospectingCommonModifiers,
  },
  [TaskId.MINE_GOLD_ORE]: {
    id: TaskId.MINE_GOLD_ORE,
    name: "Mine Gold",
    description: "Mine gold ore.",
    icon: Mountain,
    iconStyle: {
      fill: itemTable[ItemId.GOLD_ORE].iconStyle.fill,
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
  [TaskId.MINE_MITHRIL_ORE]: {
    id: TaskId.MINE_MITHRIL_ORE,
    name: "Mine Mithril",
    description: "Mine mithril ore.",
    icon: Mountain,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
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
  [TaskId.MINE_PLATINUM_ORE]: {
    id: TaskId.MINE_PLATINUM_ORE,
    name: "Mine Platinum",
    description: "Mine platinum ore.",
    icon: Mountain,
    iconStyle: {
      fill: itemTable[ItemId.PLATINUM_ORE].iconStyle.fill,
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
  [TaskId.MINE_ADAMANTITE_ORE]: {
    id: TaskId.MINE_ADAMANTITE_ORE,
    name: "Mine Adamantite",
    description: "Mine adamantite ore.",
    icon: Mountain,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
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

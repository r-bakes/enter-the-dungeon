import { RectangleVertical } from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ModifierType } from "@/data/modifiers/enums";
import { SmithingTaskCategories } from "@/data/skills/enums";
import { Task } from "@/types/tasks";
import { TaskId } from "../enum";
import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
const smithingCommonModifiers = new Set<ModifierType>([
  ModifierType.SPEED,
  ModifierType.EXPERIENCE,
  ModifierType.DOUBLE_CHANCE,
  ModifierType.PRODUCTION_MULTIPLIER,
]);

export const smeltingTasks: { [id in TaskId]?: Task } = {
  [TaskId.SMELT_BRONZE_BAR]: {
    id: TaskId.SMELT_BRONZE_BAR,
    name: "Smelt Bronze Bar",
    description: "Smelt a bronze bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 1,
    requiredLevel: 1,
    lootTable: {
      bar: {
        [ItemId.BRONZE_BAR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.COPPER_ORE]: 1, [ItemId.TIN_ORE]: 1, [ItemId.COAL]: 1 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_IRON_BAR]: {
    id: TaskId.SMELT_IRON_BAR,
    name: "Smelt Iron Bar",
    description: "Smelt an iron bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 10,
    requiredLevel: 10,
    lootTable: {
      bar: { [ItemId.IRON_BAR]: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { [ItemId.IRON_ORE]: 2, [ItemId.COAL]: 2 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_STEEL_BAR]: {
    id: TaskId.SMELT_STEEL_BAR,
    name: "Smelt Steel Bar",
    description: "Smelt a steel bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 20,
    requiredLevel: 20,
    lootTable: {
      bar: {
        [ItemId.STEEL_BAR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.IRON_ORE]: 5, [ItemId.COAL]: 5 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_SILVER_BAR]: {
    id: TaskId.SMELT_SILVER_BAR,
    name: "Smelt Silver Bar",
    description: "Smelt a silver bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: itemTable[ItemId.SILVER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 20,
    requiredLevel: 20,
    lootTable: {
      bar: {
        [ItemId.SILVER_BAR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.SILVER_ORE]: 5, [ItemId.COAL]: 5 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_GOLD_BAR]: {
    id: TaskId.SMELT_GOLD_BAR,
    name: "Smelt Gold Bar",
    description: "Smelt a gold bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: itemTable[ItemId.GOLD_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 30,
    requiredLevel: 30,
    lootTable: {
      bar: { [ItemId.GOLD_BAR]: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { [ItemId.GOLD_ORE]: 5, [ItemId.COAL]: 10 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_MITHRIL_BAR]: {
    id: TaskId.SMELT_MITHRIL_BAR,
    name: "Smelt Mithril Bar",
    description: "Smelt a mithril bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 90,
    requiredLevel: 30,
    lootTable: {
      bar: {
        [ItemId.MITHRIL_BAR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.MITHRIL_ORE]: 5, [ItemId.COAL]: 10 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_PLATINUM_BAR]: {
    id: TaskId.SMELT_PLATINUM_BAR,
    name: "Smelt Platinum Bar",
    description: "Smelt a platinum bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: itemTable[ItemId.PLATINUM_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 100,
    requiredLevel: 40,
    lootTable: {
      bar: {
        [ItemId.PLATINUM_BAR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.PLATINUM_ORE]: 5, [ItemId.COAL]: 15 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_ADAMANT_BAR]: {
    id: TaskId.SMELT_ADAMANT_BAR,
    name: "Smelt Adamant Bar",
    description: "Smelt an adamant bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 100,
    requiredLevel: 40,
    lootTable: {
      bar: {
        [ItemId.ADAMANT_BAR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.ADAMANTITE_ORE]: 5, [ItemId.COAL]: 15 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
};

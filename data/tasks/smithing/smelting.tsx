import { RectangleVertical } from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { SmithingTaskCategories } from "@/data/skills/enums";
import { Task } from "@/types/tasks";
import { TaskId } from "../enum";
import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
const smithingCommonModifiers = new Set<SkillModifierType>([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const smeltingTasks: { [id in TaskId]?: Task } = {
  [TaskId.SMELT_BRONZE_BAR]: {
    id: TaskId.SMELT_BRONZE_BAR,
    name: "Bronze Bar",
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
      bar: { bronzeBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { copperOre: 1, tinOre: 1, coal: 1 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_IRON_BAR]: {
    id: TaskId.SMELT_IRON_BAR,
    name: "Iron Bar",
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
      bar: { ironBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { ironOre: 2, coal: 2 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_STEEL_BAR]: {
    id: TaskId.SMELT_STEEL_BAR,
    name: "Steel Bar",
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
      bar: { steelBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { ironOre: 5, coal: 5 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_SILVER_BAR]: {
    id: TaskId.SMELT_SILVER_BAR,
    name: "Silver Bar",
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
      bar: { silverBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { silverOre: 5, coal: 5 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_GOLD_BAR]: {
    id: TaskId.SMELT_GOLD_BAR,
    name: "Gold Bar",
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
      bar: { goldBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { goldOre: 5, coal: 10 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_MITHRIL_BAR]: {
    id: TaskId.SMELT_MITHRIL_BAR,
    name: "Mithril Bar",
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
      bar: { mithrilBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { mithrilOre: 5, coal: 10 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_PLATINUM_BAR]: {
    id: TaskId.SMELT_PLATINUM_BAR,
    name: "Platinum Bar",
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
      bar: { platinumBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { platinumOre: 5, coal: 15 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMELT_ADAMANT_BAR]: {
    id: TaskId.SMELT_ADAMANT_BAR,
    name: "Adamant Bar",
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
      bar: { adamantBar: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    },
    requires: { adamantiteOre: 5, coal: 15 },
    category: SmithingTaskCategories.SMELTING,
    applicableModifiers: smithingCommonModifiers,
  },
};

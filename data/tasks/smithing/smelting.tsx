import { RectangleVertical } from "lucide-react";

import { Task } from "@/types/skills";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { mineralsTable } from "@/data/items/minerals";
import { barsTable } from "@/data/items/bars";
import { SmithingTaskCategories } from "@/data/skills/enums";
import { SmeltingCategoryTaskId } from "./enum";
import { BarId, MineralId } from "@/data/items/enums";

const smithingCommonModifiers = new Set<SkillModifierType>([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const smeltingTasks: { [id in SmeltingCategoryTaskId]: Task } = {
  [SmeltingCategoryTaskId.SMELT_BRONZE_BAR]: {
    id: SmeltingCategoryTaskId.SMELT_BRONZE_BAR,
    name: "Bronze Bar",
    description: "Smelt a bronze bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
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
  [SmeltingCategoryTaskId.SMELT_IRON_BAR]: {
    id: SmeltingCategoryTaskId.SMELT_IRON_BAR,
    name: "Iron Bar",
    description: "Smelt an iron bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [SmeltingCategoryTaskId.SMELT_STEEL_BAR]: {
    id: SmeltingCategoryTaskId.SMELT_STEEL_BAR,
    name: "Steel Bar",
    description: "Smelt a steel bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: barsTable[BarId.STEEL_BAR].iconStyle.fill,
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
  [SmeltingCategoryTaskId.SMELT_SILVER_BAR]: {
    id: SmeltingCategoryTaskId.SMELT_SILVER_BAR,
    name: "Silver Bar",
    description: "Smelt a silver bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.SILVER_ORE].iconStyle.fill,
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
  [SmeltingCategoryTaskId.SMELT_GOLD_BAR]: {
    id: SmeltingCategoryTaskId.SMELT_GOLD_BAR,
    name: "Gold Bar",
    description: "Smelt a gold bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.GOLD_ORE].iconStyle.fill,
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
  [SmeltingCategoryTaskId.SMELT_MITHRIL_BAR]: {
    id: SmeltingCategoryTaskId.SMELT_MITHRIL_BAR,
    name: "Mithril Bar",
    description: "Smelt a mithril bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
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
  [SmeltingCategoryTaskId.SMELT_PLATINUM_BAR]: {
    id: SmeltingCategoryTaskId.SMELT_PLATINUM_BAR,
    name: "Platinum Bar",
    description: "Smelt a platinum bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.PLATINUM_ORE].iconStyle.fill,
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
  [SmeltingCategoryTaskId.SMELT_ADAMANT_BAR]: {
    id: SmeltingCategoryTaskId.SMELT_ADAMANT_BAR,
    name: "Adamant Bar",
    description: "Smelt an adamant bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
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

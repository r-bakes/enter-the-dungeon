import {
  Anvil,
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

import { Skill, Task } from "@/types/skills";
import {
  SKILL_AND_MENU_ICON_STYLE,
  TASK_AND_ITEM_ICON_STYLE,
} from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { mineralsTable } from "@/data/items/minerals";
import { SmithingTaskCategories } from "@/data/skills/enums";
import { barsTable } from "@/data/items/bars";

const smithingCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const smeltingTasks: { [taskId: string]: Task } = {
  smeltBronzeBar: {
    id: "smeltBronzeBar",
    name: "Bronze Bar",
    description: "Smelt a bronze bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
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
  smeltIronBar: {
    id: "smeltIronBar",
    name: "Iron Bar",
    description: "Smelt a iron bar.",
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    icon: RectangleVertical,
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
  smeltSteelBar: {
    id: "smeltSteelBar",
    name: "Steel Bar",
    description: "Smelt a steel bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: barsTable.steelBar.iconStyle.fill,
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
  smeltSilverBar: {
    id: "smeltSilverBar",
    name: "Silver Bar",
    description: "Smelt a silver bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.silverOre.iconStyle.fill,
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
  smeltGoldBar: {
    id: "smeltGoldBar",
    name: "Gold Bar",
    description: "Smelt a gold bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.goldOre.iconStyle.fill,
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
  smeltMithrilBar: {
    id: "smeltMithrilBar",
    name: "Mithril Bar",
    description: "Smelt a mithril bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
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
  smeltPlatinumBar: {
    id: "smeltPlatinumBar",
    name: "Platinum Bar",
    description: "Smelt a platinum bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.platinumOre.iconStyle.fill,
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
  smeltAdamantBar: {
    id: "smeltAdamantBar",
    name: "Adamant Bar",
    description: "Smelt an adamant bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
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

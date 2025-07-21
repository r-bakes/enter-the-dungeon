import {
  Droplets,
  Mountain,
  Flame,
  Wind,
  Waves,
  Sparkles,
} from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ModifierType } from "@/data/modifiers/enums";
import { AlchemyTaskCategories } from "@/data/skills/enums";
import { Task } from "@/types/tasks";
import { TaskId } from "../enum";
import { ItemId } from "@/data/items/enums";

const alchemyCommonModifiers = new Set<ModifierType>([
  ModifierType.SPEED,
  ModifierType.EXPERIENCE,
  ModifierType.DOUBLE_CHANCE,
  ModifierType.PRODUCTION_MULTIPLIER,
]);

export const alchemyReagentTasks: { [id in TaskId]?: Task } = {
  // Base Components
  [TaskId.DISTILL_WATER]: {
    id: TaskId.DISTILL_WATER,
    name: "Distill Water",
    description: "Purify ordinary water through alchemical distillation.",
    category: AlchemyTaskCategories.REAGENTS,
    icon: Droplets,
    iconStyle: { fill: "currentColor", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 1,
    experience: 10,
    durationSec: 5,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      distilledWater: {
        [ItemId.DISTILLED_WATER]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.GLASS_VIAL]: 1 },
  },
  [TaskId.REFINE_ALCHEMICAL_SALT]: {
    id: TaskId.REFINE_ALCHEMICAL_SALT,
    name: "Refine Alchemical Salt",
    description: "Process raw materials into pure alchemical salt.",
    category: AlchemyTaskCategories.REAGENTS,
    icon: Mountain,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 5,
    experience: 15,
    durationSec: 8,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      salt: {
        [ItemId.ALCHEMICAL_SALT]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.COAL]: 2 },
  },
  [TaskId.EXTRACT_ESSENCE_OF_FIRE]: {
    id: TaskId.EXTRACT_ESSENCE_OF_FIRE,
    name: "Extract Essence of Fire",
    description: "Capture the elemental essence of fire in crystalline form.",
    category: AlchemyTaskCategories.REAGENTS,
    icon: Flame,
    iconStyle: { fill: "currentColor", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 15,
    experience: 25,
    durationSec: 12,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      essence: {
        [ItemId.ESSENCE_OF_FIRE]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.EMBER_BLOSSOM]: 3,
      [ItemId.DISTILLED_WATER]: 1,
    },
  },
  [TaskId.EXTRACT_ESSENCE_OF_EARTH]: {
    id: TaskId.EXTRACT_ESSENCE_OF_EARTH,
    name: "Extract Essence of Earth",
    description: "Draw forth the stable power of earth from rare minerals.",
    category: AlchemyTaskCategories.REAGENTS,
    icon: Mountain,
    iconStyle: { fill: "currentColor", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 15,
    experience: 25,
    durationSec: 12,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      essence: {
        [ItemId.ESSENCE_OF_EARTH]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.IRON_ORE]: 5,
      [ItemId.ALCHEMICAL_SALT]: 1,
    },
  },
  [TaskId.EXTRACT_ESSENCE_OF_AIR]: {
    id: TaskId.EXTRACT_ESSENCE_OF_AIR,
    name: "Extract Essence of Air",
    description: "Capture the fleeting essence of air and wind.",
    category: AlchemyTaskCategories.REAGENTS,
    icon: Wind,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 15,
    experience: 25,
    durationSec: 12,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      essence: {
        [ItemId.ESSENCE_OF_AIR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.CRYSTAL_FERN]: 2,
      [ItemId.GLASS_VIAL]: 2,
    },
  },
  [TaskId.EXTRACT_ESSENCE_OF_WATER]: {
    id: TaskId.EXTRACT_ESSENCE_OF_WATER,
    name: "Extract Essence of Water",
    description: "Concentrate the pure essence of flowing water.",
    category: AlchemyTaskCategories.REAGENTS,
    icon: Waves,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 15,
    experience: 25,
    durationSec: 12,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      essence: {
        [ItemId.ESSENCE_OF_WATER]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.SILVERLEAF]: 4,
      [ItemId.DISTILLED_WATER]: 3,
    },
  },
  [TaskId.CRYSTALLIZE_MAGIC]: {
    id: TaskId.CRYSTALLIZE_MAGIC,
    name: "Crystallize Magic",
    description: "Transform raw magical energy into solid crystalline form.",
    category: AlchemyTaskCategories.REAGENTS,
    icon: Sparkles,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 25,
    experience: 50,
    durationSec: 20,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      magic: {
        [ItemId.CRYSTALLIZED_MAGIC]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.ESSENCE_OF_FIRE]: 1,
      [ItemId.ESSENCE_OF_EARTH]: 1,
      [ItemId.ESSENCE_OF_AIR]: 1,
      [ItemId.ESSENCE_OF_WATER]: 1,
    },
  },
};
import { Sprout } from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ModifierType } from "@/data/modifiers/enums";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { TaskId } from "../enum";
import { Task } from "@/types/tasks";
import { ItemId } from "@/data/items/enums";

const agricultureCommonModifiers = new Set<ModifierType>([
  ModifierType.SPEED,
  ModifierType.EXPERIENCE,
  ModifierType.DOUBLE_CHANCE,
  ModifierType.PRODUCTION_MULTIPLIER,
]);

export const botanyTasks: { [id in TaskId]?: Task } = {
  [TaskId.GROW_GINSENG]: {
    id: TaskId.GROW_GINSENG,
    name: "Grow Ginseng",
    description: "Sow some ginseng seeds.",
    icon: Sprout,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    durationSec: 600, // 10 minutes
    experience: 100,
    requiredLevel: 0,
    lootTable: {
      plants: {
        [ItemId.GINSENG]: { weight: 100, minQuantity: 1, maxQuantity: 5 },
      },
      seeds: {
        [ItemId.GINSENG_SEED]: { weight: 100, minQuantity: 1, maxQuantity: 5 },
      },
    },
    requires: { [ItemId.GINSENG_SEED]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: agricultureCommonModifiers,
  },

  [TaskId.GROW_MANDRAKE]: {
    id: TaskId.GROW_MANDRAKE,
    name: "Grow Mandrake",
    description: "Sow some mandrake seeds.",
    icon: Sprout,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    durationSec: 900, // 15 minutes
    experience: 120,
    requiredLevel: 5,
    lootTable: {
      plants: {
        [ItemId.MANDRAKE]: { weight: 100, minQuantity: 1, maxQuantity: 4 },
      },
      seeds: {
        [ItemId.MANDRAKE_SEED]: { weight: 100, minQuantity: 1, maxQuantity: 3 },
      },
    },
    requires: { [ItemId.MANDRAKE_SEED]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: agricultureCommonModifiers,
  },

  [TaskId.GROW_NIGHTSHADE]: {
    id: TaskId.GROW_NIGHTSHADE,
    name: "Grow Nightshade",
    description: "Sow some nightshade seeds. Handle with caution.",
    icon: Sprout,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    durationSec: 1200, // 20 minutes
    experience: 150,
    requiredLevel: 10,
    lootTable: {
      plants: {
        [ItemId.NIGHTSHADE]: { weight: 100, minQuantity: 1, maxQuantity: 3 },
      },
      seeds: {
        [ItemId.NIGHTSHADE_SEED]: {
          weight: 100,
          minQuantity: 1,
          maxQuantity: 2,
        },
      },
    },
    requires: { [ItemId.NIGHTSHADE_SEED]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: agricultureCommonModifiers,
  },

  [TaskId.GROW_SILVERLEAF]: {
    id: TaskId.GROW_SILVERLEAF,
    name: "Grow Silverleaf",
    description:
      "Plant the silverleaf seeds, known for their shimmering leaves.",
    icon: Sprout,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    durationSec: 300, // 5 minutes
    experience: 80,
    requiredLevel: 0,
    lootTable: {
      plants: {
        [ItemId.SILVERLEAF]: { weight: 100, minQuantity: 1, maxQuantity: 5 },
      },
      seeds: {
        [ItemId.SILVERLEAF_SEED]: {
          weight: 100,
          minQuantity: 1,
          maxQuantity: 5,
        },
      },
    },
    requires: { [ItemId.SILVERLEAF_SEED]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: agricultureCommonModifiers,
  },

  // 5) EMBER BLOSSOM
  [TaskId.GROW_EMBER_BLOSSOM]: {
    id: TaskId.GROW_EMBER_BLOSSOM,
    name: "Grow Ember Blossom",
    description: "Bright flowers that thrive in warm soil.",
    icon: Sprout,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    durationSec: 1800, // 30 minutes
    experience: 200,
    requiredLevel: 20,
    lootTable: {
      plants: {
        [ItemId.EMBER_BLOSSOM]: { weight: 100, minQuantity: 1, maxQuantity: 2 },
      },
      seeds: {
        [ItemId.EMBER_BLOSSOM_SEED]: {
          weight: 100,
          minQuantity: 1,
          maxQuantity: 2,
        },
      },
    },
    requires: { [ItemId.EMBER_BLOSSOM_SEED]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: agricultureCommonModifiers,
  },

  // 6) CRYSTAL FERN
  [TaskId.GROW_CRYSTAL_FERN]: {
    id: TaskId.GROW_CRYSTAL_FERN,
    name: "Grow Crystal Fern",
    description: "A rare fern that sparkles like crystals when it matures.",
    icon: Sprout,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    durationSec: 750, // 12.5 minutes
    experience: 130,
    requiredLevel: 8,
    lootTable: {
      plants: {
        [ItemId.CRYSTAL_FERN]: { weight: 100, minQuantity: 1, maxQuantity: 4 },
      },
      seeds: {
        [ItemId.CRYSTAL_FERN_SEED]: {
          weight: 100,
          minQuantity: 1,
          maxQuantity: 4,
        },
      },
    },
    requires: { [ItemId.CRYSTAL_FERN_SEED]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: agricultureCommonModifiers,
  },

  [TaskId.GROW_GHOST_PEPPER]: {
    id: TaskId.GROW_GHOST_PEPPER,
    name: "Grow Ghost Pepper",
    description: "A spicy pepper with a spectral aftertaste.",
    icon: Sprout,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    durationSec: 900, // 15 minutes
    experience: 120,
    requiredLevel: 5,
    lootTable: {
      plants: {
        [ItemId.GHOST_PEPPER]: { weight: 100, minQuantity: 1, maxQuantity: 5 },
      },
      seeds: {
        [ItemId.GHOST_PEPPER_SEED]: {
          weight: 100,
          minQuantity: 1,
          maxQuantity: 5,
        },
      },
    },
    requires: { [ItemId.GHOST_PEPPER_SEED]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: agricultureCommonModifiers,
  },

  [TaskId.GROW_VENOMWEED]: {
    id: TaskId.GROW_VENOMWEED,
    name: "Grow Venomweed",
    description: "A poisonous plant with potent alkaloids. Handle carefully.",
    icon: Sprout,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    durationSec: 1500, // 25 minutes
    experience: 180,
    requiredLevel: 15,
    lootTable: {
      plants: {
        [ItemId.VENOMWEED]: { weight: 100, minQuantity: 1, maxQuantity: 3 },
      },
      seeds: {
        [ItemId.VENOMWEED_SEED]: {
          weight: 100,
          minQuantity: 1,
          maxQuantity: 2,
        },
      },
    },
    requires: { [ItemId.VENOMWEED_SEED]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: agricultureCommonModifiers,
  },
};

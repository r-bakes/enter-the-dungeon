import {
  Hand,
  HardHat,
  Shield,
  Shirt,
  Slice,
  Sword,
  Tangent,
  ToyBrick,
} from "lucide-react";

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

export const smithingTasks: { [id in TaskId]?: Task } = {
  // Bronze Tasks
  [TaskId.SMITH_BRONZE_DAGGER]: {
    id: TaskId.SMITH_BRONZE_DAGGER,
    name: "Dagger",
    description: "Smith a bronze dagger.",
    icon: Slice,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      dagger: {
        [ItemId.BRONZE_DAGGER]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 1 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_BRONZE_SWORD]: {
    id: TaskId.SMITH_BRONZE_SWORD,
    name: "Sword",
    description: "Smith a bronze sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      sword: {
        [ItemId.BRONZE_SWORD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 2 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_BRONZE_SHIELD]: {
    id: TaskId.SMITH_BRONZE_SHIELD,
    name: "Shield",
    description: "Smith a bronze shield.",
    icon: Shield,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      shield: {
        [ItemId.BRONZE_SHIELD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 2 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_BRONZE_GREATSWORD]: {
    id: TaskId.SMITH_BRONZE_GREATSWORD,
    name: "Great Sword",
    description: "Smith a bronze great sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      greatsword: {
        [ItemId.BRONZE_GREAT_SWORD]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 4 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_BRONZE_HELMET]: {
    id: TaskId.SMITH_BRONZE_HELMET,
    name: "Helmet",
    description: "Smith a bronze helmet.",
    icon: HardHat,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      helmet: {
        [ItemId.BRONZE_HELMET]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 2 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_BRONZE_CHESTPLATE]: {
    id: TaskId.SMITH_BRONZE_CHESTPLATE,
    name: "Chestplate",
    description: "Smith a bronze chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      chestplate: {
        [ItemId.BRONZE_CHESTPLATE]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 4 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_BRONZE_BELT]: {
    id: TaskId.SMITH_BRONZE_BELT,
    name: "Belt",
    description: "Smith a bronze belt.",
    icon: Tangent,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      belt: {
        [ItemId.BRONZE_BELT]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 2 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_BRONZE_PLATELEGGINGS]: {
    id: TaskId.SMITH_BRONZE_PLATELEGGINGS,
    name: "Plate Leggings",
    description: "Smith bronze plate leggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      plateleggings: {
        [ItemId.BRONZE_PLATELEGGINGS]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 4 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_BRONZE_GAUNTLETS]: {
    id: TaskId.SMITH_BRONZE_GAUNTLETS,
    name: "Gauntlets",
    description: "Smith bronze gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {
      gauntlets: {
        [ItemId.BRONZE_GAUNTLETS]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.BRONZE_BAR]: 2 },
    category: SmithingTaskCategories.BRONZE_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },

  // Iron Tasks
  [TaskId.SMITH_IRON_DAGGER]: {
    id: TaskId.SMITH_IRON_DAGGER,
    name: "Dagger",
    description: "Smith an iron dagger.",
    icon: Slice,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 12,
    experience: 10,
    requiredLevel: 10,
    lootTable: {
      dagger: {
        [ItemId.IRON_DAGGER]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.IRON_BAR]: 1 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_IRON_SWORD]: {
    id: TaskId.SMITH_IRON_SWORD,
    name: "Sword",
    description: "Smith an iron sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 15,
    experience: 15,
    requiredLevel: 10,
    lootTable: {
      sword: {
        [ItemId.IRON_SWORD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.IRON_BAR]: 2 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_IRON_SHIELD]: {
    id: TaskId.SMITH_IRON_SHIELD,
    name: "Shield",
    description: "Smith an iron shield.",
    icon: Shield,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 15,
    experience: 20,
    requiredLevel: 10,
    lootTable: {
      shield: {
        [ItemId.IRON_SHIELD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.IRON_BAR]: 2 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_IRON_GREATSWORD]: {
    id: TaskId.SMITH_IRON_GREATSWORD,
    name: "Great Sword",
    description: "Smith an iron great sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 25,
    requiredLevel: 10,
    lootTable: {
      greatsword: {
        [ItemId.IRON_GREAT_SWORD]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.IRON_BAR]: 3 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_IRON_HELMET]: {
    id: TaskId.SMITH_IRON_HELMET,
    name: "Helmet",
    description: "Smith an iron helmet.",
    icon: HardHat,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 12,
    experience: 10,
    requiredLevel: 10,
    lootTable: {
      helmet: {
        [ItemId.IRON_HELMET]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.IRON_BAR]: 2 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_IRON_CHESTPLATE]: {
    id: TaskId.SMITH_IRON_CHESTPLATE,
    name: "Chestplate",
    description: "Smith an iron chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 18,
    experience: 15,
    requiredLevel: 10,
    lootTable: {
      chestplate: {
        [ItemId.IRON_CHESTPLATE]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.IRON_BAR]: 4 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_IRON_BELT]: {
    id: TaskId.SMITH_IRON_BELT,
    name: "Belt",
    description: "Smith an iron belt.",
    icon: Tangent,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 12,
    experience: 10,
    requiredLevel: 10,
    lootTable: {
      belt: {
        [ItemId.IRON_BELT]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.IRON_BAR]: 2 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_IRON_PLATELEGGINGS]: {
    id: TaskId.SMITH_IRON_PLATELEGGINGS,
    name: "Plate Leggings",
    description: "Smith iron plate leggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 18,
    experience: 15,
    requiredLevel: 10,
    lootTable: {
      plateleggings: {
        [ItemId.IRON_PLATELEGGINGS]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.IRON_BAR]: 4 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_IRON_GAUNTLETS]: {
    id: TaskId.SMITH_IRON_GAUNTLETS,
    name: "Gauntlets",
    description: "Smith iron gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 12,
    experience: 10,
    requiredLevel: 10,
    lootTable: {
      gauntlets: {
        [ItemId.IRON_GAUNTLETS]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.IRON_BAR]: 2 },
    category: SmithingTaskCategories.IRON_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },

  // Steel Tasks
  [TaskId.SMITH_STEEL_DAGGER]: {
    id: TaskId.SMITH_STEEL_DAGGER,
    name: "Dagger",
    description: "Smith a steel dagger.",
    icon: Slice,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 14,
    experience: 20,
    requiredLevel: 20,
    lootTable: {
      dagger: {
        [ItemId.STEEL_DAGGER]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 1 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_STEEL_SWORD]: {
    id: TaskId.SMITH_STEEL_SWORD,
    name: "Sword",
    description: "Smith a steel sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 16,
    experience: 25,
    requiredLevel: 20,
    lootTable: {
      sword: {
        [ItemId.STEEL_SWORD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 2 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_STEEL_SHIELD]: {
    id: TaskId.SMITH_STEEL_SHIELD,
    name: "Shield",
    description: "Smith a steel shield.",
    icon: Shield,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 16,
    experience: 30,
    requiredLevel: 20,
    lootTable: {
      shield: {
        [ItemId.STEEL_SHIELD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 2 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_STEEL_GREATSWORD]: {
    id: TaskId.SMITH_STEEL_GREATSWORD,
    name: "Great Sword",
    description: "Smith a steel great sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 22,
    experience: 35,
    requiredLevel: 20,
    lootTable: {
      greatsword: {
        [ItemId.STEEL_GREAT_SWORD]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 3 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_STEEL_HELMET]: {
    id: TaskId.SMITH_STEEL_HELMET,
    name: "Helmet",
    description: "Smith a steel helmet.",
    icon: HardHat,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 14,
    experience: 20,
    requiredLevel: 20,
    lootTable: {
      helmet: {
        [ItemId.STEEL_HELMET]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 2 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_STEEL_CHESTPLATE]: {
    id: TaskId.SMITH_STEEL_CHESTPLATE,
    name: "Chestplate",
    description: "Smith a steel chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 25,
    requiredLevel: 20,
    lootTable: {
      chestplate: {
        [ItemId.STEEL_CHESTPLATE]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 4 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_STEEL_BELT]: {
    id: TaskId.SMITH_STEEL_BELT,
    name: "Belt",
    description: "Smith a steel belt.",
    icon: Tangent,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 14,
    experience: 20,
    requiredLevel: 20,
    lootTable: {
      belt: {
        [ItemId.STEEL_BELT]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 2 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_STEEL_PLATELEGGINGS]: {
    id: TaskId.SMITH_STEEL_PLATELEGGINGS,
    name: "Plate Leggings",
    description: "Smith steel plate leggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 25,
    requiredLevel: 20,
    lootTable: {
      plateleggings: {
        [ItemId.STEEL_PLATELEGGINGS]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 4 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_STEEL_GAUNTLETS]: {
    id: TaskId.SMITH_STEEL_GAUNTLETS,
    name: "Gauntlets",
    description: "Smith steel gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 14,
    experience: 20,
    requiredLevel: 20,
    lootTable: {
      gauntlets: {
        [ItemId.STEEL_GAUNTLETS]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.STEEL_BAR]: 2 },
    category: SmithingTaskCategories.STEEL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },

  // Mithril Tasks
  [TaskId.SMITH_MITHRIL_DAGGER]: {
    id: TaskId.SMITH_MITHRIL_DAGGER,
    name: "Dagger",
    description: "Smith a mithril dagger.",
    icon: Slice,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 18,
    experience: 90,
    requiredLevel: 50,
    lootTable: {
      dagger: {
        [ItemId.MITHRIL_DAGGER]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 1 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_MITHRIL_SWORD]: {
    id: TaskId.SMITH_MITHRIL_SWORD,
    name: "Sword",
    description: "Smith a mithril sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 95,
    requiredLevel: 50,
    lootTable: {
      sword: {
        [ItemId.MITHRIL_SWORD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 2 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_MITHRIL_SHIELD]: {
    id: TaskId.SMITH_MITHRIL_SHIELD,
    name: "Shield",
    description: "Smith a mithril shield.",
    icon: Shield,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 100,
    requiredLevel: 50,
    lootTable: {
      shield: {
        [ItemId.MITHRIL_SHIELD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 2 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_MITHRIL_GREATSWORD]: {
    id: TaskId.SMITH_MITHRIL_GREATSWORD,
    name: "Great Sword",
    description: "Smith a mithril great sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 25,
    experience: 110,
    requiredLevel: 50,
    lootTable: {
      greatsword: {
        [ItemId.MITHRIL_GREAT_SWORD]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 3 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_MITHRIL_HELMET]: {
    id: TaskId.SMITH_MITHRIL_HELMET,
    name: "Helmet",
    description: "Smith a mithril helmet.",
    icon: HardHat,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 18,
    experience: 90,
    requiredLevel: 50,
    lootTable: {
      helmet: {
        [ItemId.MITHRIL_HELMET]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 2 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_MITHRIL_CHESTPLATE]: {
    id: TaskId.SMITH_MITHRIL_CHESTPLATE,
    name: "Chestplate",
    description: "Smith a mithril chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 24,
    experience: 100,
    requiredLevel: 50,
    lootTable: {
      chestplate: {
        [ItemId.MITHRIL_CHESTPLATE]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 4 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_MITHRIL_BELT]: {
    id: TaskId.SMITH_MITHRIL_BELT,
    name: "Belt",
    description: "Smith a mithril belt.",
    icon: Tangent,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 18,
    experience: 90,
    requiredLevel: 50,
    lootTable: {
      belt: {
        [ItemId.MITHRIL_BELT]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 2 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_MITHRIL_PLATELEGGINGS]: {
    id: TaskId.SMITH_MITHRIL_PLATELEGGINGS,
    name: "Plate Leggings",
    description: "Smith mithril plate leggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 24,
    experience: 100,
    requiredLevel: 50,
    lootTable: {
      plateleggings: {
        [ItemId.MITHRIL_PLATELEGGINGS]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 4 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_MITHRIL_GAUNTLETS]: {
    id: TaskId.SMITH_MITHRIL_GAUNTLETS,
    name: "Gauntlets",
    description: "Smith mithril gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 18,
    experience: 90,
    requiredLevel: 50,
    lootTable: {
      gauntlets: {
        [ItemId.MITHRIL_GAUNTLETS]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.MITHRIL_BAR]: 2 },
    category: SmithingTaskCategories.MITHRIL_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },

  // Adamant Tasks
  [TaskId.SMITH_ADAMANT_DAGGER]: {
    id: TaskId.SMITH_ADAMANT_DAGGER,
    name: "Dagger",
    description: "Smith an adamant dagger.",
    icon: Slice,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 100,
    requiredLevel: 60,
    lootTable: {
      dagger: {
        [ItemId.ADAMANT_DAGGER]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 1 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_ADAMANT_SWORD]: {
    id: TaskId.SMITH_ADAMANT_SWORD,
    name: "Sword",
    description: "Smith an adamant sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 22,
    experience: 110,
    requiredLevel: 60,
    lootTable: {
      sword: {
        [ItemId.ADAMANT_SWORD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 2 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_ADAMANT_SHIELD]: {
    id: TaskId.SMITH_ADAMANT_SHIELD,
    name: "Shield",
    description: "Smith an adamant shield.",
    icon: Shield,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 22,
    experience: 120,
    requiredLevel: 60,
    lootTable: {
      shield: {
        [ItemId.ADAMANT_SHIELD]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 2 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_ADAMANT_GREATSWORD]: {
    id: TaskId.SMITH_ADAMANT_GREATSWORD,
    name: "Great Sword",
    description: "Smith an adamant great sword.",
    icon: Sword,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 28,
    experience: 130,
    requiredLevel: 60,
    lootTable: {
      greatsword: {
        [ItemId.ADAMANT_GREAT_SWORD]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 3 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_ADAMANT_HELMET]: {
    id: TaskId.SMITH_ADAMANT_HELMET,
    name: "Helmet",
    description: "Smith an adamant helmet.",
    icon: HardHat,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 100,
    requiredLevel: 60,
    lootTable: {
      helmet: {
        [ItemId.ADAMANT_HELMET]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 2 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_ADAMANT_CHESTPLATE]: {
    id: TaskId.SMITH_ADAMANT_CHESTPLATE,
    name: "Chestplate",
    description: "Smith an adamant chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 28,
    experience: 130,
    requiredLevel: 60,
    lootTable: {
      chestplate: {
        [ItemId.ADAMANT_CHESTPLATE]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 4 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_ADAMANT_BELT]: {
    id: TaskId.SMITH_ADAMANT_BELT,
    name: "Belt",
    description: "Smith an adamant belt.",
    icon: Tangent,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 100,
    requiredLevel: 60,
    lootTable: {
      belt: {
        [ItemId.ADAMANT_BELT]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 2 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_ADAMANT_PLATELEGGINGS]: {
    id: TaskId.SMITH_ADAMANT_PLATELEGGINGS,
    name: "Plate Leggings",
    description: "Smith adamant plate leggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 28,
    experience: 130,
    requiredLevel: 60,
    lootTable: {
      plateleggings: {
        [ItemId.ADAMANT_PLATELEGGINGS]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 4 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
  [TaskId.SMITH_ADAMANT_GAUNTLETS]: {
    id: TaskId.SMITH_ADAMANT_GAUNTLETS,
    name: "Gauntlets",
    description: "Smith adamant gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 20,
    experience: 100,
    requiredLevel: 60,
    lootTable: {
      gauntlets: {
        [ItemId.ADAMANT_GAUNTLETS]: {
          weight: 1,
          minQuantity: 1,
          maxQuantity: 1,
        },
      },
    },
    requires: { [ItemId.ADAMANT_BAR]: 2 },
    category: SmithingTaskCategories.ADAMANT_SMITHING,
    applicableModifiers: smithingCommonModifiers,
  },
};

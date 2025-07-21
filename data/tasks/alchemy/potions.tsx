import { 
  Pickaxe, 
  Hammer, 
  Wheat, 
  Eye, 
  BookOpen, 
  Zap, 
  TrendingUp, 
  Dices,
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

export const alchemyPotionTasks: { [id in TaskId]?: Task } = {
  // Skill Buff Potions
  [TaskId.BREW_MINING_ELIXIR]: {
    id: TaskId.BREW_MINING_ELIXIR,
    name: "Brew Mining Elixir",
    description: "Create an elixir that enhances mining speed and ore finding.",
    category: AlchemyTaskCategories.POTIONS,
    icon: Pickaxe,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 25,
    experience: 40,
    durationSec: 18,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      mining: {
        [ItemId.MINING_ELIXIR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.ESSENCE_OF_EARTH]: 2,
      [ItemId.IRON_ORE]: 3,
      [ItemId.DISTILLED_WATER]: 2,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_SMITHING_POTION]: {
    id: TaskId.BREW_SMITHING_POTION,
    name: "Brew Smithing Potion",
    description: "Craft a potion that boosts smithing efficiency and quality.",
    category: AlchemyTaskCategories.POTIONS,
    icon: Hammer,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 28,
    experience: 45,
    durationSec: 20,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      smithing: {
        [ItemId.SMITHING_POTION]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.ESSENCE_OF_FIRE]: 2,
      [ItemId.COAL]: 5,
      [ItemId.ALCHEMICAL_SALT]: 2,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_FARMING_BREW]: {
    id: TaskId.BREW_FARMING_BREW,
    name: "Brew Farming Brew",
    description: "Mix a brew that improves crop growth and harvest yields.",
    category: AlchemyTaskCategories.POTIONS,
    icon: Wheat,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 20,
    experience: 35,
    durationSec: 15,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      farming: {
        [ItemId.FARMING_BREW]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.ESSENCE_OF_WATER]: 2,
      [ItemId.COMPOST]: 3,
      [ItemId.GINSENG]: 2,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_THIEVING_DRAUGHT]: {
    id: TaskId.BREW_THIEVING_DRAUGHT,
    name: "Brew Thieving Draught",
    description: "Concoct a draught that enhances stealth and nimble fingers.",
    category: AlchemyTaskCategories.POTIONS,
    icon: Eye,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 30,
    experience: 50,
    durationSec: 22,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      thieving: {
        [ItemId.THIEVING_DRAUGHT]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.ESSENCE_OF_AIR]: 2,
      [ItemId.VENOMWEED]: 2,
      [ItemId.NIGHTSHADE]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_EXPERIENCE_POTION]: {
    id: TaskId.BREW_EXPERIENCE_POTION,
    name: "Brew Experience Potion",
    description: "Create a legendary potion that increases experience gain from all activities.",
    category: AlchemyTaskCategories.POTIONS,
    icon: BookOpen,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 40,
    experience: 80,
    durationSec: 30,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      experience: {
        [ItemId.EXPERIENCE_POTION]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.CRYSTALLIZED_MAGIC]: 3,
      [ItemId.ESSENCE_OF_FIRE]: 1,
      [ItemId.ESSENCE_OF_EARTH]: 1,
      [ItemId.ESSENCE_OF_AIR]: 1,
      [ItemId.ESSENCE_OF_WATER]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_SPEED_ELIXIR]: {
    id: TaskId.BREW_SPEED_ELIXIR,
    name: "Brew Speed Elixir",
    description: "Formulate an elixir that accelerates all task completion times.",
    category: AlchemyTaskCategories.POTIONS,
    icon: Zap,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 35,
    experience: 65,
    durationSec: 25,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      speed: {
        [ItemId.SPEED_ELIXIR]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.ESSENCE_OF_AIR]: 3,
      [ItemId.CRYSTAL_FERN]: 4,
      [ItemId.ALCHEMICAL_SALT]: 2,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_PRODUCTIVITY_TONIC]: {
    id: TaskId.BREW_PRODUCTIVITY_TONIC,
    name: "Brew Productivity Tonic",
    description: "Blend a tonic that multiplies production from all crafting tasks.",
    category: AlchemyTaskCategories.POTIONS,
    icon: TrendingUp,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 38,
    experience: 70,
    durationSec: 28,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      productivity: {
        [ItemId.PRODUCTIVITY_TONIC]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.ESSENCE_OF_EARTH]: 3,
      [ItemId.MANDRAKE]: 3,
      [ItemId.CRYSTALLIZED_MAGIC]: 2,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_DOUBLE_CHANCE_PHILTER]: {
    id: TaskId.BREW_DOUBLE_CHANCE_PHILTER,
    name: "Brew Double Chance Philter",
    description: "Create a mystical philter that increases chance of bonus rewards.",
    category: AlchemyTaskCategories.POTIONS,
    icon: Dices,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 42,
    experience: 85,
    durationSec: 32,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      doubleChance: {
        [ItemId.DOUBLE_CHANCE_PHILTER]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.CRYSTALLIZED_MAGIC]: 4,
      [ItemId.GHOST_PEPPER]: 2,
      [ItemId.EMBER_BLOSSOM]: 2,
      [ItemId.ESSENCE_OF_WATER]: 2,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
};
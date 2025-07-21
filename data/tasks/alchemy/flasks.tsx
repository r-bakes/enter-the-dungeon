import {
  Heart,
  Zap,
  Battery,
  Sword,
  Shield,
  Wind,
  RefreshCw,
  Bolt,
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

export const alchemyFlaskTasks: { [id in TaskId]?: Task } = {
  // Combat Flasks
  [TaskId.BREW_HEALING_FLASK]: {
    id: TaskId.BREW_HEALING_FLASK,
    name: "Brew Healing Flask",
    description: "Create a potent healing elixir to restore health in combat.",
    category: AlchemyTaskCategories.FLASKS,
    icon: Heart,
    iconStyle: { fill: "currentColor", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 10,
    experience: 20,
    durationSec: 10,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      healing: {
        [ItemId.HEALING_FLASK]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.GINSENG]: 2,
      [ItemId.DISTILLED_WATER]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_MANA_FLASK]: {
    id: TaskId.BREW_MANA_FLASK,
    name: "Brew Mana Flask",
    description: "Concoct a mystical brew to restore magical energy.",
    category: AlchemyTaskCategories.FLASKS,
    icon: Zap,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 12,
    experience: 22,
    durationSec: 11,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      mana: {
        [ItemId.MANA_FLASK]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.NIGHTSHADE]: 2,
      [ItemId.CRYSTALLIZED_MAGIC]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_STAMINA_FLASK]: {
    id: TaskId.BREW_STAMINA_FLASK,
    name: "Brew Stamina Flask",
    description: "Mix an energizing brew to restore physical stamina.",
    category: AlchemyTaskCategories.FLASKS,
    icon: Battery,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 8,
    experience: 18,
    durationSec: 9,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      stamina: {
        [ItemId.STAMINA_FLASK]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.SILVERLEAF]: 3,
      [ItemId.DISTILLED_WATER]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_RAGE_FLASK]: {
    id: TaskId.BREW_RAGE_FLASK,
    name: "Brew Rage Flask",
    description: "Create a volatile elixir that enhances combat prowess.",
    category: AlchemyTaskCategories.FLASKS,
    icon: Sword,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 20,
    experience: 35,
    durationSec: 15,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      rage: {
        [ItemId.RAGE_FLASK]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.GHOST_PEPPER]: 2,
      [ItemId.ESSENCE_OF_FIRE]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_SHIELD_FLASK]: {
    id: TaskId.BREW_SHIELD_FLASK,
    name: "Brew Shield Flask",
    description: "Craft a protective elixir that hardens the drinker's defenses.",
    category: AlchemyTaskCategories.FLASKS,
    icon: Shield,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 18,
    experience: 32,
    durationSec: 14,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      shield: {
        [ItemId.SHIELD_FLASK]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.MANDRAKE]: 2,
      [ItemId.ESSENCE_OF_EARTH]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_HASTE_FLASK]: {
    id: TaskId.BREW_HASTE_FLASK,
    name: "Brew Haste Flask",
    description: "Blend a swift-acting potion that accelerates movement.",
    category: AlchemyTaskCategories.FLASKS,
    icon: Wind,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 16,
    experience: 28,
    durationSec: 13,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      haste: {
        [ItemId.HASTE_FLASK]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.CRYSTAL_FERN]: 2,
      [ItemId.ESSENCE_OF_AIR]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_CARD_DRAW_FLASK]: {
    id: TaskId.BREW_CARD_DRAW_FLASK,
    name: "Brew Card Draw Flask",
    description: "Prepare a tactical brew that sharpens combat awareness.",
    category: AlchemyTaskCategories.FLASKS,
    icon: RefreshCw,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 22,
    experience: 38,
    durationSec: 16,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      cardDraw: {
        [ItemId.CARD_DRAW_FLASK]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.VENOMWEED]: 1,
      [ItemId.CRYSTALLIZED_MAGIC]: 1,
      [ItemId.ESSENCE_OF_WATER]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
  [TaskId.BREW_ENERGY_FLASK]: {
    id: TaskId.BREW_ENERGY_FLASK,
    name: "Brew Energy Flask",
    description: "Formulate an energizing tonic for sustained combat performance.",
    category: AlchemyTaskCategories.FLASKS,
    icon: Bolt,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    requiredLevel: 14,
    experience: 25,
    durationSec: 12,
    applicableModifiers: alchemyCommonModifiers,
    lootTable: {
      energy: {
        [ItemId.ENERGY_FLASK]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {
      [ItemId.EMBER_BLOSSOM]: 2,
      [ItemId.ALCHEMICAL_SALT]: 1,
      [ItemId.GLASS_VIAL]: 1,
    },
  },
};
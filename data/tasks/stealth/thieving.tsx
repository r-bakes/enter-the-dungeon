import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ModifierType } from "@/data/modifiers/enums";
import { StealthTaskCategories } from "@/data/skills/enums";
import { PersonStanding, Store } from "lucide-react";
import { TaskId } from "../enum";
import { StealthTask, Task } from "@/types/tasks";
import { ItemId } from "@/data/items/enums";

const stealthCommonModifiers = new Set([
  ModifierType.STEALTH,
  ModifierType.SPEED,
  ModifierType.EXPERIENCE,
  ModifierType.DOUBLE_CHANCE,
  ModifierType.PRODUCTION_MULTIPLIER,
]);

export const thievingTasks: { [id in TaskId]?: StealthTask } = {
  [TaskId.PICKPOCKET_TOWNSPERSON]: {
    id: TaskId.PICKPOCKET_TOWNSPERSON,
    name: "Pickpocket Townsperson",
    description: "Pickpocket a townsperson.",
    icon: PersonStanding,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 1,
    requiredLevel: 1,
    perception: 2,
    lootTable: {
      gold: { [ItemId.GOLD]: { weight: 1, minQuantity: 5, maxQuantity: 10 } },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
  [TaskId.SEED_STALL_THEFT]: {
    id: TaskId.SEED_STALL_THEFT,
    name: "Seed Stall Theft",
    description: "Steal from the grand marketplace's seed stall.",
    icon: Store,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 4,
    experience: 12,
    requiredLevel: 10,
    perception: 20,
    lootTable: {
      food: {
        [ItemId.GINSENG_SEED]: { weight: 100, minQuantity: 1, maxQuantity: 5 },
      },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
  [TaskId.PICKPOCKET_GUARD]: {
    id: TaskId.PICKPOCKET_GUARD,
    name: "Pickpocket Guard",
    description: "Pickpocket a guard in the town.",
    icon: PersonStanding,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 8,
    experience: 50,
    requiredLevel: 20,
    perception: 40,
    lootTable: {
      gear: {
        [ItemId.IRON_SWORD]: { weight: 25, minQuantity: 1, maxQuantity: 1 },
        [ItemId.IRON_SHIELD]: { weight: 25, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
  [TaskId.PICKPOCKET_MERCHANT]: {
    id: TaskId.PICKPOCKET_MERCHANT,
    name: "Pickpocket Merchant",
    description: "Pickpocket a wealthy merchant in the grand marketplace.",
    icon: PersonStanding,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 5,
    experience: 100,
    requiredLevel: 30,
    perception: 60,
    lootTable: {
      goods: {
        [ItemId.GOLD]: { weight: 50, minQuantity: 200, maxQuantity: 300 },
        [ItemId.GOLD_BAR]: { weight: 40, minQuantity: 1, maxQuantity: 5 },
        [ItemId.PLATINUM_BAR]: { weight: 10, minQuantity: 1, maxQuantity: 5 },
      },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
  [TaskId.GEM_STALL_THEFT]: {
    id: TaskId.GEM_STALL_THEFT,
    name: "Gem Stall Theft",
    description: "Steal from the grand marketplace's gem stall.",
    icon: Store,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 150,
    requiredLevel: 40,
    perception: 80,
    lootTable: {
      misc: {
        [ItemId.GOLD]: { weight: 84, minQuantity: 50, maxQuantity: 100 },
        [ItemId.SAPPHIRE]: { weight: 10, minQuantity: 1, maxQuantity: 1 },
        [ItemId.EMERALD]: { weight: 5, minQuantity: 1, maxQuantity: 1 },
        [ItemId.DIAMOND]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
  [TaskId.PICKPOCKET_KNIGHT]: {
    id: TaskId.PICKPOCKET_KNIGHT,
    name: "Pickpocket Knight",
    description: "Pickpocket a knight in shining armor.",
    icon: PersonStanding,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 200,
    requiredLevel: 50,
    perception: 100,
    lootTable: {
      combat: {
        [ItemId.STEEL_SWORD]: { weight: 20, minQuantity: 1, maxQuantity: 1 },
        [ItemId.STEEL_SHIELD]: { weight: 20, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
  [TaskId.PICKPOCKET_DUKE]: {
    id: TaskId.PICKPOCKET_DUKE,
    name: "Pickpocket Duke",
    description: "Pickpocket the duke.",
    icon: PersonStanding,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 300,
    requiredLevel: 60,
    perception: 100,
    lootTable: {
      treasures: {
        [ItemId.GOLD]: { weight: 100, minQuantity: 500, maxQuantity: 1000 },
      },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
};

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ModifierType } from "@/data/modifiers/enums";
import { StealthTaskCategories } from "@/data/skills/enums";
import { PersonStanding, Store } from "lucide-react";
import { TaskId } from "../enum";
import { Task } from "@/types/tasks";
import { ItemId } from "@/data/items/enums";

const stealthCommonModifiers = new Set([
  ModifierType.SPEED,
  ModifierType.EXPERIENCE,
  ModifierType.DOUBLE_CHANCE,
  ModifierType.PRODUCTION_MULTIPLIER,
]);

export const thievingTasks: { [id in TaskId]?: Task } = {
  [TaskId.PICKPOCET_TOWNSPERSON]: {
    id: TaskId.PICKPOCET_TOWNSPERSON,
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
    lootTable: {
      gold: { [ItemId.GOLD]: { weight: 1, minQuantity: 5, maxQuantity: 10 } },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
  [TaskId.STEAL_FROM_BAZAAR]: {
    id: TaskId.STEAL_FROM_BAZAAR,
    name: "Steal from Bazaar",
    description: "Steal from stalls in the grand marketplace.",
    icon: Store,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 20,
    requiredLevel: 15,
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
};

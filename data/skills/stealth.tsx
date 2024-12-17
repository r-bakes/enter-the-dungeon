import { PersonStanding, Store, VenetianMask } from "lucide-react";

import { Task } from "@/types/skills";
import { Skill } from "@/types/Skill";
import {
  SKILL_AND_MENU_ICON_STYLE,
  TASK_AND_ITEM_ICON_STYLE,
} from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { StealthTaskCategories } from "@/data/skills/enums";

const stealthCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

const stealthTasks: { [taskId: string]: Task } = {
  pickpocketTownsperson: {
    id: "pickpocketTownsperson",
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
      gold: { gold: { weight: 1, minQuantity: 5, maxQuantity: 10 } },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
  stealFromBazaar: {
    id: "stealFromBazaar",
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
        gold: { weight: 84, minQuantity: 50, maxQuantity: 100 },
        sapphire: { weight: 10, minQuantity: 1, maxQuantity: 1 },
        emerald: { weight: 5, minQuantity: 1, maxQuantity: 1 },
        diamond: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: {},
    category: StealthTaskCategories.THIEVING,
    applicableModifiers: stealthCommonModifiers,
  },
};

export const stealth: Skill = {
  id: "stealth",
  name: "Stealth",
  description: "The ability to sneak and perform sleight of hand.",
  icon: VenetianMask,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: stealthTasks,
  taskCategories: StealthTaskCategories,
};

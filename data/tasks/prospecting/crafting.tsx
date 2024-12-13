import { Circle, Gem, Mountain, SearchSlash } from "lucide-react";

import {
  SKILL_AND_MENU_ICON_STYLE,
  TASK_AND_ITEM_ICON_STYLE,
} from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { ProspectingCraftingTaskId } from "./enum";
import { Task } from "@/types/tasks";

const prospectingCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const craftingTasks: { [id in ProspectingCraftingTaskId]: Task } = {
  [ProspectingCraftingTaskId.CUT_GEODE]: {
    id: ProspectingCraftingTaskId.CUT_GEODE,
    name: "Cut Geode",
    description: "Cut a geode into a gem.",
    icon: Gem,
    iconStyle: { fill: "#FF70AB", ...TASK_AND_ITEM_ICON_STYLE },
    durationSec: 8,
    experience: 100,
    requiredLevel: 10,
    lootTable: {
      gems: {
        sapphire: { weight: 90, minQuantity: 1, maxQuantity: 1 },
        emerald: { weight: 9, minQuantity: 1, maxQuantity: 1 },
        diamond: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { geode: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: prospectingCommonModifiers,
  },
};

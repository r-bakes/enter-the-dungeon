import { Gem } from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { Task } from "@/types/tasks";
import { ItemId } from "@/data/items/enums";
import { TaskId } from "../enum";

const prospectingCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const craftingTasks: { [id in TaskId]?: Task } = {
  [TaskId.CUT_GEODE]: {
    id: TaskId.CUT_GEODE,
    name: "Cut Geode",
    description: "Cut a geode into a gem.",
    icon: Gem,
    iconStyle: { fill: "#FF70AB", ...TASK_AND_ITEM_ICON_STYLE },
    durationSec: 8,
    experience: 100,
    requiredLevel: 10,
    lootTable: {
      gems: {
        [ItemId.SAPPHIRE]: { weight: 90, minQuantity: 1, maxQuantity: 1 },
        [ItemId.EMERALD]: { weight: 9, minQuantity: 1, maxQuantity: 1 },
        [ItemId.DIAMOND]: { weight: 1, minQuantity: 1, maxQuantity: 1 },
      },
    },
    requires: { [ItemId.GEODE]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: prospectingCommonModifiers,
  },
};

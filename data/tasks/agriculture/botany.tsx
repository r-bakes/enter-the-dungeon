import { Gem, Sprout } from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { TaskId } from "../enum";
import { Task } from "@/types/tasks";
import { ItemId } from "@/data/items/enums";

const prospectingCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const BotanyTasks: { [id in TaskId]?: Task } = {
  [TaskId.GROW_GINSENG]: {
    id: TaskId.GROW_GINSENG,
    name: "Grow Ginseng",
    description: "Sow some ginseng seeds.",
    icon: Sprout,
    iconStyle: { fill: "#FF70AB", ...TASK_AND_ITEM_ICON_STYLE },
    durationSec: 7200,
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
    requires: { [ItemId.GEODE]: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: prospectingCommonModifiers,
  },
};

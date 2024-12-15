import { Gem, Sprout } from "lucide-react";

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { Task } from "@/types/tasks";
import { AgricultureBotanyTaskId } from "./enum";
import { PlantId, SeedId } from "@/data/items/enums";

const prospectingCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

export const BotanyTasks: { [id in AgricultureBotanyTaskId]: Task } = {
  [AgricultureBotanyTaskId.GROW_GINSENG]: {
    id: AgricultureBotanyTaskId.GROW_GINSENG,
    name: "Grow Ginseng",
    description: "Sow some ginseng seeds.",
    icon: Sprout,
    iconStyle: { fill: "#FF70AB", ...TASK_AND_ITEM_ICON_STYLE },
    durationSec: 7200,
    experience: 100,
    requiredLevel: 0,
    lootTable: {
      plants: {
        [PlantId.GINSENG]: { weight: 100, minQuantity: 1, maxQuantity: 5 },
      },
      seeds: {
        [SeedId.GINSENG_SEED]: { weight: 100, minQuantity: 1, maxQuantity: 5 },
      },
    },
    requires: { geode: 1 },
    category: ProspectingTaskCategories.CRAFTING,
    applicableModifiers: prospectingCommonModifiers,
  },
};

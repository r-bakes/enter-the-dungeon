import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { AgricultureTaskCategories } from "@/data/skills/enums";
import { Skill, Task } from "@/types/skills";
import { Sprout } from "lucide-react";

const agricultureCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

const agricultureTasks: { [taskId: string]: Task } = {};

export const agriculture: Skill = {
  id: "agriculture",
  name: "Agriculture",
  description: "The ability to take care of plants and animals.",
  icon: Sprout,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: agricultureTasks,
  taskCategories: AgricultureTaskCategories,
};

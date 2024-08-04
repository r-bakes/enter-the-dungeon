import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { AlchemyTaskCategories } from "@/data/skills/enums";
import { Skill, Task } from "@/types/skills";
import { Droplet } from "lucide-react";

const alchemyCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
  SkillModifierType.DOUBLE_CHANCE,
  SkillModifierType.PRODUCTION_MULTIPLIER,
]);

const alchemyTasks: { [taskId: string]: Task } = {};

export const alchemy: Skill = {
  id: "alchemy",
  name: "Alchemy",
  description: "The ability to potions and tinctures.",
  icon: Droplet,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: alchemyTasks,
  taskCategories: AlchemyTaskCategories,
};

import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { ModifierType } from "@/data/modifiers/enums";
import { AlchemyTaskCategories, SkillId } from "@/data/skills/enums";
import { Droplet } from "lucide-react";
import { TaskId } from "../tasks/enum";
import { Task } from "@/types/tasks";
import { Skill } from "@/types/skills";
import { alchemyReagentTasks } from "../tasks/alchemy/reagents";
import { alchemyFlaskTasks } from "../tasks/alchemy/flasks";
import { alchemyPotionTasks } from "../tasks/alchemy/potions";

const alchemyCommonModifiers = new Set([
  ModifierType.SPEED,
  ModifierType.EXPERIENCE,
  ModifierType.DOUBLE_CHANCE,
  ModifierType.PRODUCTION_MULTIPLIER,
]);

const alchemyTasks: { [id in TaskId]?: Task } = {
  ...alchemyReagentTasks,
  ...alchemyFlaskTasks,
  ...alchemyPotionTasks,
};

export const alchemy: Skill = {
  id: SkillId.ALCHEMY,
  name: "Alchemy",
  description: "The ability to potions and tinctures.",
  icon: Droplet,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: alchemyTasks,
  taskCategories: AlchemyTaskCategories,
};

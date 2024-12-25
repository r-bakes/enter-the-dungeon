import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { AgricultureTaskCategories, SkillId } from "@/data/skills/enums";
import { Skill } from "@/types/skills";
import { Sprout } from "lucide-react";
import { botanyTasks } from "../tasks/agriculture/botany";

const agricultureTasks = { ...botanyTasks };

export const agriculture: Skill = {
  id: SkillId.AGRICULTURE,
  name: "Agriculture",
  description: "The ability to take care of plants and animals.",
  icon: Sprout,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: agricultureTasks,
  taskCategories: AgricultureTaskCategories,
};

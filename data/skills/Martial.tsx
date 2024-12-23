import { Swords } from "lucide-react";
import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { Skill } from "@/types/skills";
import { SkillId } from "./enums";

export const martial: Skill = {
  id: SkillId.MARTIAL,
  name: "Martial",
  description: "test",
  icon: Swords,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: {},
};

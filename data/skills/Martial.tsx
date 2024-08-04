import { Swords } from "lucide-react";
import { Skill } from "@/types/skills";
import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";

export const martial: Skill = {
  id: "martial",
  name: "Martial",
  description: "test",
  icon: Swords,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: {},
};

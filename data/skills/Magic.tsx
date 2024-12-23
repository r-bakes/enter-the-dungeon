import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { Skill } from "@/types/skills";
import { Wand2 } from "lucide-react";
import { SkillId } from "./enums";

export const magic: Skill = {
  id: SkillId.MAGIC,
  name: "Magic",
  description: "test",
  icon: Wand2,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: {},
};

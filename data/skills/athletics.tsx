import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { AthleticsTaskCategories } from "@/data/skills/enums";
import { Skill } from "@/types/skills";
import { PersonStanding } from "lucide-react";
import { calistheticsTasks } from "../tasks/athletics/calisthetics";

const tasks = { ...calistheticsTasks };

export const athletics: Skill = {
  id: "athletics",
  name: "Athletics",
  description: "The ability to perform physically.",
  icon: PersonStanding,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: tasks,
  taskCategories: AthleticsTaskCategories,
};

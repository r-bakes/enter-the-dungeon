import { SearchSlash } from "lucide-react";

import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { Skill } from "@/types/Skill";
import { ProspectingTaskCategories, SkillId } from "@/data/skills/enums";
import { craftingTasks } from "../tasks/prospecting/crafting";
import { miningTasks } from "../tasks/prospecting/mining";
import { ProspectingTaskId } from "@/types/tasks";

let tasks = { ...craftingTasks, ...miningTasks };

export const prospecting: Skill<ProspectingTaskId> = {
  id: SkillId.PROSPECTING,
  name: "Prospecting",
  description: "The ability to search for and excavate mineral deposits.",
  icon: SearchSlash,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: tasks,
  taskCategories: ProspectingTaskCategories,
};

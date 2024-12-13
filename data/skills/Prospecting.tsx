import { Circle, Gem, Mountain, SearchSlash } from "lucide-react";

import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { Skill, Task } from "@/types/skills";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { craftingTasks } from "../tasks/prospecting/crafting";
import { miningTasks } from "../tasks/prospecting/mining";

let tasks = { ...craftingTasks, ...miningTasks };

export const prospecting: Skill = {
  id: "prospecting",
  name: "Prospecting",
  description: "The ability to search for and excavate mineral deposits.",
  icon: SearchSlash,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: tasks,
  taskCategories: ProspectingTaskCategories,
};

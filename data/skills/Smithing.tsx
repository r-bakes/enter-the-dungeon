import { Anvil } from "lucide-react";

import { Skill } from "@/types/Skill";
import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { SmithingTaskCategories } from "@/data/skills/enums";
import { smeltingTasks } from "../tasks/smithing/smelting";
import { smithingTasks } from "../tasks/smithing/smithing";
import { SmithingTaskId } from "@/types/tasks";

const tasks = { ...smeltingTasks, ...smithingTasks };

export const smithing: Skill<SmithingTaskId> = {
  id: "smithing",
  name: "Smithing",
  description: "The ability to forge arms, armor, and trade goods.",
  icon: Anvil,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: tasks,
  taskCategories: SmithingTaskCategories,
};

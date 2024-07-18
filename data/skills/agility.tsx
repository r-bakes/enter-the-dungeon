import { PersonStanding } from "lucide-react";
import { Skill, Task } from "./skills";
import {
  SKILL_AND_MENU_ICON_STYLE,
  TASK_AND_ITEM_ICON_STYLE,
} from "../configurations";

const jumpingJacks: Task = {
  id: "jumpingJacks",
  name: "Jumping Jacks",
  description: "Do jumping jacks.",
  icon: PersonStanding,
  iconStyle: {
    fill: "none",
    ...TASK_AND_ITEM_ICON_STYLE,
  },
  durationSec: 10,
  experience: 1,
  requiredLevel: 1,
};

export const agility: Skill = {
  id: "agility",
  name: "Agility",
  description: "The ability to perform physically.",
  icon: PersonStanding,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {
    workouts: [jumpingJacks],
  },
};

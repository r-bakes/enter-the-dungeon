import { LucideIcon } from "lucide-react";
import { SkillTasks, Task } from "./skills/skills";

export type GameObject = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export function getAllTasks(tasks: SkillTasks) {
  let allTasks: Task[] = [];
  Object.keys(tasks).forEach((key) => {
    allTasks.push(...tasks[key]);
  });
  return allTasks;
}

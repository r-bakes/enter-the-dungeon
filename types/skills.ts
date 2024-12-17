import { SkillId } from "@/data/skills/enums";
import { GameObject } from "./gameObjects";
import { TaskId } from "@/data/tasks/enum";
import { Task } from "./tasks";

export type Skill = {
  tasks: { [id in TaskId]?: Task };
  taskCategories: { [categoryId: string]: string };
} & GameObject;

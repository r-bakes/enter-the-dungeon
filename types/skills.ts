import { GameObject } from "./gameObjects";
import { TaskId } from "@/data/tasks/enum";
import { Task } from "./tasks";
import { SkillId } from "@/data/skills/enums";

export type Skill = {
  id: SkillId;
  tasks: { [id in TaskId]?: Task };
  taskCategories: { [categoryId: string]: string };
} & GameObject;

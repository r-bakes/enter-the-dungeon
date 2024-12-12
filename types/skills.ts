import { GameObject } from "./gameObjects";
import { Task, TaskId } from "./tasks";

export type Skill = {
  tasks: { [id in TaskId]: Task };
  taskCategories: { [taskCategory: string]: string };
} & GameObject;

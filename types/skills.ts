import { smithingTasks } from "@/data/tasks/smithing/smithing";
import { GameObject } from "./gameObjects";
import { Task } from "./tasks";

export type Skill<T extends string> = {
  tasks: Record<T, Task>;
  taskCategories: Record<string, string>;
} & GameObject;

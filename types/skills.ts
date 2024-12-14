import { smithingTasks } from "@/data/tasks/smithing/smithing";
import { GameObject } from "./gameObjects";
import { Task } from "./tasks";

export type Skill<T extends string> = {
  tasks: {<T>: Task};
  taskCategories: { string: string };
} & GameObject;

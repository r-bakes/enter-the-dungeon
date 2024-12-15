import { craftingTasks } from "./prospecting/crafting";
import { smeltingTasks } from "./smithing/smelting";
import { smithingTasks } from "./smithing/smithing";
import { miningTasks } from "./prospecting/mining";
import { TaskId } from "@/types/tasks";
import { calistheticsTasks } from "./athletics/calisthetics";

export const tasksTable: { [id in TaskId]: Task } = {
  ...smithingTasks,
  ...smeltingTasks,
  ...miningTasks,
  ...craftingTasks,
  ...calistheticsTasks,
};

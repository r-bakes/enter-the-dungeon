import { Task } from "@/types/skills";
import { craftingTasks } from "./mining/crafting";
import { miningTasks } from "./mining/mining";
import { smeltingTasks } from "./smithing/smelting";
import { smithingTasks } from "./smithing/smithing";

export const tasksTable: { [id in TaskId]: Task } = {
  ...smithingTasks,
  ...smeltingTasks,
  ...miningTasks,
  ...craftingTasks,
  ...athleticsTasks,
};

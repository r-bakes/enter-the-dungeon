import { craftingTasks } from "./prospecting/crafting";
import { smeltingTasks } from "./smithing/smelting";
import { smithingTasks } from "./smithing/smithing";
import { miningTasks } from "./prospecting/mining";
import { calistheticsTasks } from "./athletics/calisthetics";
import { TaskId } from "./enum";
import { Task } from "@/types/tasks";
import { botanyTasks } from "./agriculture/botany";
import { thievingTasks } from "./stealth/thieving";

export const taskTable = {
  ...smithingTasks,
  ...smeltingTasks,
  ...miningTasks,
  ...craftingTasks,
  ...calistheticsTasks,
  ...botanyTasks,
  ...thievingTasks,
} as { [id in TaskId]: Task };

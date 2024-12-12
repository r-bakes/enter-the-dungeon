import { miningTasks } from "./mining/mining";
import { smithingTasks } from "./smithing/smithing";

export const tasksTable = {
  ...smithingTasks,
  ...miningTasks,
  ...athleticsTasks,
};

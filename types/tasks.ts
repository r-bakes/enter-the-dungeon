import {
  MiningCategoryTaskId,
  MiningCraftingTaskId,
} from "@/data/tasks/mining/enum";
import { SmeltingCategoryTaskId } from "@/data/tasks/smithing/enum";

export type MiningTaskId = MiningCraftingTaskId | MiningCategoryTaskId;
export type SmeltingTaskId = SmeltingCategoryTaskId;

export type TaskId = MiningTaskId | SmeltingTaskId;

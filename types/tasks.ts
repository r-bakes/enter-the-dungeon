import {
  MiningCategoryTaskId,
  MiningCraftingTaskId,
} from "@/data/tasks/mining/enum";
import { SmeltingCategoryTaskId } from "@/data/tasks/smithing/enum";
import { LootTable } from "./loot";
import { GameObject } from "./gameObjects";
import { SkillModifierType } from "@/data/modifiers/enums";

export type MiningTaskId = MiningCraftingTaskId | MiningCategoryTaskId;
export type SmeltingTaskId = SmeltingCategoryTaskId;

export type TaskId = MiningTaskId | SmeltingTaskId;

export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  category: string;
  requires: { [itemId: string]: number };
  applicableModifiers: Set<SkillModifierType>;
} & GameObject;

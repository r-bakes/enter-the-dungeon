import {
  SmeltingCategoryTaskId,
  SmithingCategoryTaskId,
} from "@/data/tasks/smithing/enum";
import { LootTable } from "./loot";
import { GameObject } from "./gameObjects";
import { SkillModifierType } from "@/data/modifiers/enums";
import {
  ProspectingCategoryTaskId,
  ProspectingCraftingTaskId,
} from "@/data/tasks/prospecting/enum";

export type ProspectingTaskId =
  | ProspectingCraftingTaskId
  | ProspectingCategoryTaskId;
export type SmithingTaskId = SmithingCategoryTaskId | SmeltingCategoryTaskId;

export type TaskId = ProspectingTaskId | SmithingTaskId;

export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  category: string;
  requires: { [itemId: string]: number };
  applicableModifiers: Set<SkillModifierType>;
} & GameObject;

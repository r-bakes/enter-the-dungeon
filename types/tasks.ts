import {
  SmeltingCategoryTaskId,
  SmithingCategoryTaskId,
} from "@/data/tasks/smithing/enum";
import { LootTable } from "./loot";
import { GameObject } from "./gameObjects";
import { SkillModifierType } from "@/data/modifiers/enums";
import {
  ProspectingCraftingTaskId,
  ProspectingMiningTaskId,
} from "@/data/tasks/prospecting/enum";
import { CalistheticCategoryTaskId } from "@/data/tasks/athletics/enum";
import {
  AgricultureBotanyTaskId,
  AgricultureRanchingTaskId,
} from "@/data/tasks/agriculture/enum";

export type AgricultureTaskId =
  | AgricultureBotanyTaskId
  | AgricultureRanchingTaskId;
export type ProspectingTaskId =
  | ProspectingCraftingTaskId
  | ProspectingMiningTaskId;
export type SmithingTaskId = SmithingCategoryTaskId | SmeltingCategoryTaskId;
export type AthleticsTaskId = CalistheticCategoryTaskId;

export type TaskId =
  | ProspectingTaskId
  | SmithingTaskId
  | AthleticsTaskId
  | AgricultureTaskId;

export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  category: string;
  requires: { [itemId: string]: number };
  applicableModifiers: Set<SkillModifierType>;
} & GameObject;

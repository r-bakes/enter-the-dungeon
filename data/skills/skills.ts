import { GameObject } from "../gameObject";

import { LootTable } from "@/engine/utils/lootUtilities";
import { prospecting } from "./prospecting";
import { smithing } from "./smithing";
import { martial } from "./martial";
import { enchanting } from "./enchanting";
import { magic } from "./magic";
import { crafting } from "./crafting";
import { athletics } from "./athletics";
import { SkillModifierType } from "../modifiers/skillModifiers";

export type Tasks = { [taskId: string]: Task };
export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  category: TaskCategory;
  requires: { [itemId: string]: number };
  applicableModifiers: Set<SkillModifierType>;
} & GameObject;
export type Skill = {
  tasks: Tasks;
  taskCategories: { [taskCategory: TaskCategory]: string };
} & GameObject;
export type TaskCategory = string;
export type TaskId = string;
export type SkillId = string;

export const skillTable: { [skillId: string]: Skill } = {
  [prospecting.id]: prospecting,
  [smithing.id]: smithing,
  [martial.id]: martial,
  [magic.id]: magic,
  [enchanting.id]: enchanting,
  [crafting.id]: crafting,
  [athletics.id]: athletics,
};

import { LootTable } from "./loot";
import { GameObject } from "./gameObjects";
import { SkillModifierType } from "@/data/modifiers/enums";
import { TaskId } from "./tasks";

export type Tasks = { [id in TaskId]: Task };
export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  category: string;
  requires: { [itemId: string]: number };
  applicableModifiers: Set<SkillModifierType>;
} & GameObject;
export type Skill = {
  tasks: Tasks;
  taskCategories: { [taskCategory: string]: string };
} & GameObject;

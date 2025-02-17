import { GameObject } from "./gameObjects";
import { ModifierType } from "@/data/modifiers/enums";
import { LootTable } from "./loot";
import { ItemId } from "@/data/items/enums";
import { TaskId } from "@/data/tasks/enum";

export type TaskRequires = { [id in ItemId]?: number };

export type Task = {
  id: TaskId;
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  category: string;
  requires: TaskRequires;
  applicableModifiers: Set<ModifierType>;
} & GameObject;

export type StealthTask = {
  perception: number;
} & Task;

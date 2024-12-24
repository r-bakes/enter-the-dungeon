import { GameObject } from "./gameObjects";
import { SkillModifierType } from "@/data/modifiers/enums";
import { LootTable } from "./loot";
import { ItemId } from "@/data/items/enums";
import { TaskId } from "@/data/tasks/enum";

export type Task = {
  id: TaskId;
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  category: string;
  requires: { [id in ItemId]?: number };
  applicableModifiers: Set<SkillModifierType>;
} & GameObject;

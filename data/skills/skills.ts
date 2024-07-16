import { GameObject } from "../gameObject";

import { LootTable } from "@/engine/utils/lootUtilities";

export type SkillTasks = { [taskCategory: string]: Task[] };

export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  requires: { [itemId: string]: number };
} & GameObject;

export type Skill = {
  tasks: SkillTasks;
} & GameObject;

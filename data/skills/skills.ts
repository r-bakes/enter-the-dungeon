import { GameObject } from "../gameObject";

import { LootTable } from "@/engine/utils/lootUtilities";
import { prospecting } from "./prospecting";
import { smithing } from "./smithing";
import { martial } from "./martial";
import { enchanting } from "./enchanting";
import { magic } from "./magic";
import { crafting } from "./crafting";
import { agility } from "./agility";
import { SkillModifierType } from "../modifiers/skillModifiers";

export type SkillTasks = { [taskCategory: string]: Task[] };
export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  requires: { [itemId: string]: number };
  applicableModifiers: Set<SkillModifierType>;
} & GameObject;
export type Skill = {
  tasks: SkillTasks;
} & GameObject;

export const skillTable: { [skillId: string]: Skill } = {
  [prospecting.id]: prospecting,
  [smithing.id]: smithing,
  [martial.id]: martial,
  [magic.id]: magic,
  [enchanting.id]: enchanting,
  [crafting.id]: crafting,
  [agility.id]: agility,
};

export const getAllTasks = (tasks: SkillTasks) => {
  let allTasks: Task[] = [];
  Object.keys(tasks).forEach((key) => {
    allTasks.push(...tasks[key]);
  });
  return allTasks;
};

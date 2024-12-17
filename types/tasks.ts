import { GameObject } from "./gameObjects";
import { SkillModifierType } from "@/data/modifiers/enums";
import { LootTable } from "./loot";

export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  category: string;
  requires: { [itemId: string]: number };
  applicableModifiers: Set<SkillModifierType>;
} & GameObject;

import { LootTable } from "@/engine/utils/lootUtilities";
import { SkillModifierType } from "../modifiers/types";
import { GameObject } from "../gameObject";

export type Tasks = { [taskId: string]: Task };
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

export enum ProspectingTaskCategories {
  MINE = "mine",
  CRAFTING = "crafting",
}
export enum SmithingTaskCategories {
  SMELTING = "smelting",
  BRONZE_SMITHING = "bronze smithing",
  IRON_SMITHING = "iron smithing",
  STEEL_SMITHING = "steel smithing",
  MITHRIL_SMITHING = "mithril smithing",
  ADAMANT_SMITHING = "adamant smithing",
}
export enum AthleticsTaskCategories {
  CALISTHETICS = "calisthetics",
}
export enum CraftingTaskCategories {
  NECKLACES = "necklaces",
}
export enum EnchantingTaskCategories {}
export enum StealthTaskCategories {
  THIEVING = "thieving",
}

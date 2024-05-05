import { LucideIcon } from "lucide-react";
import { LootTable } from "../engine/LootEngine";
import { Slot } from "./character/Character";

export type GameObject = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export type Item = {
  type: ItemType;
  value: number;
} & GameObject;

export type Skill = {
  tasks: SkillTasks;
} & GameObject;

export type SkillTasks = { [taskCategory: string]: Task[] };

export type Task = {
  durationSec: number;
  experience: number;
  requiredLevel: number;
  lootTable: LootTable;
  requires?: { [itemId: string]: number };
} & GameObject;

export type CombatCard = {
  baseDmg: number
  strikes: number
  baseDef: number
  targets: number
} & GameObject;

export type Equipment = {
  type: ItemType.EQUIPEMENT;
  attackBonus: number;
  defenseBonus: number;
  healthBonus: number;
  isTwoHanded?: boolean,
  cards: CombatCard[];
  slots: Slot[];
} & Item;

export enum ItemType {
  EQUIPEMENT = "EQUIPMENT",
  SUPPLIES = "SUPPLIES",
  TRADEGOODS = "TRADEGOODS",
  MATERIALS = "MATERIALS",
  HIDDEN = "HIDDEN"
}

export function getAllTasks(tasks: SkillTasks) {
  let allTasks: Task[] = [];
  Object.keys(tasks).forEach((key) => {
    allTasks.push(...tasks[key]);
  });
  return allTasks;
}

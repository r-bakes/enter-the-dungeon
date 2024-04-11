import { LucideIcon } from "lucide-react";
import { LootTable } from "../engine/LootEngine";

export type GameObject = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export type Inventory = {
  [itemId: string]: number;
};

export type Loadout = {
  [slotId in Slot]: string;
};

export type Skills = {
  [skillId: string]: Skill;
};

export type Progress = {};

export type Skill = {
  level: number;
  experience: number;
  tasks: Task[]
} & GameObject;

export type Item = {
  type: ItemType;
  value: number;
} & GameObject;

export type Equipment = {
  type: ItemType.EQUIPEMENT;
  attackBonus: number;
  defenseBonus: number;
  healthBonus: number;
  cards: Card[];
  slots: Slot[];
} & Item;

export type Card = {};

enum Slot {
  HEAD = "HEAD",
  NECK = "NECK",
  SHOULDER = "SHOULDER",
  CLOAK = "CLOAK",
  CHEST = "CHEST",
  WAIST = "WAIST",
  LEG = "LEG",
  WRIST = "WRIST",
  GLOVE = "GLOVE",
  FEET = "FEET",
  RING1 = "RING1",
  RING2 = "RING2",
  TRINKET1 = "TRINKET1",
  TRINKET2 = "TRINKET2",
  FLASK1 = "FLASK1",
  FLASK2 = "FLASK2",
  LEFTHAND = "LEFTHAND",
  RIGHTHAND = "RIGHTHAND",
}

enum ItemType {
  EQUIPEMENT = "EQUIPMENT",
  SUPPLIES = "SUPPLIES",
  TRADEGOODS = "TRADEGOODS",
  MATERIALS = "MATERIALS",
}

export type Task = {
    durationSec: number;
    experience: number;
    requiredLevel: number;
    lootTable: LootTable;
    requires?: { [itemId: string]: number };
  } & GameObject
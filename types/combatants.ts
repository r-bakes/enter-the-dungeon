import { Loadout } from "@/types/character";
import { GameObject } from "@/types/gameObjects";
import { LootTable } from "@/types/loot";

export type Combatant = {
  combatantId: number;
  hp: number;
  atk: number;
  def: number;
} & CombatantTemplate;

export type CharacterCombatant = {
  baseStamina: number;
  stamina: number;
  loadout: Loadout;
} & Combatant;

export type CombatantTemplate = {
  baseAtk: number;
  baseDef: number;
  baseHp: number;
  lootTable: LootTable;
  modifiers: [];
} & GameObject;

import { CombatantId } from "@/data/combatants/enums";
import { Loadout } from "@/types/character";
import { GameObject } from "@/types/gameObjects";
import { LootTable } from "@/types/loot";

export type CharacterCombatant = {
  baseStamina: number;
  stamina: number;
  loadout: Loadout;
} & Combatant;

export type Combatant = {
  combatantInstanceId: number;
  hp: number;
  atk: number;
  def: number;
  modifiers: [];
} & CombatantTemplate;

export type CombatantTemplate = {
  id: CombatantId;
  baseAtk: number;
  baseDef: number;
  baseHp: number;
  lootTable: LootTable;
} & GameObject;

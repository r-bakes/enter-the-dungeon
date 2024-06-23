import { LootTable } from "@/engine/utils/lootUtilities";
import { GameObject } from "../gameObject";

export type Combatant = {
  combatantId: number;
} & CombatantTemplate;

export type CombatantTemplate = {
  atk: number;
  def: number;
  maxHp: number;
  hp: number;
  lootTable: LootTable;
  modifiers: [];
} & GameObject;

export const createCombatant = (combatant: CombatantTemplate, combatantId: number): Combatant => {
  return {
    combatantId: combatantId,
    ...combatant
  }
}

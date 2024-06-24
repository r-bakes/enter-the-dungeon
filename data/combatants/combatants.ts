import { LootTable } from "@/engine/utils/lootUtilities";
import { GameObject } from "../gameObject";

export type Combatant = {
  combatantId: number;
  hp: number;
  atk: number;
  def: number;
} & CombatantTemplate;

export type CombatantTemplate = {
  baseAtk: number;
  baseDef: number;
  baseHp: number;
  lootTable: LootTable;
  modifiers: [];
} & GameObject;

export const createCombatant = (
  combatant: CombatantTemplate,
  combatantId: number
): Combatant => {
  return {
    combatantId: combatantId,
    hp: combatant.baseHp,
    atk: combatant.baseAtk,
    def: combatant.baseDef,
    ...combatant,
  };
};

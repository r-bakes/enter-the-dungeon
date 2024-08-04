import { CombatantTemplate, Combatant } from "@/types/combatants";


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

import { CombatantTemplate, Combatant } from "@/types/combatants";

export const createCombatant = (
  combatantInstanceId: number,
  combatantTemplate: CombatantTemplate,
): Combatant => {
  return {
    combatantInstanceId: combatantInstanceId,
    hp: combatantTemplate.baseHp,
    atk: combatantTemplate.baseAtk,
    def: combatantTemplate.baseDef,
    modifiers: [],
    ...combatantTemplate,
  };
};

import { combatCardTable } from "@/data/combatCards/combatCards";
import { CombatCardId } from "@/data/combatCards/enums";
import { CombatCard } from "@/types/combatCards";

export const createCombatCard = (
  cardId: CombatCardId,
  cardInstanceId: number,
): CombatCard => {
  return {
    cardInstanceId: cardInstanceId,
    ...combatCardTable[cardId],
  };
};

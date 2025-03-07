import { useEncounterContext } from "@/engines/encounterEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";

const useEncounterEnemeyRoundActions = () => {
  const { characterCombatant, setCharacterCombatant } = useExpeditionContext();
  const { enemyCombatants } = useEncounterContext();

  const enemeyRound = () => {
    let damageTaken = 0;
    for (var combatant of enemyCombatants) {
      damageTaken += combatant.atk;
    }
    characterCombatant.hp -= Math.max(damageTaken - characterCombatant.def, 0);
    characterCombatant.def = characterCombatant.baseDef;
    characterCombatant.atk = characterCombatant.baseAtk;
    setCharacterCombatant({ ...characterCombatant });
  };

  return { enemeyRound };
};
export default useEncounterEnemeyRoundActions;

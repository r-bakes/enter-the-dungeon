import { useEncounterContext } from "@/engines/encounterEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";

const useEncounterEnemyRoundActions = () => {
  const { characterCombatant, setCharacterCombatant } = useExpeditionContext();
  const { enemyCombatants } = useEncounterContext();

  const enemyRound = () => {
    let damageTaken = 0;
    for (var combatant of Object.values(enemyCombatants)) {
      damageTaken += combatant.atk;
    }
    characterCombatant.hp -= Math.max(damageTaken - characterCombatant.def, 0);
    characterCombatant.def = characterCombatant.baseDef;
    characterCombatant.atk = characterCombatant.baseAtk;

    setCharacterCombatant({ ...characterCombatant });
  };

  return { enemyRound };
};
export default useEncounterEnemyRoundActions;

import { useEncounterContext } from "@/engines/encounterEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import React from "react";

const enum EnemyPhase {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
}

const useEncounterEnemyRoundActions = () => {
  const { characterCombatant, setCharacterCombatant } = useExpeditionContext();
  const { enemyCombatants } = useEncounterContext();
  const [attackingEnemy, setAttackingEnemy] = React.useState<null | number>(
    null,
  );

  const startEnemyRound = () => {
    setAttackingEnemy(0);
  };

  const handleEnemyAttackComplete = () => {
    if (attackingEnemy === null) return;

    let attackingCombatant = enemyCombatants[attackingEnemy];
    let damageTaken = attackingCombatant.atk;

    characterCombatant.hp -= damageTaken;
    characterCombatant.def = characterCombatant.baseDef;
    characterCombatant.atk = characterCombatant.baseAtk;

    setCharacterCombatant({ ...characterCombatant });
    setAttackingEnemy((prevEnemy) => {
      return prevEnemy === null ||
        prevEnemy >= Object.keys(enemyCombatants).length
        ? null
        : prevEnemy + 1;
    });
  };

  return { startEnemyRound, attackingEnemy, handleEnemyAttackComplete };
};
export default useEncounterEnemyRoundActions;

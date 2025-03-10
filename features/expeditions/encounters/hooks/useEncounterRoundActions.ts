import { useEncounterContext } from "@/engines/encounterEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import useEncounterDeckActions from "./useEncounterDeckActions";
import React from "react";
import useEncounterEnemyRoundActions from "./useEncounterEnemyRoundActions";
import useEncounterCombatantActions from "./useEncounterCombatantActions";

const useEncounterRoundActions = () => {
  const { characterCombatant } = useExpeditionContext();
  const {
    hand,
    round,
    setRound,
    stamina,
    setStamina,
    enemyCombatants,
    setIsRoundDialogOpen,
  } = useEncounterContext();
  const { draw } = useEncounterDeckActions();
  const { enemyRound: enemyRound } = useEncounterEnemyRoundActions();
  const {} = useEncounterCombatantActions();

  const newRound = () => {
    setIsRoundDialogOpen(true);
    setTimeout(() => setIsRoundDialogOpen(false), 4000);
    setStamina(characterCombatant.stamina);
    setRound(round + 1);
    draw();
  };

  const finishTurn = () => {
    setTimeout(() => {
      enemyRound();
      newRound();
    }, 600);
  };

  React.useEffect(() => {
    if ((stamina == 0 || hand.length == 0) && round > 0) {
      finishTurn();
    }
  }, [stamina, hand]);

  React.useEffect(() => {
    newRound();
  }, []);

  return { finishTurn };
};
export default useEncounterRoundActions;

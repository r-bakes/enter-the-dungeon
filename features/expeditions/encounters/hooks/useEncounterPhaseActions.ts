import { useEncounterContext } from "@/engines/encounterEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import useEncounterDeckActions from "./useEncounterDeckActions";
import React from "react";
import useEncounterEnemyRoundActions from "./useEncounterEnemyRoundActions";
import useEncounterCombatantActions from "./useEncounterCombatantActions";
import { EncounterPhases } from "@/data/encounters/enums";

const useEncounterPhaseActions = () => {
  const { characterCombatant } = useExpeditionContext();
  const {
    hand,
    round,
    setRound,
    stamina,
    setStamina,
    setIsRoundDialogOpen,
    phase,
    setPhase,
  } = useEncounterContext();
  const { draw } = useEncounterDeckActions();
  const { enemyRound: enemyRound } = useEncounterEnemyRoundActions();
  const {} = useEncounterCombatantActions();

  const finishTurn = () => {
    setPhase(EncounterPhases.ENEMY_PHASE);
  };

  React.useEffect(() => {
    if (
      (stamina == 0 || hand.length == 0) &&
      phase === EncounterPhases.PLAYER_PHASE
    ) {
      setPhase(EncounterPhases.ENEMY_PHASE);
    }
  }, [stamina, hand]);

  React.useEffect(() => {
    switch (phase) {
      case EncounterPhases.ENCOUNTER_START:
        setTimeout(() => {
          setPhase(EncounterPhases.NEW_ROUND);
        }, 3000);
        break;
      case EncounterPhases.PLAYER_PREP:
        draw();
        setStamina(characterCombatant.stamina);
        setTimeout(() => {
          setPhase(EncounterPhases.PLAYER_PHASE);
        }, 2400);
        break;
      case EncounterPhases.PLAYER_PHASE:
        break;
      case EncounterPhases.ENEMY_PHASE:
        enemyRound();
        setTimeout(() => {
          setPhase(EncounterPhases.NEW_ROUND);
        }, 2000);
        break;
      case EncounterPhases.NEW_ROUND:
        setRound(round + 1);
        setIsRoundDialogOpen(true);
        setTimeout(() => {
          setIsRoundDialogOpen(false);
          setPhase(EncounterPhases.PLAYER_PREP);
        }, 2000);
        break;
      case EncounterPhases.ENCOUNTER_OVER:
        break;
    }
  }, [phase]);

  return { finishTurn };
};
export default useEncounterPhaseActions;

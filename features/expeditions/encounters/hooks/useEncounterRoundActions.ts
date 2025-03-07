import { useEncounterContext } from "@/engines/encounterEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import useEncounterDeckActions from "./useEncounterDeckActions";
import React from "react";
import useEncounterEnemeyRoundActions from "./useEncounterEnemeyRoundActions";

const useEncounterRoundActions = () => {
  const { characterCombatant } = useExpeditionContext();
  const { hand, round, setRound, stamina, setStamina, enemyCombatants } =
    useEncounterContext();
  const { draw } = useEncounterDeckActions();
  const { enemeyRound } = useEncounterEnemeyRoundActions();

  const newRound = () => {
    setStamina(characterCombatant.stamina);
    setRound(round + 1);
    draw();
  };

  const finishTurn = () => {
    setTimeout(() => {
      enemeyRound();
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

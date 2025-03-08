import { useEncounterContext } from "@/engines/encounterEngineContext";
import React from "react";

const useEncounterCombatantActions = () => {
  const {
    enemyCombatants,
    alliedCombatants,
    setEnemyCombatants,
    setAlliedCombatants,
  } = useEncounterContext();

  const lootMonster = () => {};

  // Remove dead enemies
  React.useEffect(() => {
    let initialLength = Object.keys(enemyCombatants).length;
    let filteredEnemyCombatants = Object.fromEntries(
      Object.entries(enemyCombatants).filter(
        ([_, combatant]) => combatant.hp > 0,
      ),
    );
    let newLength = Object.keys(filteredEnemyCombatants).length;

    if (newLength < initialLength) {
      setEnemyCombatants({ ...filteredEnemyCombatants });
    }
  }, [enemyCombatants]);

  // Remove dead allies
  React.useEffect(() => {
    let initialLength = Object.keys(alliedCombatants).length;
    let filteredAlliedCombatants = Object.fromEntries(
      Object.entries(alliedCombatants).filter(
        ([_, combatant]) => combatant.hp > 0,
      ),
    );
    let newLength = Object.keys(alliedCombatants).length;

    if (newLength < initialLength) {
      setAlliedCombatants({ ...alliedCombatants });
    }
  }, [alliedCombatants]);

  return {};
};
export default useEncounterCombatantActions;

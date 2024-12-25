import { ModifierType } from "@/data/modifiers/enums";
import { TaskId } from "@/data/tasks/enum";
import { UpgradeId } from "@/data/upgrades/enums";
import { upgradeTable } from "@/data/upgrades/upgrades";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { useModifierActions } from "../../modifiers/hooks/useModifierActions";

export const useUpgradeActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();
  const { modifiers, setModifiers } = useModifierActions();

  const addUpgrade = (upgradeId: UpgradeId) => {
    let upgrade = upgradeTable[upgradeId];

    if (upgrade.previous) {
      const previousUpgrade = upgradeTable[upgrade.previous];

      for (let taskId in previousUpgrade.modifier.targets) {
        for (let [modifier, value] of Object.entries(
          previousUpgrade.modifier.values,
        )) {
          modifiers[taskId as TaskId][modifier as ModifierType]! -= value;
        }
      }
    }

    for (let taskId in upgrade.modifier.targets) {
      for (let [modifier, value] of Object.entries(upgrade.modifier.values)) {
        modifiers[taskId as TaskId][modifier as ModifierType]! += value;
      }
    }

    character.upgrades.add(upgradeId);

    setModifiers({ ...modifiers });
    setCharacter({ ...character });
  };

  return { addUpgrade, modifiers };
};

export default useUpgradeActions;

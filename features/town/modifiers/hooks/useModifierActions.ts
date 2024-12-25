import { ModifierType } from "@/data/modifiers/enums";
import { TaskId } from "@/data/tasks/enum";
import { taskTable } from "@/data/tasks/tasks";
import { UpgradeId } from "@/data/upgrades/enums";
import { upgradeTable } from "@/data/upgrades/upgrades";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Modifiers } from "@/types/modifiers";
import React from "react";

export const useModifierActions = () => {
  const { character } = useCharacterEngineContext();

  const initializeCharacterModifierTable = (): Modifiers => {
    let modifiers: Modifiers = Object.fromEntries(
      Object.values(TaskId).map((id) => [id, {}]),
    ) as Modifiers;

    for (let id in TaskId) {
      let task = taskTable[id as TaskId];

      for (let type in task.applicableModifiers) {
        if (type === ModifierType.PRODUCTION_MULTIPLIER) {
          modifiers[id as TaskId][type as ModifierType] = 1;
        } else {
          modifiers[id as TaskId][type as ModifierType] = 0;
        }
      }
    }

    for (let upgradeId in UpgradeId) {
      let upgrade = upgradeTable[upgradeId as UpgradeId];

      for (let taskId in upgrade.modifier.targets) {
        for (let [modifier, value] of Object.entries(upgrade.modifier.values)) {
          if (!(upgrade.next && character.upgrades.has(upgrade.next))) {
            modifiers[taskId as TaskId][modifier as ModifierType]! += value;
          }
        }
      }
    }

    return modifiers;
  };

  const [modifiers, setModifiers] = React.useState(
    initializeCharacterModifierTable(),
  );

  return { modifiers, setModifiers };
};

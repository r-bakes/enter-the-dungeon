import React, { createContext, useContext, useState, ReactNode } from "react";
import { ModifierType } from "@/data/modifiers/enums";
import { TaskId } from "@/data/tasks/enum";
import { taskTable } from "@/data/tasks/tasks";
import { UpgradeId } from "@/data/upgrades/enums";
import { upgradeTable } from "@/data/upgrades/upgrades";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Modifiers } from "@/types/modifiers";

type ModifierEngineContextProps = {
  modifiers: Modifiers;
  setModifiers: React.Dispatch<React.SetStateAction<Modifiers>>;
};

const ModifierEngineContext = createContext({} as ModifierEngineContextProps);

export const ModifierEngineProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { character } = useCharacterEngineContext();

  const initializeCharacterModifierTable = (): Modifiers => {
    let modifiers: Modifiers = Object.fromEntries(
      Object.values(TaskId).map((id) => [id, {}]),
    ) as Modifiers;

    for (let id of Object.values(TaskId)) {
      let task = taskTable[id];

      for (let type of task.applicableModifiers) {
        if (type === ModifierType.PRODUCTION_MULTIPLIER) {
          modifiers[id][type as ModifierType] = 1;
        } else {
          modifiers[id][type as ModifierType] = 0;
        }
      }
    }

    for (let upgradeId of character.upgrades) {
      let upgrade = upgradeTable[upgradeId as UpgradeId];

      for (let taskId of upgrade.modifier.targets) {
        for (let [modifier, value] of Object.entries(upgrade.modifier.values)) {
          if (!(upgrade.next && character.upgrades.has(upgrade.next))) {
            modifiers[taskId][modifier as ModifierType]! += value;
          }
        }
      }
    }

    return modifiers;
  };

  const [modifiers, setModifiers] = useState(
    initializeCharacterModifierTable(),
  );

  return (
    <ModifierEngineContext.Provider
      value={{
        modifiers,
        setModifiers,
      }}
    >
      {children}
    </ModifierEngineContext.Provider>
  );
};

export const useModifierEngineContext = (): ModifierEngineContextProps =>
  useContext(ModifierEngineContext);

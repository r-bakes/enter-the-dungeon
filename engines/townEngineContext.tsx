import { Character, Inventory } from "@/types/character";
import {
  addExp,
  addItem,
  initializeCharacterModifierTable,
  removeItem,
} from "@/utils/charaterStateUtilities";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import React from "react";
import TaskComplete from "@/features/town/toast/TaskComplete";
import { Skill, Task } from "@/types/skills";
import { SkillModifierTable } from "@/types/modifiers";
import { TICK_RATE_MS } from "@/configurations/configurations";
import generateLoot from "@/utils/lootUtilities";
import { Loot } from "@/types/loot";
import { SkillModifierType } from "@/data/modifiers/enums";
import { toast } from "sonner";
import {
  applyExperienceModifier,
  applyProductionModifier,
  applySpeedModifier,
  getModifiers,
} from "@/utils/modifierUtilities";

type TownEngineContextContents = {
  taskProgress: number;
  workingTask: Task | null;
  workingSkill: Skill | null;
  modifierTable: SkillModifierTable;
  setWorkingSkill: React.Dispatch<React.SetStateAction<Skill | null>>;
  setWorkingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setModifierTable: React.Dispatch<React.SetStateAction<SkillModifierTable>>;
};
const TownEngineContext = React.createContext({} as TownEngineContextContents);
export const useTownEngineContext = () => React.useContext(TownEngineContext);

export default function CampEngineProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { character, setCharacter } = useCharacterEngineContext();
  const [workingSkill, setWorkingSkill] = React.useState<Skill | null>(null);
  const [workingTask, setWorkingTask] = React.useState<Task | null>(null);
  const [taskProgress, setTaskProgress] = React.useState(0);
  const [modifierTable, setModifierTable] = React.useState(() =>
    initializeCharacterModifierTable(character.upgrades),
  );

  React.useEffect(() => {
    setTaskProgress(0);
  }, [workingTask]);

  const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = React.useRef<() => void>();

    // Remember the latest callback.
    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
      function tick() {
        savedCallback.current?.();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    if (workingSkill != null && workingTask != null) {
      let speedModifer = getModifiers(
        modifierTable,
        workingSkill.id,
        workingTask.id,
      )[SkillModifierType.SPEED];

      let currentProgress = taskProgress + TICK_RATE_MS / 1000;
      let taskDuration = applySpeedModifier(
        workingTask.durationSec,
        speedModifer,
      );
      if (currentProgress >= taskDuration) {
        setTaskProgress(currentProgress - taskDuration);
        updateCharacterTaskComplete(character, workingSkill, workingTask);
        canContinueTask(character.inventory, workingTask);
      } else {
        setTaskProgress(taskProgress + TICK_RATE_MS / 1000);
      }
    }

    return () => setTaskProgress(0);
  }, TICK_RATE_MS);

  const canContinueTask = (inventory: Inventory, task: Task) => {
    let canContinue = true;
    if (task.requires) {
      Object.entries(task.requires).forEach(([itemId, quantity]) => {
        if (!(itemId in inventory) || inventory[itemId] < quantity) {
          canContinue = false;
        }
      });
    }
    if (!canContinue) {
      setWorkingSkill(null);
      setWorkingTask(null);
    }
  };

  const updateCharacterTaskComplete = (
    character: Character,
    skill: Skill,
    task: Task,
  ) => {
    let loot = {};
    let modifiers = getModifiers(modifierTable, skill.id, task.id);

    if (task.lootTable) {
      loot = generateLoot(task.lootTable);
      updateInventory(
        character.inventory,
        applyProductionModifier(
          loot,
          modifiers[SkillModifierType.PRODUCTION_MULTIPLIER],
        ),
        task.requires,
      );
    }
    addExp(
      character.skills,
      skill.id,
      applyExperienceModifier(
        task.experience,
        modifiers[SkillModifierType.EXPERIENCE],
      ),
    );

    toast(
      <TaskComplete
        task={task}
        character={character}
        loot={loot}
        experience={applyExperienceModifier(
          task.experience,
          modifiers[SkillModifierType.EXPERIENCE],
        )}
      ></TaskComplete>,
      { duration: 10000 },
    );
    setCharacter({ ...character });
  };

  const updateInventory = (
    inventory: Inventory,
    loot: Loot,
    taskConsumed?: { [itemid: string]: number },
  ) => {
    if (taskConsumed) {
      Object.entries(taskConsumed).forEach(([itemdId, amount]) => {
        removeItem(inventory, itemdId, amount);
      });
    }
    Object.entries(loot).forEach(([itemId, amount]) => {
      addItem(inventory, itemId, amount);
    });
  };

  return (
    <TownEngineContext.Provider
      value={{
        taskProgress,
        workingTask,
        workingSkill,
        modifierTable,
        setWorkingSkill,
        setWorkingTask,
        setModifierTable,
      }}
    >
      {children}
    </TownEngineContext.Provider>
  );
}

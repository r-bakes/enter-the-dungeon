// features/working/context/WorkingContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { taskTable } from "@/data/tasks/tasks";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Task } from "@/types/tasks";
import { TICK_RATE_MS } from "@/configurations/configurations";
import { toast } from "sonner";
import TaskComplete from "@/features/town/toast/components/TaskComplete";
import { Loot } from "@/types/loot";
import { ItemId } from "@/data/items/enums";
import { useModifierActions } from "@/features/town/modifiers/hooks/useModifierActions";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";
import useExperienceActions from "@/features/common/experience/hooks/useExperienceActions";
import generateLoot from "@/features/common/loot/utils/lootUtils";
import { StealthTaskCategories } from "@/data/skills/enums";

type WorkingEngineContextProps = {
  workingTask: Task | null;
  taskProgress: number;
  setWorkingTask: React.Dispatch<React.SetStateAction<Task | null>>;
};

const WorkingEngineContext = createContext({} as WorkingEngineContextProps);

export const WorkingEngineProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { character, setCharacter } = useCharacterEngineContext();
  const { addLoot, removeItems } = useInventoryActions();
  const {
    applyExperienceModifier,
    applySpeedModifier,
    applyProductionModifier,
  } = useModifierActions();
  const addExp = useExperienceActions();

  const [workingTask, setWorkingTask] = useState<Task | null>(
    character.working.workingTask
      ? taskTable[character.working.workingTask]
      : null,
  );
  const [taskProgress, setTaskProgress] = useState(0);

  // Custom useInterval Hook
  const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void>();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      if (delay === null) {
        return;
      }
      const tick = () => {
        savedCallback.current?.();
      };
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  };

  // Initialize task progress when workingTask changes
  useEffect(() => {
    setTaskProgress(0);
  }, [workingTask]);

  // Function to determine if task can continue based on inventory
  const canContinueTask = useCallback(() => {
    if (!workingTask) return;

    const canContinue = Object.entries(workingTask.requires).every(
      ([itemId, quantity]) => character.inventory[itemId as ItemId] >= quantity,
    );

    if (!canContinue) {
      setWorkingTask(null);
      toast.error("Cannot continue task. Required items are missing.");
    }
  }, [workingTask, character.inventory]);

  // Function to handle task completion
  const taskComplete = useCallback(() => {
    if (!workingTask) return;

    // // Skill specific interceptions
    // if (workingTask.category == StealthTaskCategories.THIEVING && ) {
    //
    // }

    let loot: Loot = {};
    const task = workingTask;
    const experience = applyExperienceModifier(task.id);
    loot = applyProductionModifier(task.id, generateLoot(task.lootTable));

    // Prepare player state
    addLoot(loot);
    removeItems(task.requires);
    addExp(task.id, experience);

    // Notify player
    toast(
      <TaskComplete
        task={task}
        character={character}
        loot={loot}
        experience={experience}
      />,
      { duration: 10000 },
    );

    // Update character state if needed
    setCharacter({ ...character });
  }, [
    workingTask,
    applyExperienceModifier,
    applyProductionModifier,
    addExp,
    addLoot,
    removeItems,
    character,
    setCharacter,
  ]);

  // Apply the useInterval hook
  useInterval(() => {
    if (workingTask != null) {
      const taskDuration = applySpeedModifier(workingTask.id);
      const newProgress = taskProgress + TICK_RATE_MS / 1000;

      if (newProgress >= taskDuration) {
        setTaskProgress(newProgress - taskDuration);
        taskComplete();
        canContinueTask();
      } else {
        setTaskProgress(newProgress);
      }
    }
  }, TICK_RATE_MS);

  return (
    <WorkingEngineContext.Provider
      value={{
        workingTask,
        taskProgress,
        setWorkingTask,
      }}
    >
      {children}
    </WorkingEngineContext.Provider>
  );
};

export const useWorkingEngineContext = (): WorkingEngineContextProps =>
  useContext(WorkingEngineContext);

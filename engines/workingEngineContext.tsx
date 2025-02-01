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
import { StealthTask, Task } from "@/types/tasks";
import { LEVEL_CAP, TICK_RATE_MS } from "@/configurations/configurations";
import { toast } from "sonner";
import { Loot } from "@/types/loot";
import { ItemId } from "@/data/items/enums";
import { useModifierActions } from "@/features/town/modifiers/hooks/useModifierActions";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";
import generateLoot from "@/features/common/loot/utils/lootUtils";
import { SkillId, StealthTaskCategories } from "@/data/skills/enums";
import TaskCompleteToast from "@/features/town/toast/components/taskCompleteToast";
import StealthTaskFailedToast from "@/features/town/toast/components/stealthTaskFailedToast";
import { rollStealthSuccess } from "@/features/common/stealth/utils/stealthUtils";
import { TaskId } from "@/data/tasks/enum";
import { taskToSkill } from "@/features/common/working/utils/workingUtils";
import { requiredExpForLevelUp } from "@/features/common/experience/utils/experienceUtils";

type WorkingEngineContextProps = {
  taskProgress: number;
  workingTask: Task | null;
  setWorkingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  taskWorkingLocked: boolean;
  setTaskWorkingLocked: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [workingTask, setWorkingTask] = useState<Task | null>(
    character.working.workingTask
      ? taskTable[character.working.workingTask]
      : null,
  );
  const [taskProgress, setTaskProgress] = useState(0);
  const [taskWorkingLocked, setTaskWorkingLocked] = useState(false);

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

  const taskComplete = () => {
    if (!workingTask) return;
    let completedSuccessfully = true;

    // Skill & task specific interceptions
    if (workingTask.category == StealthTaskCategories.THIEVING) {
      completedSuccessfully = stealthTaskSuccess(workingTask as StealthTask);
    }

    if (completedSuccessfully) {
      taskCompletedSuccessfully();
    }
  };

  const taskCompletedSuccessfully = () => {
    if (!workingTask) return;

    // Regular task completion flow
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
      <TaskCompleteToast
        task={task}
        character={character}
        loot={loot}
        experience={experience}
      />,
      { duration: 10000 },
    );

    // Update character state if needed
    setCharacter({ ...character });
  };

  const stealthTaskSuccess = (task: StealthTask): boolean => {
    if (!rollStealthSuccess(character.skills.STEALTH.level, task.perception)) {
      setWorkingTask(null);
      setTaskWorkingLocked(true);
      toast(<StealthTaskFailedToast />, {
        position: "top-center",
        dismissible: false,
        duration: 10000,
        closeButton: false,
        onAutoClose: () => setTaskWorkingLocked(false),
      });
      return false;
    }

    return true;
  };

  const addExp = (skillOrTaskId: SkillId | TaskId, exp: number): void => {
    let skillId: SkillId;
    if (skillOrTaskId in TaskId) {
      skillId = taskToSkill[skillOrTaskId as TaskId];
    } else {
      skillId = skillOrTaskId as SkillId;
    }

    while (
      character.skills[skillId].experience + exp >=
        requiredExpForLevelUp(character.skills[skillId as SkillId].level) &&
      character.skills[skillId].level < LEVEL_CAP
    ) {
      character.skills[skillId].level += 1;
    }

    character.skills[skillId].experience += exp;
    character.skills[skillId].experience = Math.min(
      requiredExpForLevelUp(LEVEL_CAP),
      character.skills[skillId].experience,
    );

    setCharacter({ ...character });
  };

  return (
    <WorkingEngineContext.Provider
      value={{
        taskProgress,
        workingTask,
        setWorkingTask,
        taskWorkingLocked,
        setTaskWorkingLocked,
      }}
    >
      {children}
    </WorkingEngineContext.Provider>
  );
};

export const useWorkingEngineContext = (): WorkingEngineContextProps =>
  useContext(WorkingEngineContext);

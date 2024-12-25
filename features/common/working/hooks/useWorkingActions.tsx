import { skillTable } from "@/data/skills/skills";
import { taskTable } from "@/data/tasks/tasks";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Task } from "@/types/tasks";
import React from "react";
import {
  applyExperienceModifier,
  applyProductionModifier,
  applySpeedModifier,
  getModifiers,
} from "@/features/town/modifiers/utils/modifier";
import { TICK_RATE_MS } from "@/configurations/configurations";
import useExperienceActions from "../../experience/hooks/useExperienceActions";
import generateLoot from "../../loot/utils/lootUtils";
import { toast } from "sonner";
import TaskComplete from "@/features/town/toast/components/TaskComplete";
import { Loot } from "@/types/loot";
import { ItemId } from "@/data/items/enums";
import useInventoryActions from "../../inventory/hooks/useInventoryActions";
import { useModifierActions } from "@/features/town/modifiers/hooks/useModifierActions";
import { ModifierType } from "@/data/modifiers/enums";
import { TaskId } from "@/data/tasks/enum";

export const useWorkingActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();
  const { addItem, removeItem } = useInventoryActions();
  const { modifiers } = useModifierActions();
  const addExp = useExperienceActions();

  const [workingTask, setWorkingTask] = React.useState<Task | null>(
    character.working.workingTask
      ? taskTable[character.working.workingTask]
      : null,
  );
  const [taskProgress, setTaskProgress] = React.useState(0);

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
    if (workingTask != null) {
      let speedModifer = modifiers[workingTask.id][ModifierType.SPEED] ?? 0;
      let currentProgress = taskProgress + TICK_RATE_MS / 1000;
      let taskDuration = applySpeedModifier(
        workingTask.durationSec,
        speedModifer,
      );
      if (currentProgress >= taskDuration) {
        setTaskProgress(currentProgress - taskDuration);
        taskComplete();
        canContinueTask();
      } else {
        setTaskProgress(taskProgress + TICK_RATE_MS / 1000);
      }
    }

    return () => setTaskProgress(0);
  }, TICK_RATE_MS);

  const canContinueTask = () => {
    let canContinue = Object.entries(workingTask!.requires).every(
      ([itemId, quantity]) => character.inventory[itemId as ItemId] >= quantity,
    );

    if (!canContinue) {
      setWorkingTask(null);
    }
  };

  const taskComplete = () => {
    let loot = {};
    let task = workingTask!;

    if (task.lootTable) {
      loot = generateLoot(task.lootTable);

      updateInventory(
        applyProductionModifier(
          loot,
          modifiers[task.id][ModifierType.PRODUCTION_MULTIPLIER],
        ),
        task.requires,
      );
    }

    addExp(
      task.id,
      applyExperienceModifier(
        task.experience,
        modifiers[task.id][ModifierType.EXPERIENCE],
      ),
    );

    toast(
      <TaskComplete
        task={task}
        character={character}
        loot={loot}
        experience={applyExperienceModifier(
          task.experience,
          modifiers[task.id][ModifierType.EXPERIENCE],
        )}
      ></TaskComplete>,
      { duration: 10000 },
    );

    setCharacter({ ...character });
  };

  const updateInventory = (
    loot: Loot,
    taskConsumed?: { [id in ItemId]?: number },
  ) => {
    if (taskConsumed) {
      Object.entries(taskConsumed).forEach(([itemId, amount]) => {
        removeItem(itemId as ItemId, amount);
      });
    }
    Object.entries(loot).forEach(([itemId, amount]) => {
      addItem(itemId as ItemId, amount);
    });
  };

  React.useEffect(() => {
    setTaskProgress(0);
  }, [workingTask]);

  return {
    setWorkingTask,
    workingTask,
    taskProgress,
  };
};
export default useWorkingActions;

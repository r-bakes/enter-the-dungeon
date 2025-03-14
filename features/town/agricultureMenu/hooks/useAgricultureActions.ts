import { CONTAINER_LEVEL_REQUIREMENTS } from "@/configurations/configurations";
import { PastureId, PlotId } from "@/data/character/enums";
import { AgricultureTaskCategories } from "@/data/skills/enums";
import { TaskId } from "@/data/tasks/enum";
import { taskTable } from "@/data/tasks/tasks";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { useWorkingEngineContext } from "@/engines/workingEngineContext";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";

export const useAgricultureActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();
  const { hasItems, removeItems } = useInventoryActions();
  const { taskComplete } = useWorkingEngineContext();

  const timeRemainingMs = (
    startTimeMs: number,
    taskDurationSec: number,
  ): number => {
    return Math.max(0, startTimeMs + taskDurationSec * 1000 - Date.now());
  };

  const numberContainersAvailable = (
    taskCategory: AgricultureTaskCategories,
  ): number => {
    let count = 0;
    if (taskCategory == AgricultureTaskCategories.BOTANY) {
      for (const plotId of Object.values(PlotId)) {
        if (
          !character.working.agriculture.botany[plotId].taskId &&
          isContainerUnlocked(plotId)
        )
          count += 1;
      }
    } else {
      for (const ranchId of Object.values(PastureId)) {
        if (
          !character.working.agriculture.ranching[ranchId].taskId &&
          isContainerUnlocked(ranchId)
        )
          count += 1;
      }
    }
    return count;
  };

  const isContainerUnlocked = (id: PlotId | PastureId): boolean => {
    return (
      CONTAINER_LEVEL_REQUIREMENTS[id] <= character.skills.AGRICULTURE.level
    );
  };

  const isContainerFilled = (id: PlotId | PastureId): boolean => {
    if (id in PlotId) {
      return character.working.agriculture.botany[id as PlotId].taskId
        ? true
        : false;
    } else {
      return character.working.agriculture.ranching[id as PastureId].taskId
        ? true
        : false;
    }
  };

  const canCompleteTask = (id: PlotId | PastureId): boolean => {
    if (id in PlotId) {
      return canCompleteBotanyTask(id as PlotId);
    } else {
      return canCompleteRanchingTask(id as PastureId);
    }
  };

  const remove = (id: PlotId | PastureId): void => {
    if (id in PlotId) {
      return uproot(id as PlotId);
    } else {
      return release(id as PastureId);
    }
  };

  const collect = (id: PlotId | PastureId): void => {
    if (id in PlotId) {
      return harvest(id as PlotId);
    } else {
      return grab(id as PastureId);
    }
  };
  const assign = (id: PlotId | PastureId, taskId: TaskId): void => {
    const task = taskTable[taskId];
    if (
      !hasItems(task.requires) ||
      isContainerFilled(id) ||
      !isContainerUnlocked(id)
    )
      return;

    removeItems(task.requires);

    if (id in PlotId) {
      return plant(id as PlotId, taskId);
    } else {
      return pasture(id as PastureId, taskId);
    }
  };

  const canCompleteBotanyTask = (id: PlotId): boolean => {
    let taskStartTime = character.working.agriculture.botany[id].startTime;
    let currentTime = Date.now();
    let taskId = character.working.agriculture.botany[id].taskId;

    if (
      taskStartTime &&
      taskId &&
      taskTable[taskId].durationSec * 1000 <= currentTime - taskStartTime
    ) {
      return true;
    }
    return false;
  };
  const canCompleteRanchingTask = (id: PastureId): boolean => {
    let currentTime = Date.now();
    let taskStartTime = character.working.agriculture.ranching[id].startTime;
    let taskId = character.working.agriculture.ranching[id].taskId;

    if (
      taskStartTime &&
      taskId &&
      taskTable[taskId].durationSec * 1000 <= currentTime - taskStartTime
    ) {
      return true;
    }
    return false;
  };

  const plant = (plotId: PlotId, taskId: TaskId) => {
    character.working.agriculture.botany[plotId] = {
      startTime: Date.now(),
      taskId: taskId,
    };

    setCharacter({ ...character });
  };
  const harvest = (id: PlotId) => {
    const taskId = character.working.agriculture.botany[id].taskId;
    if (!taskId) return;

    const task = taskTable[taskId];
    character.working.agriculture.botany[id] = {
      startTime: null,
      taskId: null,
    };

    taskComplete(task);
    setCharacter({ ...character });
  };
  const pasture = (pastureId: PastureId, taskId: TaskId) => {};
  const grab = (id: PastureId) => {};

  const uproot = (id: PlotId) => {
    character.working.agriculture.botany[id] = {
      startTime: null,
      taskId: null,
    };

    setCharacter({ ...character });
  };

  const release = (id: PastureId) => {
    character.working.agriculture.ranching[id] = {
      startTime: null,
      taskId: null,
    };

    setCharacter({ ...character });
  };

  const harvestAll = () => {
    for (const plotId of Object.values(PlotId)) {
      if (canCompleteBotanyTask(plotId)) {
        harvest(plotId);
      }
    }
  };

  const grabAll = () => {
    for (const ranchId of Object.values(PastureId)) {
      if (canCompleteRanchingTask(ranchId)) {
        grab(ranchId);
      }
    }
  };

  const collectAll = (taskCategory: AgricultureTaskCategories) => {
    if (taskCategory == AgricultureTaskCategories.BOTANY) {
      harvestAll();
    } else {
      grabAll();
    }
  };

  const assignAll = (
    taskCategory: AgricultureTaskCategories,
    taskId: TaskId,
  ) => {
    if (taskCategory == AgricultureTaskCategories.BOTANY) {
      for (const plotId of Object.values(PlotId)) {
        assign(plotId, taskId);
      }
    } else {
      for (const ranchId of Object.values(PastureId)) {
        assign(ranchId, taskId);
      }
    }
  };

  const removeAll = (taskCategory: AgricultureTaskCategories) => {
    if (taskCategory == AgricultureTaskCategories.BOTANY) {
      for (const plotId of Object.values(PlotId)) {
        character.working.agriculture.botany[plotId] = {
          startTime: null,
          taskId: null,
        };
      }
    } else {
      for (const ranchId of Object.values(PastureId)) {
        character.working.agriculture.ranching[ranchId] = {
          startTime: null,
          taskId: null,
        };
      }
    }

    setCharacter({ ...character });
  };

  const isCollectAllDisabled = (
    taskCategory: AgricultureTaskCategories,
  ): boolean => {
    if (taskCategory == AgricultureTaskCategories.BOTANY) {
      for (const plotId of Object.values(PlotId)) {
        if (canCompleteTask(plotId)) return false;
      }
    } else {
      for (const ranchId of Object.values(PastureId)) {
        if (canCompleteTask(ranchId)) return false;
      }
    }

    return true;
  };

  const isAssignAllDisabled = (
    taskCategory: AgricultureTaskCategories,
  ): boolean => {
    if (taskCategory == AgricultureTaskCategories.BOTANY) {
      for (const plotId of Object.values(PlotId)) {
        if (
          !character.working.agriculture.botany[plotId].taskId &&
          isContainerUnlocked(plotId)
        )
          return false;
      }
    } else {
      for (const ranchId of Object.values(PastureId)) {
        if (
          !character.working.agriculture.ranching[ranchId].taskId &&
          isContainerUnlocked(ranchId)
        )
          return false;
      }
    }

    return true;
  };

  const isRemoveAllDisabled = (
    taskCategory: AgricultureTaskCategories,
  ): boolean => {
    if (taskCategory == AgricultureTaskCategories.BOTANY) {
      for (const plotId of Object.values(PlotId)) {
        if (character.working.agriculture.botany[plotId].taskId) return false;
      }
    } else {
      for (const ranchId of Object.values(PastureId)) {
        if (character.working.agriculture.ranching[ranchId].taskId)
          return false;
      }
    }

    return true;
  };

  return {
    canCompleteTask,
    assign,
    assignAll,
    collect,
    collectAll,
    timeRemainingMs,
    remove,
    removeAll,
    isCollectAllDisabled,
    isAssignAllDisabled,
    isRemoveAllDisabled,
    numberContainersAvailable,
  };
};

export default useAgricultureActions;

import { TICK_RATE_MS } from "../data/configurations";
import { toast } from "sonner";
import generateLoot, { Loot } from "./utils/lootUtilities";
import { Character, Inventory } from "../data/character/character";
import { Skill } from "@/data/skills/skills";
import { Task } from "@/data/skills/skills";
import { addExp, addItem, removeItem } from "./utils/charaterStateUtilities";
import { useCharacterEngineContext } from "./characterEngineContext";
import React from "react";
import TaskComplete from "@/components/camp/toast/taskComplete";

type CampEngineContextContents = {
  progress: number;
  workingTask: Task | null;
  workingSkill: Skill | null;
  setWorkingSkill: React.Dispatch<React.SetStateAction<Skill | null>>;
  setWorkingTask: React.Dispatch<React.SetStateAction<Task | null>>;
};
const CampEngineContext = React.createContext({} as CampEngineContextContents);
export const useCampEngineContext = () => React.useContext(CampEngineContext);

export default function CampEngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { character, setCharacter } = useCharacterEngineContext();
  const [workingSkill, setWorkingSkill] = React.useState<Skill | null>(null);
  const [workingTask, setWorkingTask] = React.useState<Task | null>(null);
  const [taskProgress, setTaskProgress] = React.useState(0);

  React.useEffect(() => {
    setTaskProgress(0);
  }, [workingTask]);

  const useInterval = (callback, delay: number) => {
    const savedCallback = React.useRef();

    // Remember the latest callback.
    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    if (workingSkill != null && workingTask != null) {
      if (taskProgress + TICK_RATE_MS / 1000 >= workingTask.durationSec) {
        setTaskProgress(0);
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
    task: Task
  ) => {
    const loot = generateLoot(task.lootTable);

    updateInventory(character.inventory, loot, task.requires);
    addExp(character.skills, skill.id, task.experience);

    toast(
      <TaskComplete
        task={task}
        character={character}
        loot={loot}
      ></TaskComplete>,
      { duration: 10000 }
    );
    setCharacter({ ...character });
  };

  const updateInventory = (
    inventory: Inventory,
    loot: Loot,
    taskConsumed?: { [itemid: string]: number }
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
    <CampEngineContext.Provider
      value={{
        setWorkingSkill,
        setWorkingTask,
        progress: taskProgress,
        workingTask,
        workingSkill,
      }}
    >
      {children}
    </CampEngineContext.Provider>
  );
}

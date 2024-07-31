import { TICK_RATE_MS } from "../data/configurations";
import { toast } from "sonner";
import generateLoot, { Loot } from "./utils/lootUtilities";
import { Character, Inventory } from "../data/character/character";
import {
  addExp,
  addItem,
  initializeCharacterModifierTable,
  removeItem,
} from "./utils/charaterStateUtilities";
import { useCharacterEngineContext } from "./characterEngineContext";
import React from "react";
import {
  applyExperienceModifier,
  applyProductionModifier,
  applySpeedModifier,
  getModifiers,
  SkillModifierType,
} from "@/data/modifiers/skillModifiers";
import { SkillModifierTable } from "@/data/modifiers/types";
import { Skill, Task } from "@/data/skills/types";
import TaskComplete from "@/components/camp/toast/TaskComplete";

type CampEngineContextContents = {
  taskProgress: number;
  workingTask: Task | null;
  workingSkill: Skill | null;
  modifierTable: SkillModifierTable;
  setWorkingSkill: React.Dispatch<React.SetStateAction<Skill | null>>;
  setWorkingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setModifierTable: React.Dispatch<React.SetStateAction<SkillModifierTable>>;
};
const CampEngineContext = React.createContext({} as CampEngineContextContents);
export const useCampEngineContext = () => React.useContext(CampEngineContext);

export default function CampEngineProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { character, setCharacter } = useCharacterEngineContext();
  const [workingSkill, setWorkingSkill] = React.useState<Skill | null>(null);
  const [workingTask, setWorkingTask] = React.useState<Task | null>(null);
  const [taskProgress, setTaskProgress] = React.useState(0);
  const [modifierTable, setModifierTable] = React.useState(
    initializeCharacterModifierTable(character.upgrades),
  );

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
      let speedModifer = getModifiers(
        modifierTable,
        workingSkill.id,
        workingTask.id,
      )[SkillModifierType.SPEED];

      if (
        taskProgress + TICK_RATE_MS / 1000 >=
        applySpeedModifier(workingTask.durationSec, speedModifer)
      ) {
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
    <CampEngineContext.Provider
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
    </CampEngineContext.Provider>
  );
}

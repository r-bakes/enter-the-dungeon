import { createContext, useContext, useEffect, useRef, useState } from "react";
import { TICK_RATE_MS } from "../data/Configurations";
import { toast } from "sonner";
import TaskComplete from "@/components/staging/Toast/TaskComplete";
import generateLoot, { Loot } from "./LootEngine";
import { Character, Inventory, Loadout, Skills, Slot, testCharacter } from "../data/character/Character";
import { Equipment, Skill, Task } from "../data/GameObject";
import { addExp, addItem, removeItem } from "../data/CharaterStateUtilities";
import { ITEM_BY_ID } from "../data/items/items";

type EngineContextContents = {
  character: Character;
  progress: number;
  workingTask: Task | null;
  workingSkill: Skill | null;
  setWorkingSkill: React.Dispatch<React.SetStateAction<Skill | null>>;
  setWorkingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  equip: (itemId: string, slot: Slot) => void;
  unequip: (slot: Slot) => void;
  getModifiers: () => {hp: number, atk: number, def: number}
};
const EngineContext = createContext({} as EngineContextContents);
export const useEngineContext = () => useContext(EngineContext);

export default function EngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [character, setCharacter] = useState<Character>(testCharacter);
  const [workingSkill, setWorkingSkill] = useState<Skill | null>(null);
  const [workingTask, setWorkingTask] = useState<Task | null>(null);
  const [taskProgress, setTaskProgress] = useState(0);

  useEffect(() => {
    setTaskProgress(0);
  }, [workingTask]);

  const useInterval = (callback, delay: number) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
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
        if (
          !(itemId in inventory) ||
          inventory[itemId] < quantity
        ) {
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
    const loot = generateLoot(task.lootTable);

    updateInventory(character.inventory, loot, task.requires);
    updateExp(character.skills, skill.id, task.experience);

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

  const updateExp = (skills: Skills, skillId: string, exp: number) => {
    addExp(skills, skillId, exp);
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

  const equip = (itemId: string, slot: Slot) => {
    removeItem(character.inventory, itemId, 1);
    if (character.loadout[slot] != null) {
      unequip(slot)
    }
    character.loadout[slot] = itemId;
    setCharacter({ ...character })
  };
  
  const unequip = (slot: Slot) => {
    if (character.loadout[slot] != null) {
      let itemId = character.loadout[slot] as string;
      character.loadout[slot] = null;
      addItem(character.inventory, itemId, 1);
      setCharacter({ ...character })
    }
  };
  
  const getModifiers = () => {
    let atk = character.skills["martial"].level; 
    let def = character.skills["martial"].level;
    let hp = 10 * character.skills["martial"].level;

    Object.entries(character.loadout).forEach(([_, equipmentId]) => {
      if (equipmentId != null) {
        let item = ITEM_BY_ID[equipmentId] as Equipment 
        atk += item.attackBonus;
        def += item.defenseBonus;
        hp += item.healthBonus;
      }
    })
    return {atk, def, hp}
  }

  return (
    <EngineContext.Provider
      value={{
        getModifiers,
        equip,
        unequip,
        setWorkingSkill,
        setWorkingTask,
        character,
        progress: taskProgress,
        workingTask,
        workingSkill,
      }}
    >
      {children}
    </EngineContext.Provider>
  );

  
}

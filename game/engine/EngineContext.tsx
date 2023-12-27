import { MutableRefObject, createContext, useContext, useEffect, useRef, useState } from "react";
import { mockCharacter, Character } from "../data/character/Character";
import { LootTable, Skill, Task } from "../data/skills/Skills";
import { requiredExpForLevelUp, tickRateMs } from "../data/configurations/Configurations";
import { Item, items } from "../data/items/items";
import { toast } from "sonner";
import TaskComplete from "@/components/staging/Toast/TaskComplete";
import { Inventory } from "../data/character/Inventory";

type EngineContextContents = {
    character: Character,
    progress: number,
    workingTask: Task | null,
    workingSkill: Skill | null,
    setWorkingSkill: React.Dispatch<React.SetStateAction<Skill | null>>
    setWorkingTask: React.Dispatch<React.SetStateAction<Task | null>>
}
const EngineContext = createContext({} as EngineContextContents);
export const useEngineContext = () => useContext(EngineContext);


export default function EngineProvider({ 
    children 
} : {
    children : React.ReactNode
}) {
    const [character, setCharacter] = useState<Character>(mockCharacter);
    const [workingSkill, setWorkingSkill] = useState<Skill | null>(null);
    const [workingTask, setWorkingTask] = useState<Task | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0)
    }, [workingTask])

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
      }
        
    useInterval(() => {
        if (workingSkill != null && workingTask != null) {

            if (progress + (tickRateMs/1000) >= workingTask.durationSec) {
                setProgress(0);
                updateCharacter(character, workingSkill, workingTask);
                canContinueTask(character.inventory, workingTask);
            } else {
                setProgress(progress + (tickRateMs/1000))
            }
        }

        return () => setProgress(0);
    }, tickRateMs);

    const canContinueTask = (inventory: Inventory, task: Task) => {
        let canContinue = true;
        if (task.requires) {
            Object.entries(task.requires).forEach(([itemId, quantity]) => {
                if (!(itemId in inventory.items) || inventory.items[itemId] < quantity) {
                    canContinue = false;
                }
            })
        }
        
        if (!canContinue) {
            setWorkingSkill(null);
            setWorkingTask(null);
        }
    }
    const updateCharacter = (character: Character, skill: Skill, task: Task) => {
        updateExp(character, skill, task.experience)
        const loot = updateInventory(character, task.lootTable, task.requires);
        toast(<TaskComplete skill={skill} task={task} character={character} loot={loot}></TaskComplete>, {duration: 10000})
        setCharacter({...character})

    }
    const updateExp = (character: Character, skill: Skill, exp: number) => {
        character.skills.addExp(skill.id, exp);
    }
    const updateInventory = (character: Character, lootTable: LootTable, taskConsumed?: {[itemid: string]: number}) => {
        let loot: Item[] = []
        if (taskConsumed) {
            Object.entries(taskConsumed).forEach(([itemdId, amount]) => {
                character.inventory.removeItem(itemdId, amount)
            })
        }
        Object.entries(lootTable).forEach(([itemId, dropRate]) => {
            let roll = Math.floor(Math.random() * 100)
            if ((100 - dropRate) <= roll) {
                character.inventory.addItem(itemId)
                loot.push(items.get(itemId));
            }
        })
        return loot
    }

    return (
        <EngineContext.Provider value={{setWorkingSkill, setWorkingTask, character, progress, workingTask, workingSkill}}>{ children }</EngineContext.Provider>
    )
}


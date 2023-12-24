import { MutableRefObject, createContext, useContext, useEffect, useRef, useState } from "react";
import { mockCharacter, Character } from "../data/character/Character";
import { Skill, Task } from "../data/skills/Skills";
import { requiredExpForLevelUp, tickRateMs } from "../data/configurations/Configurations";

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

            if (progress + (tickRateMs/1000) >= workingTask.duration) {
                setProgress(0);
                updateExp(character, workingSkill, workingTask.experience)
            } else {
                setProgress(progress + (tickRateMs/1000))
            }
        }

        return () => setProgress(0);
    }, tickRateMs);

    const updateExp = (character: Character, skill: Skill, exp: number) => {
        character.skills.addExp(skill.id, exp);
        setCharacter({...character})
    }

    return (
        <EngineContext.Provider value={{setWorkingSkill, setWorkingTask, character, progress, workingTask, workingSkill}}>{ children }</EngineContext.Provider>
    )
}


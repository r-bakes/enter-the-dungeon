"use client";

import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { SkillHeader } from "../../skillMenu/components/skillHeader/skillHeader";
import { agriculture } from "@/data/skills/agriculture";
import VerticalAccent from "../../../../components/verticalAccent";
import TasksMenu from "./tasksMenu";
import { useEffect, useState } from "react";

export default function AgricultureMenu({}) {
  const { character } = useCharacterEngineContext();

  // Local state just to force updates. Want waiting on page for elements to update
  const [tick, setTick] = useState(0);

  // Increment 'tick' every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-6 overflow-y-scroll px-8">
      <SkillHeader
        skill={agriculture}
        skillLevel={character.skills[agriculture.id].level}
        skillExperience={character.skills[agriculture.id].experience}
      ></SkillHeader>
      <div className="flex w-full grow gap-6">
        <TasksMenu></TasksMenu>
        <VerticalAccent></VerticalAccent>
      </div>
    </div>
  );
}

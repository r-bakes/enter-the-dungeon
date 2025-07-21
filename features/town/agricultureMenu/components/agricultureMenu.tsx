"use client";

import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { SkillHeader } from "../../skillMenu/components/skillHeader/skillHeader";
import { agriculture } from "@/data/skills/agriculture";
import VerticalAccent from "../../../../components/verticalAccent";
import TasksMenu from "./tasksMenu";
import { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { renderIcon } from "@/features/common/utils/formattingUtilities";

export default function AgricultureMenu({}) {
  const { character } = useCharacterEngineContext();

  // Local state just to force updates. Want waiting on page for elements to update
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 60_000); // refresh every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4 px-4 lg:gap-6 lg:px-8">
      {/* Skill Header - responsive like other menus */}
      <SkillHeader
        skill={agriculture}
        skillLevel={character.skills[agriculture.id].level}
        skillExperience={character.skills[agriculture.id].experience}
      />

      {/* Main Content */}
      <div className="flex h-full w-full flex-col gap-4 lg:flex-row lg:gap-6 lg:min-h-0 lg:grow">
        <div className="hidden w-0 border-4 shadow-xs lg:block"></div>
        
        <div className="flex w-full flex-1 min-h-screen lg:min-h-0">
          <TasksMenu />
        </div>
      </div>
    </div>
  );
}

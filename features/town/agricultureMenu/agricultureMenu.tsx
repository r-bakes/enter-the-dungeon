"use client";

import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { useTownEngineContext } from "@/engines/townEngineContext";
import { SkillHeader } from "../skillMenu/skillHeader/skillHeader";
import { agriculture } from "@/data/skills/agriculture";
import PlotsMenu from "./plotsMenu/plotsMenu";

export default function AgricultureMenu({}) {
  const { character } = useCharacterEngineContext();
  const { workingTask } = useTownEngineContext();

  return (
    <div className="flex h-full w-full flex-col gap-6 overflow-y-scroll px-8">
      <SkillHeader
        skill={agriculture}
        skillLevel={character.skills[agriculture.id].level}
        skillExperience={character.skills[agriculture.id].experience}
      ></SkillHeader>
      <div className="flex h-[calc(100%-184px)] w-full gap-6">
        <PlotsMenu></PlotsMenu>
      </div>
    </div>
  );
}

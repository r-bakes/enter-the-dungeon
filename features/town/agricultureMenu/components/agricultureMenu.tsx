"use client";

import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { SkillHeader } from "../../skillMenu/components/skillHeader/skillHeader";
import { agriculture } from "@/data/skills/agriculture";
import VerticalAccent from "../../../../components/verticalAccent";
import TasksMenu from "./tasksMenu";

export default function AgricultureMenu({}) {
  const { character } = useCharacterEngineContext();

  return (
    <div className="flex h-full w-full flex-col gap-6 overflow-y-scroll px-8">
      <SkillHeader
        skill={agriculture}
        skillLevel={character.skills[agriculture.id].level}
        skillExperience={character.skills[agriculture.id].experience}
      ></SkillHeader>
      <div className="flex h-[calc(100%-184px)] w-full gap-6">
        <TasksMenu></TasksMenu>
        <VerticalAccent></VerticalAccent>
      </div>
    </div>
  );
}

"use client"; // Ensure this component is treated as a Client Component

import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Container from "./container";
import { PastureId, PlotId } from "@/data/character/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { CONTAINER_LEVEL_REQUIREMENTS } from "@/configurations/configurations";
import LockedTaskButton from "@/features/town/skillMenu/components/tasksMenu/lockedTaskButton";
import { AgricultureTaskCategories } from "@/data/skills/enums";

export default function ContainerMenu({
  taskCategory,
}: {
  taskCategory: AgricultureTaskCategories;
}) {
  const { character } = useCharacterEngineContext();

  let ids =
    taskCategory === AgricultureTaskCategories.BOTANY ? PlotId : PastureId;

  return (
    <div className="flex w-full flex-col gap-2 overflow-y-auto">
      {Object.values(ids).map((id) => {
        const requiredLevel =
          CONTAINER_LEVEL_REQUIREMENTS[id as PlotId | PastureId];
        const currentLevel = character.skills.AGRICULTURE.level;

        return currentLevel >= requiredLevel ? (
          <Container key={id} id={id} />
        ) : (
          <LockedTaskButton requiredLevel={requiredLevel} key={id} />
        );
      })}
    </div>
  );
}

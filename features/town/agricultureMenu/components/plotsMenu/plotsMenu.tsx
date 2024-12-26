"use client"; // Ensure this component is treated as a Client Component

import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Plot from "./plot";
import { PlotId } from "@/data/character/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { PLOT_LEVEL_REQUIREMENTS } from "@/configurations/configurations";
import LockedTaskButton from "@/features/town/skillMenu/components/tasksMenu/lockedTaskButton";

export default function PlotsMenu() {
  const { character } = useCharacterEngineContext();

  return (
    <ScrollArea>
      <div className="flex w-full flex-col gap-2">
        {Object.values(PlotId).map((plotId) => {
          const requiredLevel = PLOT_LEVEL_REQUIREMENTS[plotId];
          const currentLevel = character.skills.AGRICULTURE.level;

          return currentLevel >= requiredLevel ? (
            <Plot key={plotId} id={plotId} />
          ) : (
            <LockedTaskButton requiredLevel={requiredLevel} key={plotId} />
          );
        })}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}

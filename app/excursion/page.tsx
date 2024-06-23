"use client";

import Arena from "@/components/excursion/arena/arena";
import CharacterEngineProvider from "@/engine/characterEngineContext";
import CombatCardEngineProvider from "@/engine/combatCardEngineContext";
import EncounterEngineProvider from "@/engine/encounterEngineContext";
import ExcursionEngineProvider from "@/engine/excursionEngineContext";

export default function Page({}) {
  return (
    <div className="flex w-full h-full py-10 px-10">
      <CharacterEngineProvider>
        <ExcursionEngineProvider>
          <EncounterEngineProvider>
            <CombatCardEngineProvider>
              <Arena></Arena>
            </CombatCardEngineProvider>
          </EncounterEngineProvider>
        </ExcursionEngineProvider>
      </CharacterEngineProvider>
    </div>
  );
}

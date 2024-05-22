"use client";

import Arena from "@/components/excursion/arena/Arena";
import CharacterEngineProvider from "@/engine/CharacterEngineContext";
import EncounterEngineProvider from "@/engine/EncounterEngineContext";
import ExcursionEngineProvider from "@/engine/ExcursionEngineContext";

export default function Page({}) {
  return (
    <div className="flex w-full h-full py-10 px-10">
      <CharacterEngineProvider>
        <ExcursionEngineProvider>
          <EncounterEngineProvider>
            <Arena></Arena>
          </EncounterEngineProvider>
        </ExcursionEngineProvider>
      </CharacterEngineProvider>
    </div>
  );
}

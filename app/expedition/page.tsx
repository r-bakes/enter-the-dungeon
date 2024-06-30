"use client";

import Arena from "@/components/expedition/arena/arena";
import CharacterEngineProvider from "@/engine/characterEngineContext";
import CombatCardEngineProvider from "@/engine/combatCardEngineContext";
import EncounterEngineProvider from "@/engine/encounterEngineContext";
import ExpeditionEngineProvider from "@/engine/expeditionEngineContext";
import { AnimatePresence } from "framer-motion";

export default function Page({}) {
  return (
    <div className="flex w-full h-full py-10 px-10 min-w-max min-h-max">
      <CharacterEngineProvider>
        <ExpeditionEngineProvider>
          <EncounterEngineProvider>
            <CombatCardEngineProvider>
              <AnimatePresence>
                <Arena></Arena>
              </AnimatePresence>
            </CombatCardEngineProvider>
          </EncounterEngineProvider>
        </ExpeditionEngineProvider>
      </CharacterEngineProvider>
    </div>
  );
}

"use client";

import Arena from "@/components/expedition/arena/arena";
import CharacterEngineProvider from "@/engines/characterEngineContext";
import CombatCardEngineProvider from "@/engines/combatCardEngineContext";
import EncounterEngineProvider from "@/engines/encounterEngineContext";
import ExpeditionEngineProvider from "@/engines/expeditionEngineContext";
import { AnimatePresence } from "framer-motion";

export default function Page({}) {
  return (
    <CharacterEngineProvider>
      <ExpeditionEngineProvider>
        <EncounterEngineProvider>
          <CombatCardEngineProvider>
            <AnimatePresence>
              <div className="flex h-full min-h-max w-full min-w-max bg-secondaryBackground px-10 py-10">
                <Arena></Arena>
              </div>
            </AnimatePresence>
          </CombatCardEngineProvider>
        </EncounterEngineProvider>
      </ExpeditionEngineProvider>
    </CharacterEngineProvider>
  );
}

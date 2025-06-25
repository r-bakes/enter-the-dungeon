"use client";
import React from "react";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import { menuTable } from "@/data/menus/menus";
import MenuSelect from "@/features/town/menuSelect/components/menuSelect";
import { MenuId } from "@/data/menus/enums";
import Arena from "@/features/expeditions/arena/arena";
import ExpeditionEngineProvider from "@/engines/expeditionEngineContext";
import EncounterEngineProvider from "@/engines/encounterEngineContext";
import CombatCardEngineProvider from "@/engines/combatCardEngineContext";
import AnimationEngineProvider from "@/engines/animationEngineContext";
import { Toaster } from "@/components/ui/sonner";

export default function Page() {
  const { selectedMenu, isToastDisabled } = useMenuEngineContext();

  return (
    <div className="flex h-full min-h-min w-full min-w-min">
      {!isToastDisabled && <Toaster position="bottom-left" closeButton />}
      {selectedMenu === MenuId.EXPEDITION ? (
        <div className="bg-secondary-background flex w-full grow p-10">
          <ExpeditionEngineProvider>
            <EncounterEngineProvider>
              <CombatCardEngineProvider>
                <AnimationEngineProvider>
                  <Arena></Arena>
                </AnimationEngineProvider>
              </CombatCardEngineProvider>
            </EncounterEngineProvider>
          </ExpeditionEngineProvider>
        </div>
      ) : (
        <div className="flex h-full w-full">
          <MenuSelect />
          <div className="bg-secondary-background flex min-h-0 flex-1 py-10">
            {menuTable[selectedMenu].menu}
          </div>
        </div>
      )}
    </div>
  );
}

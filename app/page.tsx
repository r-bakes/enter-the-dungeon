"use client";
import React from "react";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import { menuTable } from "@/data/menus/menus";
import MenuSelect from "@/features/town/menuSelect/components/menuSelect";
import { MenuId } from "@/data/menus/enums";
import Arena from "@/features/expedition/arena/arena";
import ExpeditionEngineProvider from "@/engines/expeditionEngineContext";
import EncounterEngineProvider from "@/engines/encounterEngineContext";
import CombatCardEngineProvider from "@/engines/combatCardEngineContext";

export default function Page() {
  const { selectedMenu } = useMenuEngineContext();

  return (
    <div className="flex h-full w-full">
      {selectedMenu === MenuId.EXPEDITION ? (
        <div className="flex w-full grow p-10">
          <ExpeditionEngineProvider>
            <EncounterEngineProvider>
              <CombatCardEngineProvider>
                <Arena></Arena>
              </CombatCardEngineProvider>
            </EncounterEngineProvider>
          </ExpeditionEngineProvider>
        </div>
      ) : (
        <div className="flex h-full w-full">
          <MenuSelect />
          <div className="flex min-h-0 flex-1 py-10">
            {menuTable[selectedMenu].menu}
          </div>
        </div>
      )}
    </div>
  );
}

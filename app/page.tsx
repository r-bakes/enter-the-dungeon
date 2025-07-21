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
import { NotificationBar } from "@/components/ui/notification-bar";

export default function Page() {
  const { selectedMenu, isToastDisabled } = useMenuEngineContext();

  return (
    <div className="flex h-full w-full max-w-full overflow-hidden">
      {/* Main content area - full height, sidebar will extend behind notification bar */}
      <div className="flex h-full w-full max-w-full">
        {selectedMenu === MenuId.EXPEDITION ? (
          <div className="bg-secondary-background flex w-full grow p-10 pb-24 overflow-hidden">
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
          <div className="flex h-full w-full max-w-full overflow-hidden">
            <MenuSelect />
            <div className="bg-secondary-background flex min-h-0 min-w-0 flex-1 py-10 pb-24 lg:pb-24 overflow-x-auto">
              {menuTable[selectedMenu].menu}
            </div>
          </div>
        )}
      </div>
      
      {/* Reserved notification bar area */}
      <NotificationBar />
      
      {/* Toaster positioned within the notification bar */}
      {!isToastDisabled && (
        <Toaster 
          position="bottom-left" 
          closeButton 
          offset={24}
          toastOptions={{
            style: {
              marginBottom: '4px',
              marginLeft: '16px',
              borderRadius: '0px',
            }
          }}
        />
      )}
    </div>
  );
}

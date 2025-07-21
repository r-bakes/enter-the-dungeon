import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MenuId } from "@/data/menus/enums";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import { DoorClosed } from "lucide-react";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import React from "react";

export default function ExpeditionsMenu() {
  const { setSelectedMenu } = useMenuEngineContext();

  const enterDungeon = () => {
    setSelectedMenu(MenuId.EXPEDITION);
  };

  return (
    <div className="flex h-full w-full flex-col gap-4 px-4 lg:gap-6 lg:px-8">
      {/* Header Card */}
      <Card className="w-full items-center">
        <CardHeader className="flex flex-row items-center">
          <div className="lg:hidden">
            {renderIcon(DoorClosed, 32, { strokeWidth: 1 })}
          </div>
          <div className="hidden lg:block">
            {renderIcon(DoorClosed, 44, { strokeWidth: 1 })}
          </div>
          <div className="m-0 flex flex-col pl-3 lg:pl-4">
            <CardTitle className="text-base lg:text-lg">Expeditions</CardTitle>
            <CardDescription className="text-xs lg:text-sm">
              Enter the dungeon to battle monsters and earn rewards.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content */}
      <div className="flex h-full w-full flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="hidden w-0 border-4 shadow-xs lg:block"></div>

        <div className="flex h-full w-full items-center justify-center">
          <Card className="flex w-full max-w-md flex-col items-center p-6 lg:max-w-lg lg:p-8">
            <CardHeader className="flex flex-col items-center gap-2 p-0 lg:gap-2">
              <div className="lg:hidden">
                {renderIcon(DoorClosed, 160, { strokeWidth: 1.2 })}
              </div>
              <div className="hidden lg:block">
                {renderIcon(DoorClosed, 220, { strokeWidth: 1.2 })}
              </div>

              <div className="flex flex-col items-center gap-2"></div>

              <Button
                onClick={() => enterDungeon()}
                className="h-12 w-full max-w-xs text-base lg:h-14 lg:text-lg"
                variant="destructive"
              >
                Enter the Dungeon
              </Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

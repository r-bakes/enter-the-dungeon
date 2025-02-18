import { Button } from "@/components/ui/button";
import { MenuId } from "@/data/menus/enums";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import { DoorClosed } from "lucide-react";
import React from "react";

export default function ExpeditionsMenu() {
  const { setSelectedMenu } = useMenuEngineContext();

  const enterDungeon = () => {
    setSelectedMenu(MenuId.EXPEDITION);
  };

  let icon = <DoorClosed id={"test"} size={512} strokeWidth={1.2}></DoorClosed>;

  return (
    <div className="flex h-full w-full flex-col px-8">
      <div className="flex h-full w-full flex-col items-center justify-center">
        {icon}
        <Button
          onClick={() => enterDungeon()}
          className="h-12 w-64"
          variant="destructive"
        >
          Enter the Dungeon
        </Button>
        <div className="h-64"></div>
      </div>
    </div>
  );
}

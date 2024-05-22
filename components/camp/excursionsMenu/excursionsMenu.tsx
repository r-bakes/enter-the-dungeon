import { Button } from "@/components/ui/button";
import { DoorClosed, DoorOpen } from "lucide-react";
import { useRouter } from 'next/navigation';
import React from "react";

export default function ExcursionsMenu() {
  let [buttonPressed, setButtonPressed] = React.useState<boolean>(false);
  const router = useRouter();

  const enterDungeon = () => {
    router.push('/excursion');
  };

  let icon = <DoorClosed id={"test"} size={512} strokeWidth={1.2}></DoorClosed>;

  return (
    <div className="flex flex-col px-8 h-full w-full min-w-[800px]">
      <div className="flex flex-col w-full h-full justify-center items-center">
        {icon}
        <Button onClick={() => enterDungeon()} className="w-64 h-12" variant="destructive">
          Enter the Dungeon
        </Button>
        <div className="h-64"></div>
      </div>
    </div>
  );
}

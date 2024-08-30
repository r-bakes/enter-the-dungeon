import { Button } from "@/components/ui/button";
import { DoorClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function ExpeditionsMenu() {
  let [buttonPressed, setButtonPressed] = React.useState<boolean>(false);
  const router = useRouter();

  const enterDungeon = () => {
    router.push("/expedition");
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

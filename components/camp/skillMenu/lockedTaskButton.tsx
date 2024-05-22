import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Task } from "@/game/data/skills/Skills";

export default function LockedTaskButton({ task }: { task: Task }) {
  return (
    <Card className="flex w-56 h-[140px] min-w-[224px] mr-4 shrink-0">
      <Button
        className="flex flex-col  w-full h-full justify-center items-center p-4"
        disabled={true}
        variant="ghost"
      >
        <CardHeader className="flex flex-col p-0">
          <CardTitle className="text-xl">Locked</CardTitle>
          <CardDescription className="text-xs text-left">
            Requires level {task.requiredLevel}
          </CardDescription>
        </CardHeader>
      </Button>
    </Card>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Task } from "@/game/data/skills/Skills";

export default function TaskButton({
  task,
  onClick,
}: {
  task: Task;
  onClick: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <Card className="flex w-max h-[140px] min-w-[224px]">
      <Button
        className="flex flex-col  w-full h-full items-start justify-start p-4"
        onClick={onClick}
        variant="ghost"
      >
        <CardHeader className="flex flex-col p-0">
          <div className="flex flex-row w-full h-full space-x-3">
            <div className="w-[30px] h-[30px]">
              <task.icon size={30} strokeWidth={1.4}></task.icon>
            </div>
            <div className="flex flex-col text-left">
              <CardTitle className="text-xl">{task.name}</CardTitle>
            </div>
          </div>
          <CardDescription className="text-xs text-left">
            {task.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col text-left p-0 pt-2 w-full">
          <div className="flex w-full">
            <div className="w-1/4 text-left">
              <Label className="text-xs text-gray-800 pointer-events-none">
                {task.durationSec}
              </Label>
            </div>
            <div className="w-3/4 text-right">
              <Label className="text-xs text-muted-foreground font-light pointer-events-none">
                seconds
              </Label>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 text-left">
              <Label className="text-xs text-gray-800 pointer-events-none">
                {task.experience}{" "}
              </Label>
            </div>
            <div className="w-3/4 text-right">
              <Label className="text-xs text-muted-foreground font-light pointer-events-none">
                experience
              </Label>
            </div>
          </div>
        </CardContent>
      </Button>
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PastureId, PlotId } from "@/data/character/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import ContainerSheetEntry from "./containerSheetEntry";
import { botanyTasks } from "@/data/tasks/agriculture/botany";
import {
  formatTime,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { taskTable } from "@/data/tasks/tasks";
import { Label } from "@/components/ui/label";
import { Clock } from "lucide-react";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import useAgricultureActions from "../../hooks/useAgricultureActions";
import { ranchingTasks } from "@/data/tasks/agriculture/ranching";

export default function Container({ id }: { id: PlotId | PastureId }) {
  const { character } = useCharacterEngineContext();
  const { timeRemainingMs, canCompleteTask, collect, assign, remove } =
    useAgricultureActions();
  let containerContent =
    id in PlotId
      ? character.working.agriculture.botany[id as PlotId]
      : character.working.agriculture.ranching[id as PastureId];
  let tasks = id in PlotId ? botanyTasks : ranchingTasks;
  let cardContent;

  if (!containerContent.taskId) {
    cardContent = (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-full w-full flex-col items-center justify-center p-4"
          >
            <CardHeader>
              <CardTitle className="text-muted-foreground text-xl">
                Empty
              </CardTitle>
              <CardDescription className="text-muted-foreground text-left text-xs">
                Click to sow
              </CardDescription>
            </CardHeader>
          </Button>
        </SheetTrigger>
        <SheetContent
          className="flex h-full max-h-screen flex-col"
          side={"right"}
        >
          <SheetHeader>
            <SheetTitle>Select a Plant</SheetTitle>
            <SheetDescription>Check back in a while!</SheetDescription>
          </SheetHeader>
          <Separator className="my-6"></Separator>
          <div className="flex grow gap-4 overflow-x-scroll">
            {Object.values(tasks).map((task) => (
              <ContainerSheetEntry
                key={task.id}
                task={task}
                onClick={() => assign(id, task.id)}
              ></ContainerSheetEntry>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    );
  } else {
    let task = taskTable[containerContent.taskId];
    let [time, timeUnit] = formatTime(
      timeRemainingMs(containerContent.startTime, task.durationSec) / 1000,
    );

    cardContent = (
      <div className="flex h-full w-full justify-between p-4">
        <div className="flex items-center gap-3">
          {renderIcon(task.icon, 44, task.iconStyle)}
          <div className="flex min-w-max flex-col gap-2">
            <Label>{task.name}</Label>
            <div className="flex h-full items-center gap-1">
              {renderIcon(Clock, 16, TASK_AND_ITEM_ICON_STYLE)}
              {Number(time) > 0 ? (
                <div className="flex h-full items-center gap-1">
                  <Label className="text-xs font-normal">{time}</Label>
                  <Label className="text-muted-foreground text-xs font-normal">
                    {timeUnit} remaining
                  </Label>
                </div>
              ) : (
                <Label className="text-xs font-normal">Ready!</Label>
              )}
            </div>
          </div>
        </div>
        <div>
          <Button
            disabled={!canCompleteTask(id)}
            className="w-30"
            onClick={() => collect(id)}
          >
            Harvest
          </Button>
          <Button
            variant="destructive"
            className="w-30"
            onClick={() => remove(id)}
          >
            Uproot
          </Button>
        </div>
      </div>
    );
  }

  return <Card className="flex h-20 w-full min-w-max">{cardContent}</Card>;
}

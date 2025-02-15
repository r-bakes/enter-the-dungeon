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
import { PlotId } from "@/data/character/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import PlotSheetsEntry from "./plotsSheetEntry";
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

export default function Plot({ id }: { id: PlotId }) {
  const { character } = useCharacterEngineContext();
  const { timeRemainingMs, canCompleteTask, collect } = useAgricultureActions();
  let plotContent = character.working.agriculture.botany[id];
  let cardContent;

  if (!plotContent.taskId) {
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
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Select a Plant</SheetTitle>
            <SheetDescription>Check back in a while!</SheetDescription>
          </SheetHeader>
          <Separator className="my-6"></Separator>
          {Object.values(botanyTasks).map((task) => (
            <PlotSheetsEntry
              key={task.id}
              plotId={id}
              task={task}
            ></PlotSheetsEntry>
          ))}
        </SheetContent>
      </Sheet>
    );
  } else {
    let task = taskTable[plotContent.taskId];
    let [time, timeUnit] = formatTime(
      timeRemainingMs(plotContent.startTime, task.durationSec) / 1000,
    );

    cardContent = (
      <div className="flex h-full w-full justify-between p-4">
        <div className="flex items-center gap-3">
          {renderIcon(task.icon, 44, task.iconStyle)}
          <div className="flex min-w-max flex-col gap-2">
            <Label>{task.name}</Label>
            <div className="flex h-full items-center gap-1">
              {renderIcon(Clock, 16, TASK_AND_ITEM_ICON_STYLE)}
              <div className="flex h-full items-center gap-1">
                <Label className="text-xs font-normal">{time}</Label>
                <Label className="text-muted-foreground text-xs font-normal">
                  {timeUnit} remaining
                </Label>
              </div>
            </div>
          </div>
        </div>
        <Button disabled={!canCompleteTask(id)} onClick={() => collect(id)}>
          Harvest
        </Button>
      </div>
    );
  }

  return <Card className="flex h-20 w-full min-w-max">{cardContent}</Card>;
}

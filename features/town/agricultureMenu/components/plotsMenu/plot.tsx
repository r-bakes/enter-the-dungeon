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

export default function Plot({ id }: { id: PlotId }) {
  const { character } = useCharacterEngineContext();
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
              <CardTitle className="text-xl text-muted-foreground">
                Empty
              </CardTitle>
              <CardDescription className="text-left text-xs text-muted-foreground">
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
    cardContent = <div>TEST</div>;
  }

  return <Card className="flex h-20 w-full min-w-max">{cardContent}</Card>;
}

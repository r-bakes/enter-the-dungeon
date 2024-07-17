import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@radix-ui/react-label";
import { Play, X, Backpack } from "lucide-react";
import { useCampEngineContext } from "@/engine/campEngineContext";
import { generateDropRates } from "@/engine/utils/lootUtilities";
import { Item } from "@/data/items/types";
import { Skill } from "@/data/skills/skills";
import { Task } from "@/data/skills/skills";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { renderIcon } from "@/data/gameObject";
import TaskDataEntry from "./taskDataEntry";
import { Separator } from "@/components/ui/separator";
import TaskProducesEntry from "./taskProducesEntry";
import { TaskRequiresEntry } from "./taskRequiresEntry";

const rootCardFormat =
  "flex flex-col h-full w-72 min-w-72 max-w-72 items-center";

export default function TaskInfo({
  skill,
  task,
}: Readonly<{
  skill: Skill | null;
  task: Task | null;
}>) {
  const {
    setWorkingSkill,
    setWorkingTask,
    taskProgress: progress,
    workingTask,
  } = useCampEngineContext();
  const { character } = useCharacterEngineContext();

  if (!task) {
    return (
      <Card className={rootCardFormat}>
        <div className="flex h-full w-full items-center justify-center">
          <Label className="h-10 text-2xl font-extralight text-muted-foreground">
            Select a task
          </Label>
        </div>
      </Card>
    );
  }

  let taskProduction = generateDropRates(task.lootTable);
  let taskRequires: { item: Item; quantity: number; haveEnough: boolean }[] =
    [];
  let requirementsMet: boolean = true;

  if (task.requires) {
    taskRequires = Object.entries(task.requires).map(([itemId, quantity]) => ({
      item: itemTable[itemId],
      quantity: quantity,
      haveEnough:
        !(itemId in character.inventory) ||
        quantity > character.inventory[itemId],
    }));

    for (const element of taskRequires) {
      let reqs = element;
      if (
        !(reqs.item.id in character.inventory) ||
        reqs.quantity > character.inventory[reqs.item.id]
      ) {
        requirementsMet = false;
      }
    }
  }

  return (
    <Card className={rootCardFormat}>
      <CardHeader className="flex h-32 w-full flex-row">
        {renderIcon(task.icon, {
          ...task.iconStyle,
          size: 56,
          strokeWidth: 0.5,
          strokeOpacity: 0.5,
          fillOpacity: 0.5,
        })}
        <div className="flex flex-col pl-4">
          <CardTitle>{task.name}</CardTitle>
          <CardDescription>{task.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex w-full flex-col gap-4">
        <Progress
          className="h-4 w-full rounded-sm"
          value={task === workingTask ? (progress / task.durationSec) * 100 : 0}
        ></Progress>
        <Separator></Separator>
        <div className="flex w-full items-center justify-between gap-4">
          <TaskDataEntry
            data={task.durationSec}
            label={"seconds"}
          ></TaskDataEntry>
          <div className="h-1 w-1 rounded-full bg-black"></div>
          <TaskDataEntry
            data={task.experience}
            label={"experience"}
          ></TaskDataEntry>
        </div>
        <TaskProducesEntry
          label={"produces"}
          data={taskProduction}
        ></TaskProducesEntry>
        <TaskRequiresEntry
          data={taskRequires}
          label={"requires"}
        ></TaskRequiresEntry>
      </CardContent>
      <CardFooter className="flex w-full grow items-end">
        <Button
          className="w-1/2 rounded-l-md rounded-r-none text-center"
          disabled={!requirementsMet}
          onClick={() => {
            setWorkingSkill(skill);
            setWorkingTask(task);
          }}
        >
          <Play className="mr-2"></Play>Start
        </Button>
        {task == workingTask ? (
          <Button
            className="w-1/2 rounded-l-none rounded-r-md text-center"
            variant="destructive"
            onClick={() => {
              setWorkingSkill(null);
              setWorkingTask(null);
            }}
          >
            <X className="mr-2"></X>Stop
          </Button>
        ) : (
          <Button
            className="w-1/2 rounded-l-none rounded-r-md text-center"
            variant="secondary"
            disabled={true}
          >
            <X className="mr-2"></X>Stop
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
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

export default function TaskInfo({
  skill,
  task,
}: {
  skill: Skill | null;
  task: Task | null;
}) {
  const {
    setWorkingSkill,
    setWorkingTask,
    taskProgress: progress,
    workingTask,
  } = useCampEngineContext();
  const { character } = useCharacterEngineContext();
  if (!task) {
    return (
      <Card className="flex flex-col h-full w-72 shrink-0 justify-center items-center">
        <Label className="flex text-2xl text-muted-foreground font-extralight h-10">
          Select a task
        </Label>
      </Card>
    );
  } else {
    let taskProduction = generateDropRates(task.lootTable);
    let taskRequires:
      | null
      | { item: Item; quantity: number; haveEnough: boolean }[] = null;
    let requirementsMet: boolean = true;

    if (task.requires) {
      taskRequires = Object.entries(task.requires).map(
        ([itemId, quantity]) => ({
          item: itemTable[itemId],
          quantity: quantity,
          haveEnough:
            !(itemId in character.inventory) ||
            quantity > character.inventory[itemId],
        })
      );

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
      <Card className="flex flex-col h-full w-72 shrink-0">
        <CardHeader className="flex h-32 flex-row">
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
        <CardContent className="flex flex-col gap-4">
          <Progress
            className="w-full h-4 rounded-sm"
            value={
              task === workingTask ? (progress / task.durationSec) * 100 : 0
            }
          ></Progress>
          <Separator></Separator>
          <div className="flex w-full items-center gap-4 justify-between">
            <TaskDataEntry
              data={task.durationSec}
              label={"seconds"}
            ></TaskDataEntry>
            <div className="bg-black rounded-full w-1 h-1"></div>
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
            className="rounded-l-md rounded-r-none w-1/2 text-center"
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
              className="rounded-r-md rounded-l-none w-1/2 text-center"
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
              className="rounded-r-md rounded-l-none w-1/2 text-center"
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
}

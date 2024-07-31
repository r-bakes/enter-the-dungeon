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
import { Play, X } from "lucide-react";
import { useCampEngineContext } from "@/engines/campEngineContext";
import { Item } from "@/data/items/types";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { renderIcon } from "@/data/gameObject";
import TaskDataEntry from "./taskDataEntry";
import { Separator } from "@/components/ui/separator";
import TaskProducesEntry from "./taskProducesEntry";
import { TaskRequiresEntry } from "./taskRequiresEntry";
import {
  applyExperienceModifier,
  applySpeedModifier,
  getModifiers,
  SkillModifierType,
} from "@/data/modifiers/skillModifiers";
import TaskModifiers from "./taskModifiers";
import { Skill, Task } from "@/data/skills/types";
import { itemTable } from "@/data/items/items";
import { generateDropRates } from "@/engines/utils/lootUtilities";

const rootCardFormat =
  "flex flex-col h-full grow-0 w-72 min-w-72 max-w-72 items-center overflow-y-scroll";

export default function TaskInfo({
  skill,
  task,
}: Readonly<{
  skill: Skill;
  task: Task | null;
}>) {
  const {
    setWorkingSkill,
    setWorkingTask,
    taskProgress,
    workingTask,
    modifierTable,
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
  let modifiers = getModifiers(modifierTable, skill.id, task.id);

  if (task.requires) {
    taskRequires = Object.entries(task.requires).map(([itemId, quantity]) => ({
      item: itemTable[itemId],
      quantity: quantity,
      haveEnough:
        itemId in character.inventory && quantity <= character.inventory[itemId],
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
      <CardHeader className="flex h-32 w-full flex-row gap-4">
        {renderIcon(task.icon, 56, task.iconStyle)}
        <div className="flex flex-col gap-1">
          <CardTitle>{task.name}</CardTitle>
          <CardDescription className="font-normal">
            {task.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex w-full grow flex-col gap-4">
        <Progress
          className="h-4 w-full rounded-sm"
          value={
            task === workingTask
              ? (taskProgress /
                  applySpeedModifier(
                    task.durationSec,
                    modifiers[SkillModifierType.SPEED],
                  )) *
                100
              : 0
          }
        ></Progress>
        <Separator></Separator>
        <div className="flex w-full items-center justify-between gap-4">
          <TaskDataEntry
            data={applySpeedModifier(
              task.durationSec,
              modifiers[SkillModifierType.SPEED],
            )}
            label={"seconds"}
          ></TaskDataEntry>
          <div className="h-1 w-1 rounded-full bg-black"></div>
          <TaskDataEntry
            data={applyExperienceModifier(
              task.experience,
              modifiers[SkillModifierType.EXPERIENCE],
            )}
            label={"experience"}
          ></TaskDataEntry>
        </div>
        <div className="flex grow flex-col gap-4 overflow-y-scroll">
          <TaskProducesEntry
            label={"produces"}
            data={taskProduction}
            multiplier={modifiers[SkillModifierType.PRODUCTION_MULTIPLIER]}
          ></TaskProducesEntry>
          <TaskRequiresEntry
            data={taskRequires}
            label={"requires"}
          ></TaskRequiresEntry>
          <TaskModifiers data={modifiers}></TaskModifiers>
        </div>
      </CardContent>
      <CardFooter className="flex h-24 w-full items-end">
        <Button
          className="w-1/2 text-center"
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
            className="w-1/2 text-center"
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
            className="w-1/2 text-center"
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

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
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import TaskDataEntry from "./taskDataEntry";
import { Separator } from "@/components/ui/separator";

import { itemTable } from "@/data/items/items";
import { generateDropRates } from "@/features/common/loot/utils/lootUtils";
import { Item } from "@/types/items";
import {
  formatRoundedQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { ModifierType } from "@/data/modifiers/enums";
import TaskProducesEntry from "@/features/town/skillMenu/components/taskInfo/taskProducesEntry";
import { TaskRequiresEntry } from "@/features/town/skillMenu/components/taskInfo/taskRequiresEntry";
import TaskModifiersEntry from "@/features/town/skillMenu/components/taskInfo/taskModifiersEntry";
import { StealthTask, Task } from "@/types/tasks";
import { ItemId } from "@/data/items/enums";
import { useModifierActions } from "@/features/town/modifiers/hooks/useModifierActions";
import { useModifierEngineContext } from "@/engines/modifierEngineContext";
import { useWorkingEngineContext } from "@/engines/workingEngineContext";
import { taskToSkill } from "@/features/common/working/utils/workingUtils";
import { SkillId } from "@/data/skills/enums";
import TaskSuccessEntry from "./taskSuccessEntry";
import { calculateSuccessChance } from "@/features/common/stealth/utils/stealthUtils";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";

const rootCardFormat =
  "flex flex-col grow-0 w-80 min-w-80 max-w-80 items-center";

export default function TaskInfo({
  task,
}: Readonly<{
  task: Task | null;
}>) {
  const { setWorkingTask, taskProgress, workingTask, taskWorkingLocked } =
    useWorkingEngineContext();
  const { character } = useCharacterEngineContext();
  const { applyExperienceModifier, applySpeedModifier, applyStealthModifier } =
    useModifierActions();
  const { modifiers } = useModifierEngineContext();
  const { hasItems } = useInventoryActions();

  if (!task) {
    return (
      <Card className={rootCardFormat}>
        <div className="flex h-full w-full items-center justify-center">
          <Label className="text-muted-foreground h-10 text-2xl font-extralight">
            Select a task
          </Label>
        </div>
      </Card>
    );
  }

  let taskProduction = generateDropRates(task.lootTable);
  let taskRequires: { item: Item; quantity: number; haveEnough: boolean }[] =
    [];
  let requirementsMet = hasItems(task.requires);

  return (
    <Card className={rootCardFormat}>
      <CardHeader className="flex h-32 w-full flex-row gap-4">
        {renderIcon(task.icon, 48, task.iconStyle)}
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg">{task.name}</CardTitle>
          <CardDescription className="font-normal">
            {task.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex min-h-0 w-full flex-1 flex-col gap-4">
        <Progress
          className="h-4 w-full rounded-sm"
          value={
            task === workingTask
              ? (taskProgress / applySpeedModifier(task.id)) * 100
              : 0
          }
        ></Progress>
        <Separator></Separator>
        <div className="flex w-full items-center justify-between gap-4">
          <TaskDataEntry
            data={applySpeedModifier(task.id)}
            label={"seconds"}
          ></TaskDataEntry>
          <div className="h-1 w-1 rounded-full bg-black"></div>
          <TaskDataEntry
            data={applyExperienceModifier(task.id)}
            label={"experience"}
          ></TaskDataEntry>
        </div>
        <div className="flex grow flex-col gap-4 overflow-y-scroll">
          {"perception" in task && (
            <TaskSuccessEntry
              value={formatRoundedQuantity(
                calculateSuccessChance(
                  applyStealthModifier(character.skills.STEALTH.level, task.id),
                  task.perception as number,
                ),
              ).toString()}
              description="chance to evade detection"
            ></TaskSuccessEntry>
          )}
          <TaskProducesEntry
            data={taskProduction}
            multiplier={modifiers[task.id][ModifierType.PRODUCTION_MULTIPLIER]}
          ></TaskProducesEntry>
          <TaskRequiresEntry data={task.requires}></TaskRequiresEntry>
          <TaskModifiersEntry data={modifiers[task.id]}></TaskModifiersEntry>
        </div>
      </CardContent>
      <CardFooter className="flex h-24 w-full items-end">
        <Button
          className="w-1/2 text-center"
          disabled={!requirementsMet || taskWorkingLocked}
          onClick={() => {
            setWorkingTask(task);
          }}
        >
          <Play className="mr-2"></Play>Start
        </Button>
        <Button
          className="w-1/2 text-center"
          variant={task == workingTask ? "destructive" : "secondary"}
          disabled={task != workingTask}
          onClick={() => {
            setWorkingTask(null);
          }}
        >
          <X className="mr-2"></X>Stop
        </Button>
      </CardFooter>
    </Card>
  );
}

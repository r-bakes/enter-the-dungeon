import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@radix-ui/react-label";
import { Play, X } from "lucide-react";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import TaskDataEntry from "./taskDataEntry";
import { Separator } from "@/components/ui/separator";

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
import { Task } from "@/types/tasks";
import { useModifierActions } from "@/features/town/modifiers/hooks/useModifierActions";
import { useModifierEngineContext } from "@/engines/modifierEngineContext";
import { useWorkingEngineContext } from "@/engines/workingEngineContext";
import TaskSuccessEntry from "./taskSuccessEntry";
import { calculateSuccessChance } from "@/features/common/stealth/utils/stealthUtils";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";

const rootCardFormat =
  "flex flex-col grow-0 w-full lg:w-80 lg:min-w-80 lg:max-w-80 items-center";

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
    <div className={`${rootCardFormat} lg:bg-card lg:border lg:shadow-sm`}>
      <div className="flex h-auto w-full flex-row gap-3 p-4 lg:gap-4 lg:p-6">
        <div className="lg:hidden">
          {renderIcon(task.icon, 32, task.iconStyle)}
        </div>
        <div className="hidden lg:block">
          {renderIcon(task.icon, 48, task.iconStyle)}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h3 className="truncate text-base leading-tight font-semibold lg:text-lg">
            {task.name}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-xs leading-tight font-normal lg:line-clamp-2 lg:text-sm">
            {task.description}
          </p>
        </div>
      </div>
      <div className="flex min-h-0 w-full flex-1 flex-col gap-4 p-4 lg:p-6">
        <Progress
          className="h-3 w-full rounded-sm lg:h-4"
          value={
            task === workingTask
              ? (taskProgress / applySpeedModifier(task.id)) * 100
              : 0
          }
        ></Progress>

        <Separator></Separator>

        {/* Time and experience stats */}
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

        {/* Task details */}
        <div className="flex flex-col gap-4 overflow-y-auto">
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
      </div>

      {/* Desktop only: Show buttons in footer */}
      <div className="hidden h-24 w-full flex-col items-end gap-2 p-4 pt-0 sm:flex-row sm:gap-0 lg:flex lg:p-6">
        <Button
          className="w-full text-center sm:w-1/2"
          disabled={!requirementsMet || taskWorkingLocked}
          onClick={() => {
            setWorkingTask(task);
          }}
        >
          <Play className="mr-2"></Play>Start
        </Button>
        <Button
          className="w-full text-center sm:w-1/2"
          variant={task == workingTask ? "destructive" : "secondary"}
          disabled={task != workingTask}
          onClick={() => {
            setWorkingTask(null);
          }}
        >
          <X className="mr-2"></X>Stop
        </Button>
      </div>
    </div>
  );
}

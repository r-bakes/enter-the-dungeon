import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  formatTime,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { useModifierActions } from "@/features/town/modifiers/hooks/useModifierActions";
import { Task } from "@/types/tasks";
import { TaskRequiresEntry } from "@/features/town/skillMenu/components/taskInfo/taskRequiresEntry";
import { Item } from "@/types/items";
import { itemTable } from "@/data/items/items";
import { ItemId } from "@/data/items/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import TaskProducesEntry from "@/features/town/skillMenu/components/taskInfo/taskProducesEntry";
import { generateDropRates } from "@/features/common/loot/utils/lootUtils";
import { useModifierEngineContext } from "@/engines/modifierEngineContext";
import { ModifierType } from "@/data/modifiers/enums";
import { Separator } from "@/components/ui/separator";
import TaskDataEntry from "@/features/town/skillMenu/components/taskInfo/taskDataEntry";
import { Play } from "lucide-react";
import TaskModifiersEntry from "@/features/town/skillMenu/components/taskInfo/taskModifiersEntry";
import { SheetClose } from "@/components/ui/sheet";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";

export default function ContainersSheetEntry({
  task,
  onClick,
  numberContainers = 1,
}: {
  task: Task;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  numberContainers?: number;
}) {
  const { modifiers } = useModifierEngineContext();
  const { hasItems } = useInventoryActions();
  const { applySpeedModifier, applyExperienceModifier } = useModifierActions();

  let [time, timeUnit] = formatTime(applySpeedModifier(task.id));

  let taskProduction = generateDropRates(task.lootTable);
  let requirementsMet = hasItems(task.requires, numberContainers);

  return (
    <Card className="flex max-w-80 min-w-80 flex-1 flex-col items-center justify-between">
      <div className="flex w-full flex-col">
        <CardHeader className="flex w-full flex-row gap-4">
          {renderIcon(task.icon, 48, task.iconStyle)}
          <div className="flex flex-col items-start">
            <CardTitle className="text-lg">{task.name}</CardTitle>
            <CardDescription className="font-normal">
              {task.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex w-full flex-col gap-4">
          <Separator></Separator>
          <div className="flex w-full items-center justify-between gap-4">
            <TaskDataEntry data={time} label={timeUnit}></TaskDataEntry>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <TaskDataEntry
              data={applyExperienceModifier(task.id)}
              label={"experience"}
            ></TaskDataEntry>
          </div>
          <div className="flex flex-col gap-6 overflow-y-scroll text-left">
            <TaskProducesEntry
              data={taskProduction}
              multiplier={
                modifiers[task.id][ModifierType.PRODUCTION_MULTIPLIER]
              }
            ></TaskProducesEntry>
            <TaskRequiresEntry
              data={task.requires}
              requiresMultiplier={numberContainers}
            ></TaskRequiresEntry>
            <TaskModifiersEntry data={modifiers[task.id]}></TaskModifiersEntry>
          </div>
        </CardContent>
      </div>
      <CardFooter className="flex w-full">
        <SheetClose asChild>
          <Button
            className="flex w-full text-center"
            disabled={!requirementsMet}
            onClick={onClick}
          >
            <Play className="mr-2"></Play>Plant
          </Button>
        </SheetClose>
      </CardFooter>
    </Card>
  );
}

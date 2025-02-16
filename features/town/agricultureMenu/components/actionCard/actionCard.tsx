"use client";

import { Button } from "@/components/ui/button";
import { AgricultureTaskCategories } from "@/data/skills/enums";
import useAgricultureActions from "../../hooks/useAgricultureActions";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import ContainerSheetEntry from "../containerMenu/containerSheetEntry";
import { botanyTasks } from "@/data/tasks/agriculture/botany";
import { Task } from "@/types/tasks";
import { TaskId } from "@/data/tasks/enum";
import { ranchingTasks } from "@/data/tasks/agriculture/ranching";

type LabelSet = {
  collectAll: string;
  speedAll: string;
  assignAll: string;
  removeAll: string;
  sheetTitle: string;
  sheetDescription: string;
};

export function getAgricultureContent(
  taskCategory: AgricultureTaskCategories,
): [LabelSet, { [id in TaskId]?: Task }] {
  if (taskCategory === AgricultureTaskCategories.BOTANY) {
    return [
      {
        collectAll: "Harvest All",
        speedAll: "Fertilize All",
        assignAll: "Plant All",
        removeAll: "Uproot All",
        sheetTitle: "Select a Plant",
        sheetDescription: "Check back in a while!",
      },
      botanyTasks,
    ];
  } else {
    return [
      {
        collectAll: "Collect All",
        speedAll: "Growth Elixer All",
        assignAll: "Pasture All",
        removeAll: "Release All",
        sheetTitle: "Select a Beast",
        sheetDescription: "Check back in a while!",
      },
      ranchingTasks,
    ];
  }
}
export default function ActionCard({
  taskCategory,
}: {
  taskCategory: AgricultureTaskCategories;
}) {
  const { collectAll, removeAll, assignAll } = useAgricultureActions();
  const [labels, tasks] = getAgricultureContent(taskCategory);

  return (
    <div className="flex w-full items-center py-2">
      <Button className="h-full w-1/4" onClick={() => collectAll(taskCategory)}>
        {labels.collectAll}
      </Button>

      <Button className="h-full w-1/4">{labels.speedAll}</Button>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="h-full w-1/4">{labels.assignAll}</Button>
        </SheetTrigger>
        <SheetContent
          className="flex h-full max-h-screen flex-col"
          side={"right"}
        >
          <SheetHeader>
            <SheetTitle>{labels.sheetTitle}</SheetTitle>
            <SheetDescription>{labels.sheetDescription}</SheetDescription>
          </SheetHeader>
          <Separator className="my-6"></Separator>
          <div className="flex grow gap-4 overflow-x-scroll">
            {Object.values(tasks).map((task) => (
              <ContainerSheetEntry
                key={task.id}
                onClick={() => assignAll(taskCategory, task.id)}
                task={task}
              ></ContainerSheetEntry>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Button
        className="h-full w-1/4"
        variant="destructive"
        onClick={() => removeAll(taskCategory)}
      >
        {labels.removeAll}
      </Button>
    </div>
  );
}

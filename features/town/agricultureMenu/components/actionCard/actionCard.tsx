"use client";

import { Button } from "@/components/ui/button";
import { AgricultureTaskCategories } from "@/data/skills/enums";
import useAgricultureActions from "../../hooks/useAgricultureActions";
// labelHelpers.ts

type LabelSet = {
  collectAll: string;
  speedAll: string;
  assignAll: string;
  removeAll: string;
};

export function getAgricultureLabels(
  taskCategory: AgricultureTaskCategories,
): LabelSet {
  if (taskCategory === AgricultureTaskCategories.BOTANY) {
    return {
      collectAll: "Harvest All",
      speedAll: "Fertilize All",
      assignAll: "Plant All",
      removeAll: "Uproot All",
    };
  } else {
    // If it's ranching or you have other categories
    return {
      collectAll: "Collect All",
      speedAll: "Growth Elixer All",
      assignAll: "Pasture All",
      removeAll: "Release All",
    };
  }
}
export default function ActionCard({
  taskCategory,
}: {
  taskCategory: AgricultureTaskCategories;
}) {
  const { collectAll, removeAll } = useAgricultureActions();
  const labels = getAgricultureLabels(taskCategory);

  return (
    <div className="flex w-full items-center py-2">
      <Button className="h-full w-1/4" onClick={() => collectAll(taskCategory)}>
        {labels.collectAll}
      </Button>

      <Button className="h-full w-1/4">{labels.speedAll}</Button>

      <Button className="h-full w-1/4">{labels.assignAll}</Button>

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

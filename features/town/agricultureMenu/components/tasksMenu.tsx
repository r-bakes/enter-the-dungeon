import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { agriculture } from "@/data/skills/agriculture";
import { formatCapitalCase } from "@/features/common/utils/formattingUtilities";
import React from "react";
import PasturesMenu from "./pasturesMenu/pasturesMenu";
import PlotsMenu from "./plotsMenu/plotsMenu";
import ActionCard from "./actionCard/actionCard";
import { AgricultureTaskCategories } from "@/data/skills/enums";

export default function TasksMenu() {
  const [selectedTasksCategory, setSelectedTasksCategory] = React.useState(
    Object.values(agriculture.taskCategories)[0],
  );

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <Select
        onValueChange={(value) => setSelectedTasksCategory(value)}
        defaultValue={Object.values(agriculture.taskCategories)[0]}
      >
        <SelectTrigger className="text-muted-foreground w-full font-normal">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(agriculture.taskCategories).map(
              ([categoryId, category]) => (
                <SelectItem
                  className="text-muted-foreground font-normal"
                  key={categoryId + "-select-item"}
                  value={category}
                >
                  {formatCapitalCase(category)}
                </SelectItem>
              ),
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <ActionCard
        taskCategory={selectedTasksCategory as AgricultureTaskCategories}
      ></ActionCard>
      {selectedTasksCategory == agriculture.taskCategories.BOTANY ? (
        <PlotsMenu></PlotsMenu>
      ) : (
        <PasturesMenu></PasturesMenu>
      )}
    </div>
  );
}

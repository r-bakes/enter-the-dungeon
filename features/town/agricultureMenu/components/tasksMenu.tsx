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
        <SelectTrigger className="w-full font-normal text-muted-foreground">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(agriculture.taskCategories).map(
              ([categoryId, category]) => (
                <SelectItem
                  className="font-normal text-muted-foreground"
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
      {selectedTasksCategory == agriculture.taskCategories.BOTANY ? (
        <PlotsMenu></PlotsMenu>
      ) : (
        <PasturesMenu></PasturesMenu>
      )}
    </div>
  );
}

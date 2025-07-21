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
import ContainerMenu from "./containerMenu/containerMenu";
import ActionCard from "./actionCard/actionCard";
import { AgricultureTaskCategories } from "@/data/skills/enums";

export default function TasksMenu() {
  const [selectedTasksCategory, setSelectedTasksCategory] = React.useState(
    Object.values(agriculture.taskCategories)[0],
  );

  return (
    <div className="flex h-full w-full flex-col gap-2 lg:gap-2">
      <Select
        onValueChange={(value) => setSelectedTasksCategory(value)}
        defaultValue={Object.values(agriculture.taskCategories)[0]}
      >
        <SelectTrigger className="text-muted-foreground mx-auto w-full font-normal lg:mx-0">
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
      <div className="flex w-full flex-col gap-2 overflow-y-auto lg:gap-2">
        <ActionCard
          taskCategory={selectedTasksCategory as AgricultureTaskCategories}
        />
        <ContainerMenu
          taskCategory={selectedTasksCategory as AgricultureTaskCategories}
        />
      </div>
    </div>
  );
}

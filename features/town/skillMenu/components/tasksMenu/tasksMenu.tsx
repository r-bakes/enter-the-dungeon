import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { formatCapitalCase } from "@/features/common/utils/formattingUtilities";
import TasksContainer from "@/features/town/skillMenu/components/tasksMenu/tasksContainer";
import { Skill } from "@/types/skills";
import { Task } from "@/types/tasks";

export default function TasksMenu({
  skill,
  tasks,
  skillLevel,
  setTask,
}: Readonly<{
  skill: Skill;
  tasks: Task[];
  skillLevel: number;
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
}>) {
  const [selectedTasksCategory, setSelectedTasksCategory] = React.useState(
    Object.values(skill.taskCategories)[0],
  );

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <Select
        onValueChange={(value) => {
          setSelectedTasksCategory(value);
        }}
        defaultValue={Object.values(skill.taskCategories)[0]}
      >
        <SelectTrigger className="text-muted-foreground w-full font-normal">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(skill.taskCategories).map(
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
      <TasksContainer
        skillLevel={skillLevel}
        tasks={tasks.filter((task) => task.category === selectedTasksCategory)}
        setTask={setTask}
      ></TasksContainer>
    </div>
  );
}

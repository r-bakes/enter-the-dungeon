import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skill, Tasks, Task } from "@/data/skills/skills";
import React from "react";
import TasksContainer from "./tasksContainer";
import { formatCapitalCase } from "@/engine/utils/formattingUtilities";

export default function TasksMenu({
  skill,
  tasks,
  skillLevel,
  setTask,
}: Readonly<{
  skill: Skill;
  tasks: Tasks;
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
        <SelectTrigger className="w-full font-normal text-muted-foreground">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(skill.taskCategories).map(
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
      <TasksContainer
        skill={skill}
        skillLevel={skillLevel}
        tasks={Object.values(tasks).filter(
          (task) => task.category === selectedTasksCategory,
        )}
        setTask={setTask}
      ></TasksContainer>
    </div>
  );
}

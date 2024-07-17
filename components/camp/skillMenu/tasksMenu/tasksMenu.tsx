import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SkillTasks, Task } from "@/data/skills/skills";
import React from "react";
import TasksContainer from "./tasksContainer";

const formatCapitalCase = (data: string): string => {
  return data
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function TasksMenu({
  tasks,
  skillLevel,
  setTask,
}: Readonly<{
  tasks: SkillTasks;
  skillLevel: number;
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
}>) {
  const [selectedTasksGroup, setSelectedTasks] = React.useState(
    Object.values(tasks)[0],
  );

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <Select
        onValueChange={(value) => {
          setSelectedTasks(tasks[value]);
        }}
        defaultValue={Object.keys(tasks)[0]}
      >
        <SelectTrigger className="w-full">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.keys(tasks).map((category) => (
              <SelectItem key={category + "-select-item"} value={category}>
                {formatCapitalCase(category)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <TasksContainer
        skillLevel={skillLevel}
        tasks={selectedTasksGroup}
        setTask={setTask}
      ></TasksContainer>
    </div>
  );
}

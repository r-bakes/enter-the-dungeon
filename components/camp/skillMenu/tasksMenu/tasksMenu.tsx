import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skill, SkillTasks, Task } from "@/data/skills/skills";
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
  tasks: SkillTasks;
  skillLevel: number;
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
}>) {
  const [selectedTasksGroup, setSelectedTasksGroup] = React.useState(
    Object.values(tasks)[0],
  );

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <Select
        onValueChange={(value) => {
          setSelectedTasksGroup(tasks[value]);
        }}
        defaultValue={Object.keys(tasks)[0]}
      >
        <SelectTrigger className="w-full font-normal text-muted-foreground">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.keys(tasks).map((category) => (
              <SelectItem
                className="font-normal text-muted-foreground"
                key={category + "-select-item"}
                value={category}
              >
                {formatCapitalCase(category)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <TasksContainer
        skill={skill}
        skillLevel={skillLevel}
        tasks={selectedTasksGroup}
        setTask={setTask}
      ></TasksContainer>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useTownEngineContext } from "@/engines/townEngineContext";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Skill, Task } from "@/types/skills";
import { SkillHeader } from "@/features/town/skillMenu/skillHeader/skillHeader";
import TaskInfo from "@/features/town/skillMenu/taskInfo/taskInfo";
import TasksMenu from "@/features/town/skillMenu/tasksMenu/tasksMenu";

export default function SkillMenu({ skill }: Readonly<{ skill: Skill }>) {
  const { character } = useCharacterEngineContext();
  const { workingTask } = useTownEngineContext();
  const [task, setTask] = useState<Task | null>(
    workingTask != null && Object.values(skill.tasks).includes(workingTask)
      ? workingTask
      : null,
  );

  return (
    <div className="flex h-full w-full flex-col gap-6 overflow-y-scroll px-8">
      <SkillHeader
        skill={skill}
        skillLevel={character.skills[skill.id].level}
        skillExperience={character.skills[skill.id].experience}
      ></SkillHeader>
      <div className="flex h-[calc(100%-184px)] w-full gap-6">
        <TaskInfo task={task} skill={skill}></TaskInfo>
        <TasksMenu
          skill={skill}
          tasks={skill.tasks}
          skillLevel={character.skills[skill.id].level}
          setTask={setTask}
        ></TasksMenu>
        <div className="w-0 border-4 shadow-sm"></div>
      </div>
    </div>
  );
}

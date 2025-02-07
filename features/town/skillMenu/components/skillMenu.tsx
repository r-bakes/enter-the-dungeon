"use client";

import { useState } from "react";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { SkillHeader } from "@/features/town/skillMenu/components/skillHeader/skillHeader";
import TaskInfo from "@/features/town/skillMenu/components/taskInfo/taskInfo";
import TasksMenu from "@/features/town/skillMenu/components/tasksMenu/tasksMenu";
import VerticalAccent from "../../../../components/verticalAccent";
import { Skill } from "@/types/skills";
import { useWorkingEngineContext } from "@/engines/workingEngineContext";
import { Task } from "@/types/tasks";

export default function SkillMenu({ skill }: Readonly<{ skill: Skill }>) {
  const { character } = useCharacterEngineContext();
  const { workingTask } = useWorkingEngineContext();
  const [task, setTask] = useState<Task | null>(
    workingTask != null && Object.values(skill.tasks).includes(workingTask)
      ? workingTask
      : null,
  );

  return (
    <div className="flex h-screen w-full flex-col gap-6 overflow-y-scroll px-8">
      <SkillHeader
        skill={skill}
        skillLevel={character.skills[skill.id].level}
        skillExperience={character.skills[skill.id].experience}
      ></SkillHeader>
      <div className="flex h-[calc(100%-184px)] w-full gap-6">
        <TaskInfo task={task}></TaskInfo>
        <TasksMenu
          skill={skill}
          tasks={Object.values(skill.tasks)}
          skillLevel={character.skills[skill.id].level}
          setTask={setTask}
        ></TasksMenu>
        <VerticalAccent></VerticalAccent>
      </div>
    </div>
  );
}

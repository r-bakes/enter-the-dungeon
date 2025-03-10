"use client";
import { useState } from "react";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { SkillHeader } from "./skillHeader/skillHeader";
import TaskInfo from "./taskInfo/taskInfo";
import TasksMenu from "./tasksMenu/tasksMenu";
import VerticalAccent from "@/components/verticalAccent";
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
    <div className="flex h-full w-full flex-col gap-6 px-8">
      <SkillHeader
        skill={skill}
        skillLevel={character.skills[skill.id].level}
        skillExperience={character.skills[skill.id].experience}
      />
      <div className="flex min-h-0 w-full grow gap-6">
        <TaskInfo task={task} />
        <TasksMenu
          skill={skill}
          tasks={Object.values(skill.tasks)}
          skillLevel={character.skills[skill.id].level}
          setTask={setTask}
        />
        <VerticalAccent />
      </div>
    </div>
  );
}

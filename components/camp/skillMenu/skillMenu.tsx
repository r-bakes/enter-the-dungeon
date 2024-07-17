"use client";

import { useState } from "react";
import { useCampEngineContext } from "@/engine/campEngineContext";
import { getAllTasks } from "@/data/gameObject";
import { Skill, Task } from "@/data/skills/skills";
import TaskInfo from "./taskInfo/taskInfo";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { SkillHeader } from "./skillHeader/skillHeader";
import TasksMenu from "./tasksMenu/tasksMenu";

export default function SkillMenu({ skill }: Readonly<{ skill: Skill }>) {
  const { character } = useCharacterEngineContext();
  const { workingTask } = useCampEngineContext();
  const [task, setTask] = useState<Task | null>(
    workingTask != null && getAllTasks(skill.tasks).includes(workingTask)
      ? workingTask
      : null,
  );

  return (
    <div className="flex h-full w-full flex-col overflow-y-scroll px-8">
      <SkillHeader
        skill={skill}
        skillLevel={character.skills[skill.id].level}
        skillExperience={character.skills[skill.id].experience}
      ></SkillHeader>
      <div className="flex h-[calc(100%-160px)] w-full grow gap-6 pt-6">
        <TaskInfo task={task} skill={skill}></TaskInfo>
        <TasksMenu
          tasks={skill.tasks}
          skillLevel={character.skills[skill.id].level}
          setTask={setTask}
        ></TasksMenu>
      </div>
    </div>
  );
}

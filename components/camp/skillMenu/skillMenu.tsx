"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { LEVEL_CAP } from "@/data/configurations";
import { requiredExpForLevelUp } from "@/engine/utils/charaterStateUtilities";
import { useState } from "react";
import { useCampEngineContext } from "@/engine/campEngineContext";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getAllTasks } from "@/data/gameObject";
import { Skill } from "@/data/skills/skills";
import { Task } from "@/data/skills/skills";
import TaskInfo from "./taskInfo";
import TaskContainer from "./taskContainer";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";

export default function SkillMenu({ skill }: { skill: Skill }) {
  const { character } = useCharacterEngineContext();
  const { workingTask } = useCampEngineContext();
  const [task, setTask] = useState<Task | null>(
    workingTask != null && getAllTasks(skill.tasks).includes(workingTask)
      ? workingTask
      : null
  );
  let expGainedAtLevel =
    character.skills[skill.id].experience -
    requiredExpForLevelUp(character.skills[skill.id].level - 1);
  let expRemainingForLevelUp =
    requiredExpForLevelUp(character.skills[skill.id].level) -
    requiredExpForLevelUp(character.skills[skill.id].level - 1);

  return (
    <div className="flex flex-col px-8 h-full w-full min-w-max">
      <Card className="flex flex-col w-full h-60 p-6">
        <div className="w-full">
          <CardHeader className="flex flex-row">
            <div className="w-[56px] h-[56px]">
              <skill.icon size={56} strokeWidth={1.5}></skill.icon>
            </div>
            <div className="flex pl-6 flex-col w-[400px]">
              <CardTitle>{skill.name}</CardTitle>
              <CardDescription>{skill.description}</CardDescription>
            </div>
            <div className="flex pl-6 flex-col w-[150px]">
              <CardTitle>
                {character.skills[skill.id].level} / {LEVEL_CAP}
              </CardTitle>
              <CardDescription>Level</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col grow">
              <Label className="pb-2 text-lg">Experience</Label>
              <Progress
                className="w-full h-4 rounded-sm"
                value={(expGainedAtLevel / expRemainingForLevelUp) * 100}
              ></Progress>
              <CardDescription className="mt-2">
                {character.skills[skill.id].experience +
                  " / " +
                  requiredExpForLevelUp(character.skills[skill.id].level)}
              </CardDescription>
            </div>
          </CardContent>
        </div>
      </Card>
      <div className="flex w-full pt-6 space-x-6 h-full overflow-hidden">
        <div className="flex flex-shrink-0 w-[450px] h-full min-w-[400px]">
          <TaskInfo task={task} skill={skill}></TaskInfo>
        </div>
        <ScrollArea className="flex h-full w-full overflow-hidden pr-4">
          <div className="flex flex-col space-y-4 w-full h-full">
            {Object.entries(skill.tasks).map(([category, tasks]) => (
              <div
                className="flex flex-col space-y-2 overflow-hidden w-full"
                key={category}
              >
                <Label className="text-xl text-muted-foreground font-extralight">
                  {category.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </Label>
                <TaskContainer
                  skillLevel={character.skills[skill.id].level}
                  tasks={tasks}
                  setTask={setTask}
                ></TaskContainer>
              </div>
            ))}
          </div>
          <ScrollBar orientation="vertical"></ScrollBar>
        </ScrollArea>
      </div>
    </div>
  );
}

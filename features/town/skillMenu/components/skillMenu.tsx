"use client";
import { useState, useEffect, useRef } from "react";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { SkillHeader } from "./skillHeader/skillHeader";
import TaskInfo from "./taskInfo/taskInfo";
import TasksMenu from "./tasksMenu/tasksMenu";
import VerticalAccent from "@/components/verticalAccent";
import { Skill } from "@/types/skills";
import { useWorkingEngineContext } from "@/engines/workingEngineContext";
import { Task } from "@/types/tasks";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, X, Info } from "lucide-react";
import { useModifierActions } from "@/features/town/modifiers/hooks/useModifierActions";
import { useModifierEngineContext } from "@/engines/modifierEngineContext";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SkillMenu({ skill }: Readonly<{ skill: Skill }>) {
  const { character } = useCharacterEngineContext();
  const { setWorkingTask, workingTask, taskWorkingLocked, taskProgress } =
    useWorkingEngineContext();
  const { applySpeedModifier } = useModifierActions();
  const { hasItems } = useInventoryActions();
  const [task, setTask] = useState<Task | null>(
    workingTask != null && Object.values(skill.tasks).includes(workingTask)
      ? workingTask
      : null,
  );
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controlBarRef = useRef<HTMLDivElement>(null);

  const requirementsMet = task ? hasItems(task.requires) : false;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const controlBarElement = controlBarRef.current;

      if (controlBarElement) {
        // Get the position of the control bar relative to the scroll container
        const controlBarRect = controlBarElement.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const controlBarTop =
          controlBarRect.top - containerRect.top + scrollTop;

        // Make sticky when control bar would scroll out of view
        setIsSticky(scrollTop > controlBarTop);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      {/* Mobile: Sticky control bar when scrolled */}
      {isSticky && (
        <div className="fixed top-0 right-4 left-20 z-40 lg:hidden">
          <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 flex flex-col gap-2 border-b p-3 shadow-lg backdrop-blur">
            {/* Progress bar */}
            <div className="w-full">
              <Progress
                className="h-1.5 w-full"
                value={
                  task && task === workingTask
                    ? (taskProgress / applySpeedModifier(task.id)) * 100
                    : 0
                }
              />
            </div>

            {/* Control buttons */}
            <div className="flex gap-2">
              <Button
                className="h-10 flex-1"
                disabled={!task || !requirementsMet || taskWorkingLocked}
                onClick={() => {
                  if (task) setWorkingTask(task);
                }}
              >
                <Play className="mr-2 h-4 w-4"></Play>Start
              </Button>
              <Button
                className="h-10 flex-1"
                variant={
                  task && task == workingTask ? "destructive" : "secondary"
                }
                disabled={!task || task != workingTask}
                onClick={() => {
                  setWorkingTask(null);
                }}
              >
                <X className="mr-2 h-4 w-4"></X>Stop
              </Button>

              {/* Details sheet trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 shrink-0"
                    disabled={!task}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[400px] pb-24 sm:w-[540px]"
                >
                  <SheetHeader>
                    <SheetTitle className="sr-only">Task Details</SheetTitle>
                  </SheetHeader>
                  <div className="h-full overflow-y-auto pb-4">
                    <TaskInfo task={task} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      )}

      {/* Scrollable content */}
      <div
        ref={scrollContainerRef}
        className="flex h-full w-full flex-col gap-4 overflow-y-auto px-4 md:gap-6 md:px-8"
      >
        <SkillHeader
          skill={skill}
          skillLevel={character.skills[skill.id].level}
          skillExperience={character.skills[skill.id].experience}
        />

        {/* Mobile: Control bar under SkillHeader - always present */}
        <div className="lg:hidden">
          <div
            ref={controlBarRef}
            className="bg-background/95 supports-[backdrop-filter]:bg-background/60 flex flex-col gap-2 border p-3 shadow-lg backdrop-blur"
          >
            {/* Progress bar */}
            <div className="w-full">
              <Progress
                className="h-1.5 w-full"
                value={
                  task && task === workingTask
                    ? (taskProgress / applySpeedModifier(task.id)) * 100
                    : 0
                }
              />
            </div>

            {/* Control buttons */}
            <div className="flex gap-2">
              <Button
                className="h-10 flex-1"
                disabled={!task || !requirementsMet || taskWorkingLocked}
                onClick={() => {
                  if (task) setWorkingTask(task);
                }}
              >
                <Play className="mr-2 h-4 w-4"></Play>Start
              </Button>
              <Button
                className="h-10 flex-1"
                variant={
                  task && task == workingTask ? "destructive" : "secondary"
                }
                disabled={!task || task != workingTask}
                onClick={() => {
                  setWorkingTask(null);
                }}
              >
                <X className="mr-2 h-4 w-4"></X>Stop
              </Button>

              {/* Details sheet trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 shrink-0"
                    disabled={!task}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[400px] pb-24 sm:w-[540px]"
                >
                  <SheetHeader>
                    <SheetTitle className="sr-only">Task Details</SheetTitle>
                  </SheetHeader>
                  <div className="h-full overflow-y-auto pb-4">
                    <TaskInfo task={task} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 w-full grow flex-col gap-4 md:gap-6 lg:flex-row">
          {/* Mobile: Only TasksMenu */}
          <div className="flex flex-col lg:hidden">
            <TasksMenu
              skill={skill}
              tasks={Object.values(skill.tasks)}
              skillLevel={character.skills[skill.id].level}
              setTask={setTask}
            />
          </div>

          {/* Desktop: Original order */}
          <div className="hidden min-h-0 w-full grow gap-6 lg:flex">
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
      </div>
    </div>
  );
}

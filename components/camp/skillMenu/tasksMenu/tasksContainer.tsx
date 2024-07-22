import TaskButton from "./taskButton";
import LockedTaskButton from "./lockedTaskButton";
import { Skill, Task } from "@/data/skills/skills";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function TasksContainer({
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
  return (
    <ScrollArea>
      <div className="flex w-full flex-col gap-2">
        {tasks.map((task) =>
          skillLevel >= task.requiredLevel ? (
            <TaskButton
              skill={skill}
              task={task}
              key={task.name}
              onClick={() => setTask(task)}
            ></TaskButton>
          ) : (
            <LockedTaskButton task={task} key={task.name}></LockedTaskButton>
          ),
        )}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}

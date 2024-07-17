import TaskButton from "./taskButton";
import LockedTaskButton from "./lockedTaskButton";
import { Task } from "@/data/skills/skills";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function TasksContainer({
  skillLevel,
  tasks,
  setTask,
}: Readonly<{
  skillLevel: number;
  tasks: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
}>) {
  return (
    <ScrollArea>
      <div className="flex flex-col w-full gap-2">
        {tasks.map((task) =>
          skillLevel >= task.requiredLevel ? (
            <TaskButton
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

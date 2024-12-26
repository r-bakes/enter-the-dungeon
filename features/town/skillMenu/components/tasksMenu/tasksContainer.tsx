import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import LockedTaskButton from "@/features/town/skillMenu/components/tasksMenu/lockedTaskButton";
import TaskButton from "@/features/town/skillMenu/components/tasksMenu/taskButton";
import { Task } from "@/types/tasks";

export default function TasksContainer({
  tasks,
  skillLevel,
  setTask,
}: Readonly<{
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
              task={task}
              key={task.name}
              onClick={() => setTask(task)}
            ></TaskButton>
          ) : (
            <LockedTaskButton
              requiredLevel={task.requiredLevel}
              key={task.name}
            ></LockedTaskButton>
          ),
        )}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}

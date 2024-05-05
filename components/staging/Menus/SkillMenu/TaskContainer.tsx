import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TaskButton from "./TaskButton";
import LockedTaskButton from "./LockedTaskButton";
import { Task } from "@/game/data/GameObject";

export default function TaskContainer({
  skillLevel,
  tasks,
  setTask,
}: {
  skillLevel: number;
  tasks: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
}) {
  return (
    <ScrollArea className="flex h-full w-80 min-w-full">
      <div className="flex w-full mb-4 space-x-4">
        {tasks.map((task) =>
          skillLevel >= task.requiredLevel ? (
            <TaskButton
              task={task}
              key={task.name}
              onClick={() => setTask(task)}
            ></TaskButton>
          ) : (
            <LockedTaskButton task={task} key={task.name}></LockedTaskButton>
          )
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

import LockedTaskButton from "@/features/town/skillMenu/components/tasksMenu/lockedTaskButton";
import TaskButton from "@/features/town/skillMenu/components/tasksMenu/taskButton";
import { Task } from "@/types/tasks";

export default function TasksContainer({
  tasks,
  skillLevel,
  setTask,
  selectedTask,
}: Readonly<{
  tasks: Task[];
  skillLevel: number;
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
  selectedTask: Task | null;
}>) {
  return (
    <div className="flex w-full flex-col gap-1 md:gap-2 overflow-y-auto">
      {tasks.map((task) =>
        skillLevel >= task.requiredLevel ? (
          <TaskButton
            task={task}
            key={task.name}
            onClick={() => setTask(task)}
            isSelected={selectedTask?.id === task.id}
          ></TaskButton>
        ) : (
          <LockedTaskButton
            requiredLevel={task.requiredLevel}
            key={task.name}
          ></LockedTaskButton>
        ),
      )}
    </div>
  );
}

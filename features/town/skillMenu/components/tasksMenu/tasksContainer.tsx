import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import LockedTaskButton from "@/features/town/skillMenu/components/tasksMenu/lockedTaskButton";
import TaskButton from "@/features/town/skillMenu/components/tasksMenu/taskButton";
import { Task } from "@/types/skills";
import { Skill } from "@/types/Skill";

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

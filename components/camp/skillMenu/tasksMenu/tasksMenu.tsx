import { SkillTasks, Task } from "@/data/skills/skills";
import TasksContainer from "./tasksContainer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const formatCapitalCase = (data: string): string => {
  return data
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function TasksMenu({
  tasks,
  skillLevel,
  setTask,
}: Readonly<{
  tasks: SkillTasks;
  skillLevel: number;
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
}>) {
  return (
    <Tabs
      className="flex flex-col h-full w-full"
      defaultValue={Object.keys(tasks)[0]}
    >
      <TabsList
        className={"grid w-full grid-cols-" + Object.keys(tasks).length}
      >
        {Object.keys(tasks).map((category) => (
          <TabsTrigger className="w-full" key={category + "-trigger"} value={category}>
            {formatCapitalCase(category)}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(tasks).map(([category, tasks]) => (
        <TabsContent
          className="w-full pt-2"
          key={category + "-content"}
          value={category}
        >
          <TasksContainer
            skillLevel={skillLevel}
            tasks={tasks}
            setTask={setTask}
          ></TasksContainer>
        </TabsContent>
      ))}
    </Tabs>
  );
}

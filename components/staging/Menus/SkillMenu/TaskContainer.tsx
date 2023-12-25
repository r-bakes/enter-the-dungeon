import TaskButton from "./TaskButton"
import { Task } from "@/game/data/skills/Skills"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function TaskContainer({
    tasks: activities,
    setTask,
} : {
    tasks: Task[],
    setTask: React.Dispatch<React.SetStateAction<Task | null>>
}) {
    return (
        <ScrollArea className="w-full overflow-hidden">
            <div className="flex mb-4">
                {activities.map(activity => <TaskButton task={activity} key={activity.name} onClick={() => setTask(activity)}></TaskButton>)}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
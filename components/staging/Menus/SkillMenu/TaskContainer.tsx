import { ScrollArea } from "@radix-ui/react-scroll-area"
import TaskButton from "./TaskButton"
import { Task } from "@/game/data/skills/Skills"

export default function TaskContainer({
    tasks: activities,
    setTask,
} : {
    tasks: Task[],
    setTask: React.Dispatch<React.SetStateAction<Task | null>>
}) {
    return (
        <ScrollArea className="w-full">
            <div className="flex flex-row">
                {activities.map(activity => <TaskButton activity={activity} key={activity.name} onClick={() => setTask(activity)}></TaskButton>)}
            </div>
        </ScrollArea>
    )
}
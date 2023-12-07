import { TrainingActivity } from "@/game/data/MenuData"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import TrainingButton from "./TrainingButton"

export default function ActivityContainer({
    activities
} : {
    activities: Array<TrainingActivity> 
}) {
    return (
        <ScrollArea className="h-full w-full pt-6">
            <div className="flex flex-row">
                {activities.map(activity => <TrainingButton activity={activity} key={activity.name}></TrainingButton>)}
            </div>
        </ScrollArea>
    )
}
import { TrainingActivity } from "@/game/data/GameData"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import TrainingButton from "./TrainingButton"

export default function ActivityContainer({
    activities
} : {
    activities: Array<TrainingActivity> 
}) {
    return (
        <ScrollArea className="flex flex-col h-full w-full">
            {activities.map(activity => <TrainingButton activity={activity}></TrainingButton>)}
        </ScrollArea>
    )
}
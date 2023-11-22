import { TrainingActivity } from "@/game/data/GameData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

export default function TrainingButton({
    activity    
} : {
    activity: TrainingActivity
}) {

    return (
        <Card className="flex w-full h-32">
            <Button className={"flex justify-start w-full h-full"}  variant="ghost">
                <div className="flex flex-col align-middle h-full">
                    <activity.icon size={64} strokeWidth={1}></activity.icon>
                </div>
                <div className="flex flex-col h-full">
                    <CardHeader className="flex flex-row">
                        <div className="flex px-6 flex-col">
                            <CardTitle>{activity.name}</CardTitle>
                            <CardDescription className="flex flex-col">
                                <Label>{activity.duration + " s"}</Label>
                                <Label>{activity.experience + " xp"} </Label>
                            </CardDescription>
                        </div>
                    </CardHeader>
                </div>
            </Button>
        </Card>
)
    
}
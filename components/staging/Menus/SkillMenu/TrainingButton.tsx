import { TrainingActivity } from "@/game/data/MenuData";
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
        <Card className="flex h-36 w-72">
            <Button className={"flex flex-row justify-start w-full h-full"}  variant="ghost">
                <CardHeader className="p-0 space-y-0 flex flex-row items-center">
                    <div className="w-[52px] h-[52px]">
                        <activity.icon size={52} strokeWidth={1}></activity.icon>
                    </div>
                    <div className="flex px-6 flex-col text-left mt-0">
                        <CardTitle className="text-xl">{activity.name}</CardTitle>
                        <CardDescription className="text-xs">{activity.description}</CardDescription>
                        <CardFooter className="items-start text-left p-0 pt-2">
                            <Label className="text-xs pr-8 text-gray-800">{activity.duration + " sec"}</Label>
                            <Label className="text-xs text-gray-800">{activity.experience + " xp"} </Label>
                        </CardFooter>
                    </div>
                </CardHeader>
            </Button>
        </Card>
)
    
}
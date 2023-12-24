import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TrainingActivity } from "@/game/data/skills/Skills";

export default function TaskButton({
    activity,
    onClick,
} : {
    activity: TrainingActivity,
    onClick: React.Dispatch<React.SetStateAction<any>>
}) {

    return (
        <Card className="flex w-56 mr-4">
            <Button className={"flex flex-col  w-full h-full items-start justify-start p-4"} onClick={onClick} variant="ghost">
                <CardHeader className="flex flex-col p-0">
                    <div className="flex flex-row w-full h-full">
                        <div className="w-[30px] h-[30px]">
                            <activity.icon size={30} strokeWidth={1.4}></activity.icon>
                        </div>
                        <div className="flex pl-3 flex-col text-left">
                            <CardTitle className="text-xl">{activity.name}</CardTitle>
                        </div>
                    </div>
                    <CardDescription className="text-xs text-left">{activity.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col text-left p-0 pt-2 w-full">
                    <div className="flex w-full">
                        <div className="w-1/4 text-left">
                            <Label className="text-xs text-gray-800 pointer-events-none">{activity.duration}</Label>
                        </div>
                        <div className="w-3/4 text-right">
                            <Label className="text-xs text-muted-foreground pointer-events-none">seconds</Label>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/4 text-left">
                            <Label className="text-xs text-gray-800 pointer-events-none">{activity.experience} </Label>
                        </div>
                        <div className="w-3/4 text-right">
                            <Label className="text-xs text-muted-foreground pointer-events-none">experience</Label>
                        </div>
                    </div>
                </CardContent>
            </Button>
        </Card>
)
    
}
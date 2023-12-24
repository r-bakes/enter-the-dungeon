import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress";
import { Skill, Task } from "@/game/data/skills/Skills"
import { Label } from "@radix-ui/react-label"
import { Play, X } from "lucide-react";
import { items } from "@/game/data/items/items";
import { useEngineContext } from "@/game/engine/EngineContext";

export default function TaskInfo({
    skill,
    task,
} : {
    skill: Skill | null
    task: Task | null
}) {
    const {setWorkingSkill, setWorkingTask, progress, workingTask} = useEngineContext();
    
    let content = null;
    if (!task) {
      content = (
        <div className="flex w-full h-full justify-center items-center">
            <Label className="flex text-2xl text-muted-foreground font-extralight h-10">Select a task</Label>
        </div>
      )  
    } else {
        let taskProduction = Object.entries(task.lootTable).map(([itemId, percentChance]) => ({item: items.itemById[itemId], chance: percentChance})) 
        content = (
            <div className="flex flex-col w-full h-full">
                <CardHeader className="flex flex-row">
                    <div className="w-[56px] h-[56px]">
                        <task.icon size={56} strokeWidth={1.5}></task.icon>
                    </div>
                    <div className="flex pl-6 flex-col">
                        <CardTitle>{task.name}</CardTitle>
                        <CardDescription>{task.description}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col w-full">
                        {task == workingTask ? 
                            <Progress className="w-full h-4 rounded-md" value={(progress / task.duration) * 100}></Progress> : 
                            <Progress className="w-full h-4 rounded-md"></Progress>
                        }
                        <CardDescription className="mt-2">Training Progress</CardDescription>
                    </div>
                    <div className="w-full mt-6 mb-2 border rounded-sm border-gray-700 border-b-[2px]"></div>
                    <div className="flex w-full py-2">
                        <div className="w-1/4 text-left">
                            <Label className="text-s  pointer-events-none">{task.duration}</Label>
                        </div>
                        <div className="w-full border-gray-800 mt-4 mb-2 border-dotted h-1 border-b-[2px]"></div>
                        <div className="w-3/4 text-right">
                            <Label className="text-s text-muted-foreground pointer-events-none">seconds</Label>
                        </div>
                    </div>
                    <div className="flex w-full py-2">
                        <div className="w-1/4 text-left">
                            <Label className="text-s  pointer-events-none">{task.experience} </Label>
                        </div>
                        <div className="w-full border-gray-800 mt-4 mb-2 border-dotted h-1 border-b-[2px]"></div>
                        <div className="w-3/4 text-right">
                            <Label className="text-s text-muted-foreground pointer-events-none">experience</Label>
                        </div>
                    </div>
                    <div className="flex w-full py-2">
                        <div className="flex w-full text-left">
                            {taskProduction.map(Item => (
                                <div className="flex flex-col text-center w-20 border rounded-sm items-center p-2 mr-2" key={Item.item.id}>
                                    <div className="w-[42px] h-[42px]">
                                        <Item.item.icon size={42} strokeWidth={1}></Item.item.icon>
                                    </div>
                                    <Label className="text-xs text-muted-foreground">{Item.item.name}</Label>
                                    <Label className="text-xs text-muted-foreground">{Item.chance}%</Label>
                                </div>))}
                        </div>
                        <div className="w-3/4 text-right">
                            <Label className="text-s text-muted-foreground pointer-events-none">produces</Label>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex w-full grow items-end">
                    <Button className="rounded-l-md rounded-r-none w-1/2 text-center" onClick={() => {setWorkingSkill(skill); setWorkingTask(task)}}>
                        <Play className="mr-2"></Play>Start
                    </Button>
                    {task == workingTask ?
                        <Button className="rounded-r-md rounded-l-none w-1/2 text-center" variant="destructive" onClick={() => {setWorkingSkill(null); setWorkingTask(null)}}>
                            <X className="mr-2"></X>Stop
                        </Button> :
                        <Button className="rounded-r-md rounded-l-none w-1/2 text-center" variant="secondary" disabled={true}>
                            <X className="mr-2"></X>Stop
                        </Button>
                        
                    }
                </CardFooter>
            </div>
        )
    }
    return (
        <Card className="flex flex-col w-full h-full p-6">
            {content}
        </Card>        
    )
}
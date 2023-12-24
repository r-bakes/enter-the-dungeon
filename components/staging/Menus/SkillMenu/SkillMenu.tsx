'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TaskContainer from "./TaskContainer"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Skill, Task } from "@/game/data/skills/Skills"
import { requiredExpForLevelUp } from "@/game/data/configurations/Configurations"
import TaskInfo from "./TaskInfo"
import { useState } from "react"
import { useEngineContext } from "@/game/engine/EngineContext"

export default function SkillMenu({
    skill
} : {
    skill: Skill
}) {
    const {character} = useEngineContext();
    const [task, setTask] = useState<null | Task>(null); 

    
    let expGainedAtLevel = character.skills.data[skill.id].experience - requiredExpForLevelUp(character.skills.data[skill.id].level - 1)
    let expRemainingForLevelUp = requiredExpForLevelUp(character.skills.data[skill.id].level) - requiredExpForLevelUp(character.skills.data[skill.id].level - 1)

    return (
        <div className="flex flex-col px-8 h-full grow min-w-[800px]">
                <Card className="flex flex-col w-full h-60 p-6">
                    <div className="w-full">
                        <CardHeader className="flex flex-row">
                            <div className="w-[56px] h-[56px]">
                                <skill.icon size={56} strokeWidth={1.5}></skill.icon>
                            </div>
                            <div className="flex pl-6 flex-col w-[400px]">
                                <CardTitle>{skill.name}</CardTitle>
                                <CardDescription>{skill.description}</CardDescription>
                            </div>
                            <div className="flex pl-6 flex-col w-[150px]">
                                <CardTitle>{character.skills.data[skill.id].level} / 99</CardTitle>
                                <CardDescription>Level</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col grow">
                                <Label className="pb-2 text-lg">Experience</Label>
                                <Progress className="w-full h-4 rounded-md" value={(expGainedAtLevel / expRemainingForLevelUp)*100} ></Progress>
                                <CardDescription className="mt-2">{character.skills.data[skill.id].experience + " / " + requiredExpForLevelUp(character.skills.data[skill.id].level)}</CardDescription>
                            </div>
                        </CardContent>
                    </div>
                </Card>
                <div className="flex pt-6 h-full">
                    <div className="flex w-2/6 h-full mr-3 min-w-[400px]">
                        <TaskInfo task={task} skill={skill}></TaskInfo>
                    </div>
                    <div className="flex flex-col w-4/6 h-full ml-3">
                        {
                            Object.entries(skill.tasks).map(([category, activities]) => (
                            <div key={category}>
                                <div className="pb-2 pt-4">
                                    <Label className="text-xl text-muted-foreground font-extralight">{category.charAt(0).toUpperCase() + category.slice(1)}</Label>
                                </div>     
                                <TaskContainer tasks={activities} setTask={setTask}></TaskContainer>
                            </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}
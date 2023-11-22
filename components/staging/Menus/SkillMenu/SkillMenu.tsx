'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillData } from "@/game/data/GameData"
import ActivityContainer from "./ActivityContainer"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"

export default function SkillMenu({
    skill
} : {
    skill: SkillData
}) {

    return (
        <div className="flex px-8 h-full grow">
            <div className="flex w-1/2 pr-2">
                <Card className="flex flex-col w-full h-80 p-6">
                    <CardHeader className="flex flex-row">
                        <skill.icon size={56} strokeWidth={1.5}></skill.icon>
                        <div className="flex px-6 flex-col">
                            <CardTitle>{skill.name}</CardTitle>
                            <CardDescription>{skill.description}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Label>{"[Training Activity]"}</Label>
                        <Progress className="w-full"></Progress>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex w-1/2 pl-2">
                <ActivityContainer activities={skill.trainingActivities}></ActivityContainer>
            </div>
        </div>
    )
}
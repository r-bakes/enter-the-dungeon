'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skill, skillToCharacterFields } from "@/game/data/MenuData"
import ActivityContainer from "./ActivityContainer"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { useCharacter } from "@/context/CharacterProvider"

export default function SkillMenu({
    skill
} : {
    skill: Skill
}) {
    const character = useCharacter();

    return (
        <div className="flex flex-col px-8 h-full grow">
                <Card className="flex flex-col w-full h-80 p-6">
                    <div className="w-[600px]">
                        <CardHeader className="flex flex-row">
                            <div className="w-[56px] h-[56px]">
                                <skill.icon size={56} strokeWidth={1.5}></skill.icon>
                            </div>
                            <div className="flex pl-6 flex-col w-[394px]">
                                <CardTitle>{skill.name}</CardTitle>
                                <CardDescription>{skill.description}</CardDescription>
                            </div>
                            <div className="flex pl-6 flex-col w-[150px]">
                                <CardTitle>{skillToCharacterFields(character, skill).level} / 99</CardTitle>
                                <CardDescription>Level</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="pt-4 pb-2">
                                <Label className="text-lg">{"[Training Activity]"}</Label>
                            </div>
                            <Progress className="w-full p-4"></Progress>
                        </CardContent>
                    </div>
                </Card>
                <ActivityContainer activities={skill.trainingActivities}></ActivityContainer>
        </div>
    )
}
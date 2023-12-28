import { Character } from "@/game/data/character/Character"
import { Item } from "@/game/data/items/items"
import { Skill, Task } from "@/game/data/skills/Skills"
import { Loot } from "@/game/engine/LootEngine"
import { Label } from "@radix-ui/react-label"
import { Backpack } from "lucide-react"

export default function TaskComplete({
    skill,
    task,
    loot,
    character,
}:{
    skill: Skill,
    task: Task,
    loot: Loot,
    character: Character
}) {

    const itemCard = (item: Item, amount: number) => {
        return (
            <div className="flex items-center w-max h-min border rounded-md p-2 space-x-2">
                <div className="flex w-min h-min">
                    <item.icon size={24} strokeWidth={1}></item.icon>
                </div>
                <div className="flex flex-col">
                    <Label className="text-sm text-muted-foreground shrink-1">{item.name}</Label>
                    <div className="flex items-center space-x-1">
                        <Label className="text-sm text-muted-foreground">+ {amount} ({character.inventory.items[item.id]})</Label>
                        <Backpack size={15} strokeWidth={1}></Backpack>
                    </div>
                </div>
            </div>
        )
    }

    return (
            <div className="flex w-full h-full flex-col space-y-3">
                <div className="flex space-x-2 items-end">
                    <div className="h-[24px] w-[24px]">
                        <task.icon size={24} strokeWidth={1}></task.icon>
                    </div>
                    <Label className="text-sm font-semibold">{task.name}</Label>
                    <Label className="text-sm text-muted-foreground"> + {task.experience} xp</Label>
                </div>
                <div className="flex space-x-2">
                    {loot.map(data => itemCard(data.item, data.amount))}
                </div>
            </div>
    )
}
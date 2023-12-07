import { Button } from "@/components/ui/button"
import { MenuData } from "@/game/data/MenuData"
import { Label } from "@radix-ui/react-label"
import { LucideIcon } from "lucide-react"

export default function MenuButton({
    menu,
    isSelected,
    onClick,
}:{
    menu: MenuData,
    isSelected: boolean,
    onClick: React.Dispatch<React.SetStateAction<any>>
}) {
    let extraFormat = isSelected ? " border-gray-800 font-normal bg-accent" : "font-light" 

    return (
            <Button className={"flex justify-start text-center pl-10 w-full h-10 rounded-none border-l-2 " + extraFormat} onClick={onClick}  variant="ghost">
                <menu.icon size={24} strokeWidth={1}></menu.icon>
                <Label className="pl-4 text-sm">{menu.name}</Label>       
            </Button>
    )
}
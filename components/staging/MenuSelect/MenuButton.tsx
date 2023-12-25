import { Button } from "@/components/ui/button"
import { Menu } from "@/game/data/menus/Menu"
import { Label } from "@radix-ui/react-label"

export default function MenuButton({
    menu,
    isSelected,
    level,
    onClick,
}:{
    menu: Menu,
    isSelected: boolean,
    level?: number,
    onClick: React.Dispatch<React.SetStateAction<any>>
}) {
    let extraFormat = isSelected ? " border-gray-800 font-normal bg-accent" : "font-light" 

    return (
            <Button className={"flex justify-start text-center pl-10 space-x-2 w-full h-10 rounded-none border-l-2 " + extraFormat} onClick={onClick}  variant="ghost">
                <menu.icon size={24} strokeWidth={1}></menu.icon>
                <Label className="text-sm">{menu.name}</Label>
                <div className="flex grow justify-end ">
                    {level ? <Label className="text-sm text-muted-foreground">({level} / 99)</Label> : <></>}
                </div>
            </Button>
    )
}
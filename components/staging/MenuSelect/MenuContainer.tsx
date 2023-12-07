import { ScrollArea } from "@radix-ui/react-scroll-area";
import { MenuData, Skill } from "@/game/data/MenuData";
import MenuButton from "./MenuButton";
import { Key } from "lucide-react";

export default function MenuContainer({
    menuItems,
    selectedMenu,
    setSelectedMenu,
}:{
    menuItems: Array<MenuData>
    selectedMenu: MenuData,
    setSelectedMenu: React.Dispatch<React.SetStateAction<MenuData>>
}) {

    return (
        <ScrollArea className="flex flex-col w-full">
            {menuItems.map(item => <MenuButton menu={item} isSelected={item.name === selectedMenu.name} key={item.name} onClick={() => setSelectedMenu(item)}></MenuButton>)}
        </ScrollArea>
    )
}
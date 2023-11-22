import { ScrollArea } from "@radix-ui/react-scroll-area";
import { MenuData, SkillData } from "@/game/data/GameData";
import MenuButton from "./MenuButton";

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
            {menuItems.map(item => <MenuButton menu={item} isSelected={item.name === selectedMenu.name} onClick={() => setSelectedMenu(item)}></MenuButton>)}
        </ScrollArea>
    )
}
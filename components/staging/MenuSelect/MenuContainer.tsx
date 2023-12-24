import { ScrollArea } from "@radix-ui/react-scroll-area";
import MenuButton from "./MenuButton";
import { Menu } from "@/game/data/menus/Menu";

export default function MenuContainer({
    menuItems,
    selectedMenu,
    setSelectedMenu,
}:{
    menuItems: Array<Menu>
    selectedMenu: Menu,
    setSelectedMenu: React.Dispatch<React.SetStateAction<Menu>>
}) {
    return (
        <ScrollArea className="flex flex-col w-full">
            {menuItems.map(item => <MenuButton menu={item} isSelected={item.name === selectedMenu.name} key={item.id} onClick={() => setSelectedMenu(item)}></MenuButton>)}
        </ScrollArea>
    )
}
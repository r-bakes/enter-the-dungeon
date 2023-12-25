import { ScrollArea } from "@radix-ui/react-scroll-area";
import MenuButton from "./MenuButton";
import { Menu, skillMenus } from "@/game/data/menus/Menu";
import { useEngineContext } from "@/game/engine/EngineContext";

export default function MenuContainer({
    menuItems,
    selectedMenu,
    setSelectedMenu,
}:{
    menuItems: Array<Menu>
    selectedMenu: Menu,
    setSelectedMenu: React.Dispatch<React.SetStateAction<Menu>>
}) {
    const { character } = useEngineContext();
    return (
        <ScrollArea className="flex flex-col w-full">
            {menuItems.map(item => {
                let level = (item.id in character.skills.data ? character.skills.data[item.id].level : undefined);
                return (<MenuButton level={level} menu={item} isSelected={item.name === selectedMenu.name} key={item.id} onClick={() => setSelectedMenu(item)}></MenuButton>)
            })}
        </ScrollArea>
    )
}
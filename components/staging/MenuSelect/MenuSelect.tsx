import Logo from "./Logo"
import MenuContainer from "./MenuContainer"
import { Label } from "@radix-ui/react-label"
import { Menu, combatMenus, miscMenus, skillMenus } from "@/game/data/menus/Menu"

export default function MenuSelect({
    selectedMenu,
    setSelectedMenu,
}: {
    selectedMenu: Menu,
    setSelectedMenu: React.Dispatch<React.SetStateAction<Menu>>
}) {
    return (
        <div className="flex flex-col w-64 h-full min-w-[256px]">
            <Logo></Logo>
            <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">Character</Label>
            <MenuContainer menuItems={miscMenus} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuContainer>
            <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">Combat</Label>
            <MenuContainer menuItems={combatMenus} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuContainer>
            <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">Skills</Label>
            <MenuContainer menuItems={skillMenus} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuContainer>
        </div>
    )
}
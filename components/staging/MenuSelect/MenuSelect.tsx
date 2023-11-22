import { Separator } from "@radix-ui/react-separator"
import Logo from "./Logo"
import MenuContainer from "./MenuContainer"
import { Label } from "@radix-ui/react-label"
import { MenuData, combatSkills, nonCombatSkills, playerData } from "@/game/data/GameData"

export default function MenuSelect({
    selectedMenu,
    setSelectedMenu,
}: {
    selectedMenu: MenuData,
    setSelectedMenu: React.Dispatch<React.SetStateAction<MenuData>>
}) {
    return (
        <div className="flex flex-col w-64 h-full">
            <Logo></Logo>
            <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">Character</Label>
            <MenuContainer menuItems={playerData} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuContainer>
            <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">Combat</Label>
            <MenuContainer menuItems={combatSkills} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuContainer>
            <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">Skills</Label>
            <MenuContainer menuItems={nonCombatSkills} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuContainer>
        </div>
    )
}
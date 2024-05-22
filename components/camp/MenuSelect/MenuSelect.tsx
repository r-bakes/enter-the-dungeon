import { GameObject } from "@/data/GameObject";
import Logo from "./Logo";
import MenuContainer from "./MenuContainer";
import { Label } from "@radix-ui/react-label";
import { bazaar } from "@/data/menus/Bazaar";
import { excursions } from "@/data/menus/Excursions";
import { inventory } from "@/data/menus/Inventory";
import { martial } from "@/data/skills/Martial";
import { magic } from "@/data/skills/Magic";
import { prospecting } from "@/data/skills/Prospecting";
import { smithing } from "@/data/skills/Smithing";

export default function MenuSelect({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: GameObject;
  setSelectedMenu: React.Dispatch<React.SetStateAction<GameObject>>;
}) {

  let miscMenus = [bazaar, excursions, inventory]
  let combatMenus = [martial, magic]
  let skillMenus = [prospecting, smithing]

  return (
    <div className="flex flex-col w-64 h-full min-w-[256px]">
      <Logo></Logo>
      <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">
        Character
      </Label>
      <MenuContainer
        menuItems={miscMenus}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      ></MenuContainer>
      <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">
        Combat
      </Label>
      <MenuContainer
        menuItems={combatMenus}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      ></MenuContainer>
      <Label className="text-xs text-muted-foreground pl-10 pt-4 pb-2 ">
        Skills
      </Label>
      <MenuContainer
        menuItems={skillMenus}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      ></MenuContainer>
    </div>
  );
}

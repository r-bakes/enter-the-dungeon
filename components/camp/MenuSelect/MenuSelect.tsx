import { GameObject } from "@/data/gameObject";
import Logo from "./logo";
import MenuContainer from "./menuContainer";
import { Label } from "@radix-ui/react-label";
import { bazaar } from "@/data/menus/bazaar";
import { excursions } from "@/data/menus/excursions";
import { inventory } from "@/data/menus/inventory";
import { martial } from "@/data/skills/martial";
import { magic } from "@/data/skills/magic";
import { prospecting } from "@/data/skills/prospecting";
import { smithing } from "@/data/skills/smithing";

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
    <div className="flex flex-col w-64 h-full shrink-0">
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

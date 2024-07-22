import { GameObject } from "@/data/gameObject";
import Logo from "./logo";
import MenuContainer from "./menuContainer";
import { Label } from "@radix-ui/react-label";
import { bazaar } from "@/data/menus/bazaar";
import { inventory } from "@/data/menus/inventory";
import { martial } from "@/data/skills/martial";
import { magic } from "@/data/skills/magic";
import { prospecting } from "@/data/skills/prospecting";
import { smithing } from "@/data/skills/smithing";
import { expeditions } from "@/data/menus/expeditions";
import { agility } from "@/data/skills/agility";
import { enchanting } from "@/data/skills/enchanting";
import { crafting } from "@/data/skills/crafting";
import { home } from "@/data/menus/home";

export default function MenuSelect({
  selectedMenu,
  setSelectedMenu,
}: Readonly<{
  selectedMenu: GameObject;
  setSelectedMenu: React.Dispatch<React.SetStateAction<GameObject>>;
}>) {
  let miscMenus = [home, inventory, bazaar];
  let combatMenus = [expeditions, martial, magic];
  let skillMenus = [prospecting, smithing, agility, crafting, enchanting];

  return (
    <div
      className={
        "flex h-full w-60 shrink-0 flex-col border-r saturate-[60%] bg-red-600 py-10 shadow-sm"
      }
    >
      <Logo></Logo>
      <Label className="px-5 pb-2 pt-4 text-xs text-muted-foreground text-white">
        Character
      </Label>
      <MenuContainer
        menuItems={miscMenus}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      ></MenuContainer>
      <Label className="px-5 pb-2 pt-4 text-xs text-muted-foreground text-white">
        Combat
      </Label>
      <MenuContainer
        menuItems={combatMenus}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      ></MenuContainer>
      <Label className="px-5 pb-2 pt-4 text-xs text-muted-foreground text-white">
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

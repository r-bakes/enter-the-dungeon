import { GameObject } from "@/types/gameObjects";
import { Label } from "@radix-ui/react-label";
import { ThemeToggle } from "@/components/themeToggle/themeToggle";
import Logo from "@/features/camp/menuSelect/logo";
import MenuContainer from "@/features/camp/menuSelect/menuContainer";

export default function MenuSelect({
  miscMenus,
  combatMenus,
  skillMenus,
  selectedMenu,
  setSelectedMenu,
}: Readonly<{
  miscMenus: GameObject[];
  combatMenus: GameObject[];
  skillMenus: GameObject[];
  selectedMenu: GameObject;
  setSelectedMenu: React.Dispatch<React.SetStateAction<GameObject>>;
}>) {
  return (
    <div
      className={
        "flex h-full w-60 shrink-0 flex-col border-r-4 bg-slate-800 pb-2 pt-10 shadow-sm"
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
      <div className="flex grow flex-col justify-end px-2">
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
}

import { GameObject } from "@/types/gameObjects";
import { Label } from "@radix-ui/react-label";
import { ThemeToggle } from "@/components/themeToggle/themeToggle";
import Logo from "@/features/town/menuSelect/logo";
import MenuContainer from "@/features/town/menuSelect/menuContainer";
import { Separator } from "@/components/ui/separator";
import { Exit } from "@/components/exit/exit";
import { SettingsButton } from "@/components/settingsButton/settingsButton";

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
      <div className="mt-4 flex w-full px-2">
        <SettingsButton></SettingsButton>
        <ThemeToggle></ThemeToggle>
        <Exit></Exit>
      </div>
      <div className="px-5">
        <Separator className="my-4"></Separator>
      </div>
      <div className="flex flex-col overflow-y-scroll">
        <Label className="px-5 pb-2 text-xs text-muted-foreground text-white">
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
      <div className="px-5">
        <Separator className="my-4"></Separator>
      </div>

      <div className="h-[180px] shrink-0"></div>
    </div>
  );
}

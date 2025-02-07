import { GameObject } from "@/types/gameObjects";
import { Label } from "@radix-ui/react-label";
import { ThemeToggle } from "@/features/common/themeToggle/themeToggle";
import Logo from "@/features/town/menuSelect/components/logo";
import MenuContainer from "@/features/town/menuSelect/components/menuContainer";
import { Separator } from "@/components/ui/separator";
import { Exit } from "@/features/common/exit/exit";
import { SettingsButton } from "@/features/common/settingsButton/settingsButton";
import { MenuId } from "@/data/menus/enums";
import { combatMenus, miscMenus, skillMenus } from "@/data/menus/menus";

export default function MenuSelect({}: Readonly<{}>) {
  return (
    <div
      className={
        "flex h-full w-60 shrink-0 flex-col border-r-4 bg-slate-800 pb-2 pt-10 shadow-xs"
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
          menuItems={Object.keys(miscMenus) as MenuId[]}
        ></MenuContainer>
        <Label className="px-5 pb-2 pt-4 text-xs text-muted-foreground text-white">
          Combat
        </Label>
        <MenuContainer
          menuItems={Object.keys(combatMenus) as MenuId[]}
        ></MenuContainer>
        <Label className="px-5 pb-2 pt-4 text-xs text-muted-foreground text-white">
          Skills
        </Label>
        <MenuContainer
          menuItems={Object.keys(skillMenus) as MenuId[]}
        ></MenuContainer>
        <div className="h-[220px] shrink-0"></div>
      </div>
    </div>
  );
}

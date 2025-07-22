import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/features/common/themeToggle/themeToggle";
import Logo from "@/features/town/menuSelect/components/logo";
import MenuContainer from "@/features/town/menuSelect/components/menuContainer";
import { Separator } from "@/components/ui/separator";
import { Exit } from "@/features/common/exit/exit";
import { SettingsButton } from "@/features/common/settingsButton/settingsButton";
import { MenuId } from "@/data/menus/enums";
import { combatMenus, miscMenus, skillMenus } from "@/data/menus/menus";

export default function MenuSelect({}: Readonly<{}>) {
  const [isMinimized, setIsMinimized] = useState(false);

  // Mobile: always narrow width with minimized content
  // Desktop: toggleable between narrow and wide
  const widthClasses = isMinimized ? "w-16" : "w-16 md:w-60";

  return (
    <div
      className={`flex h-full shrink-0 flex-col border-r-4 bg-slate-800 pt-10 pb-2 shadow-xs transition-all duration-300 ${widthClasses}`}
    >
      {/* Logo - hidden on mobile, conditional on desktop */}
      <div className="hidden lg:block">{!isMinimized && <Logo />}</div>

      {/* Action Buttons */}
      <div className="mt-4 flex w-full">
        {/* Mobile: Settings button only, full width */}
        <div className="flex w-full px-2 md:hidden">
          <SettingsButton />
        </div>

        {/* Desktop: Both buttons right-justified when not minimized */}
        <div
          className={`hidden w-full md:flex ${isMinimized ? "flex-col justify-center" : "justify-end gap-2 pr-2"}`}
        >
          <SettingsButton />
          <Button
            onClick={() => setIsMinimized(!isMinimized)}
            variant="ghost"
            size="sm"
            className={`h-10 w-8 p-0 text-white hover:bg-transparent ${isMinimized ? "hidden" : ""}`}
          >
            <ChevronLeft className="h-[1.2rem] w-[1.2rem]" color="white" />
          </Button>
          {isMinimized && (
            <Button
              onClick={() => setIsMinimized(!isMinimized)}
              variant="ghost"
              size="sm"
              className="h-10 w-full p-0 text-white hover:bg-slate-900"
            >
              <ChevronRight className="h-[1.2rem] w-[1.2rem]" color="white" />
            </Button>
          )}
        </div>
      </div>

      {/* Separator - hidden on mobile, conditional on desktop */}
      <div className="hidden md:block">
        <div className="px-5">
          <Separator className="my-4" />
        </div>
      </div>

      {/* Menu Content */}
      <div className="flex flex-col overflow-y-scroll">
        {/* Labels: hidden on mobile, conditional on desktop */}
        <div className="hidden md:block">
          {!isMinimized && (
            <Label className="px-5 pb-2 text-xs text-white">Character</Label>
          )}
        </div>

        {/* Mobile MenuContainers - always minimized */}
        <div className="md:hidden">
          <MenuContainer
            menuItems={Object.keys(miscMenus) as MenuId[]}
            isMinimized={true}
          />
          <div className="mx-auto my-2 h-px w-8 bg-slate-600"></div>
          <MenuContainer
            menuItems={Object.keys(combatMenus) as MenuId[]}
            isMinimized={true}
          />
          <div className="mx-auto my-2 h-px w-8 bg-slate-600"></div>
          <MenuContainer
            menuItems={Object.keys(skillMenus) as MenuId[]}
            isMinimized={true}
          />
        </div>

        {/* Desktop MenuContainers - conditional */}
        <div className="hidden md:block">
          <MenuContainer
            menuItems={Object.keys(miscMenus) as MenuId[]}
            isMinimized={isMinimized}
          />

          {isMinimized ? (
            <div className="mx-auto my-2 h-px w-8 bg-slate-600"></div>
          ) : (
            <Label className="px-5 pt-4 pb-2 text-xs text-white">Combat</Label>
          )}

          <MenuContainer
            menuItems={Object.keys(combatMenus) as MenuId[]}
            isMinimized={isMinimized}
          />

          {isMinimized ? (
            <div className="mx-auto my-2 h-px w-8 bg-slate-600"></div>
          ) : (
            <Label className="px-5 pt-4 pb-2 text-xs text-white">Skills</Label>
          )}

          <MenuContainer
            menuItems={Object.keys(skillMenus) as MenuId[]}
            isMinimized={isMinimized}
          />
        </div>
        <div className="h-[220px] shrink-0"></div>
      </div>
    </div>
  );
}

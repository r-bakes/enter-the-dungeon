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
import { DisableNotificationsToggle } from "@/features/common/disableNotificationsToggle/disableNotificationsToggle";

export default function MenuSelect({}: Readonly<{}>) {
  const [isMinimized, setIsMinimized] = useState(false);

  // Mobile: always narrow width with minimized content
  // Desktop: toggleable between narrow and wide
  const widthClasses = isMinimized ? "w-16" : "w-16 md:w-60";

  return (
    <div
      className={`flex h-full shrink-0 flex-col border-r-4 bg-slate-800 pt-10 pb-2 shadow-xs transition-all duration-300 ${widthClasses}`}
    >
      {/* Toggle Button - hidden on mobile, visible on desktop */}
      <div
        className={`hidden md:flex ${isMinimized ? "mb-4 justify-center" : "mb-2 justify-end pr-2"}`}
      >
        <Button
          onClick={() => setIsMinimized(!isMinimized)}
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-white hover:bg-slate-700"
        >
          {isMinimized ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Logo - hidden on mobile, conditional on desktop */}
      <div className="hidden md:block">{!isMinimized && <Logo />}</div>

      {/* Action Buttons */}
      <div
        className={`mt-4 flex w-full ${isMinimized ? "flex-col gap-2 px-2" : "flex-col gap-2 px-2 md:flex-row md:px-2"}`}
      >
        <SettingsButton />
        <div className="hidden md:flex">
          {!isMinimized && <ThemeToggle />}
          {!isMinimized && <DisableNotificationsToggle />}
          {!isMinimized && <Exit />}
        </div>
      </div>

      {/* Separator - hidden on mobile, conditional on desktop */}
      <div className="hidden md:block">
        {!isMinimized && (
          <div className="px-5">
            <Separator className="my-4" />
          </div>
        )}
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

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
  
  // On mobile: always minimized (w-16)
  // On desktop: toggleable between w-16 and w-60
  const widthClasses = isMinimized ? "w-16" : "w-16 md:w-60";
  
  return (
    <div
      className={`flex h-full flex-col border-r-4 bg-slate-800 pt-10 pb-2 shadow-xs transition-all duration-300 ${widthClasses}`}
    >
      {/* Toggle Button - hidden on mobile, visible on desktop */}
      <div className={`hidden md:flex ${isMinimized ? "justify-center mb-4" : "justify-end pr-2 mb-2"}`}>
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

      {/* Logo - hidden on mobile when minimized, conditional on desktop */}
      <div className="hidden md:block">
        {!isMinimized && <Logo />}
      </div>

      {/* Action Buttons */}
      <div className={`mt-4 flex w-full flex-col gap-2 px-2 md:flex-row ${isMinimized ? "md:flex-col md:gap-2 md:px-2" : "md:px-2"}`}>
        <SettingsButton />
        <div className="hidden md:flex md:gap-0">
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
        <Label className="hidden px-5 pb-2 text-xs text-white md:block">{!isMinimized && "Character"}</Label>
        <MenuContainer
          menuItems={Object.keys(miscMenus) as MenuId[]}
          isMinimized={isMinimized}
        />
        
        {/* Separator between Character and Combat */}
        {isMinimized ? (
          <div className="mx-auto my-2 h-px w-8 bg-slate-600"></div>
        ) : (
          <Label className="px-5 pt-4 pb-2 text-xs text-white">Combat</Label>
        )}
        
        <MenuContainer
          menuItems={Object.keys(combatMenus) as MenuId[]}
          isMinimized={isMinimized}
        />
        
        {/* Separator between Combat and Skills */}
        {isMinimized ? (
          <div className="mx-auto my-2 h-px w-8 bg-slate-600"></div>
        ) : (
          <Label className="px-5 pt-4 pb-2 text-xs text-white">Skills</Label>
        )}
        
        <MenuContainer
          menuItems={Object.keys(skillMenus) as MenuId[]}
          isMinimized={isMinimized}
        />
        <div className="h-[220px] shrink-0"></div>
      </div>
    </div>
  );
}

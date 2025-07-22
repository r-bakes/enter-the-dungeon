"use client";

import { Button } from "@/components/ui/button";
import { Settings, Sun, Moon, Bell, BellOff } from "lucide-react";
import { useTheme } from "next-themes";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SettingsButton({
  size = "default",
  disableHover = false,
}: {
  size?: "default" | "small";
  disableHover?: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const { isToastDisabled, setIsToastDisabled } = useMenuEngineContext();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`flex justify-center rounded-none p-0 hover:rounded-none hover:bg-transparent`}
        >
          <Settings
            color="white"
            strokeWidth={1.5}
            className="h-[1.2rem] w-[1.2rem]"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <Button
            variant="ghost"
            className="hover:bg-accent flex h-auto w-full items-center justify-between p-4"
            onClick={toggleTheme}
          >
            <span className="text-sm font-medium">Theme</span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs capitalize">
                {theme === "system" ? "auto" : theme || "system"}
              </span>
              {theme === "light" ? (
                <Sun className="h-4 w-4" />
              ) : theme === "dark" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <div className="relative">
                  <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute top-0 h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </div>
              )}
            </div>
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-accent flex h-auto w-full items-center justify-between p-4"
            onClick={() => setIsToastDisabled(!isToastDisabled)}
          >
            <span className="text-sm font-medium">Notifications</span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs">
                {isToastDisabled ? "off" : "on"}
              </span>
              {isToastDisabled ? (
                <BellOff className="h-4 w-4" />
              ) : (
                <Bell className="h-4 w-4" />
              )}
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

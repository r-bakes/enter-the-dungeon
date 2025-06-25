import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function SettingsButton({}: {}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="bg-inherit p-0 hover:bg-transparent"
    >
      <Settings
        color="white"
        strokeWidth={1.5}
        className="h-[1.2rem] w-[1.2rem]"
      ></Settings>
    </Button>
  );
}

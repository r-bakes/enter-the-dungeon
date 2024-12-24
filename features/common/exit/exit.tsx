import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function Exit({}: {}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="bg-inherit p-0 hover:bg-inherit"
    >
      <LogOut color="white" strokeWidth={1.5} className="h-[1.2rem] w-[1.2rem]"></LogOut>
    </Button>
  );
}

import { Label } from "@/components/ui/label";
import { AlertCircleIcon } from "lucide-react";

export default function StealthTaskFailedToast({}: {}) {
  return (
    <div className="flex w-full gap-4">
      <AlertCircleIcon></AlertCircleIcon>
      <div className="flex flex-col gap-2">
        <Label className="flex items-center gap-2">
          You were caught stealing!
        </Label>
        <Label className="text-sm text-muted-foreground">
          ...making your escape.
        </Label>
      </div>
    </div>
  );
}

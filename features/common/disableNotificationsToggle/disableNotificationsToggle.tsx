import { Bell, BellOff } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import React from "react";
import { useMenuEngineContext } from "@/engines/menuEngineContext";

export function DisableNotificationsToggle() {
  const { isToastDisabled, setIsToastDisabled } = useMenuEngineContext();

  return (
    <Toggle
      size="lg"
      aria-label="Toggle notifications"
      pressed={isToastDisabled}
      onPressedChange={setIsToastDisabled}
      className="bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent"
    >
      {isToastDisabled ? (
        <BellOff
          className="h-5 min-h-5 w-5 min-w-5"
          strokeWidth={1.5}
          color="white"
        ></BellOff>
      ) : (
        <Bell
          className="h-5 min-h-5 w-5 min-w-5"
          strokeWidth={1.5}
          color="white"
        ></Bell>
      )}
    </Toggle>
  );
}

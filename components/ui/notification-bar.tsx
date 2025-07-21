import React from "react";

export function NotificationBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-transparent pointer-events-none">
      {/* This creates a reserved space for notifications */}
      {/* The actual toasts will be positioned within this area */}
      <div className="h-full w-full flex items-center justify-start px-4">
        {/* Toast notifications will appear here via Sonner's positioning */}
      </div>
    </div>
  );
}
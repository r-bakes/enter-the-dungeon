"use client";
import React from "react";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import { menuTable } from "@/data/menus/menus";
import MenuSelect from "@/features/town/menuSelect/components/menuSelect";

export default function Page() {
  const { selectedMenu } = useMenuEngineContext();

  return (
    // Outer container with full screen
    <div className="flex h-full w-full">
      <MenuSelect />
      <div className="bg-secondaryBackground flex min-h-0 flex-1 py-10">
        {menuTable[selectedMenu].menu}
      </div>
    </div>
  );
}

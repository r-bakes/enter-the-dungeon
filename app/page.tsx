"use client";
import React from "react";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import { menuTable } from "@/data/menus/menus";
import MenuSelect from "@/features/town/menuSelect/components/menuSelect";

export default function Page({}) {
  const { selectedMenu } = useMenuEngineContext();
  return (
    <div className="flex h-screen w-screen">
      <MenuSelect></MenuSelect>
      <div className="bg-secondaryBackground flex h-screen w-full py-10">
        {menuTable[selectedMenu].menu}
      </div>
    </div>
  );
}

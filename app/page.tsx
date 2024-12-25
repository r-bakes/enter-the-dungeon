"use client";
import React from "react";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import {
  combatMenus,
  menuTable,
  miscMenus,
  skillMenus,
} from "@/data/menus/menus";
import MenuSelect from "@/features/town/menuSelect/components/menuSelect";

export default function Page({}) {
  const { selectedMenu } = useMenuEngineContext();
  return (
    <>
      <MenuSelect></MenuSelect>
      <div className="flex h-full w-full bg-secondaryBackground py-10">
        {menuTable[selectedMenu].menu}
      </div>
    </>
  );
}

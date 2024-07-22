"use client";
import MenuSelect from "@/components/camp/menuSelect/menuSelect";
import InventoryMenu from "@/components/camp/inventoryMenu/inventoryMenu";
import SkillMenu from "@/components/camp/skillMenu/skillMenu";
import { GameObject } from "@/data/gameObject";
import { Skill } from "@/data/skills/skills";
import { inventory } from "@/data/menus/inventory";
import { martial } from "@/data/skills/martial";
import CampEngineProvider from "@/engine/campEngineContext";
import React from "react";
import { prospecting } from "@/data/skills/prospecting";
import { smithing } from "@/data/skills/smithing";
import DeckMenu from "@/components/camp/deckMenu/deckMenu";
import { magic } from "@/data/skills/magic";
import { expeditions } from "@/data/menus/expeditions";
import ExpeditionsMenu from "@/components/camp/expeditionsMenu/expeditionsMenu";
import CharacterEngineProvider from "@/engine/characterEngineContext";
import { crafting } from "@/data/skills/crafting";
import { enchanting } from "@/data/skills/enchanting";
import { home } from "@/data/menus/home";
import HomeMenu from "@/components/camp/homeMenu/homeMenu";
import { AnimatePresence } from "framer-motion";
import { athletics } from "@/data/skills/athletics";

export default function Page({}) {
  const [selectedMenu, setSelectedMenu] = React.useState<GameObject>(martial);
  let menus: { [menuId: string]: JSX.Element } = {};

  const skillMenus: GameObject[] = [
    prospecting,
    smithing,
    athletics,
    crafting,
    enchanting,
  ];

  skillMenus.forEach(
    (menu) =>
      (menus[menu.id] = (
        <SkillMenu key={menu.id} skill={selectedMenu as Skill}></SkillMenu>
      )),
  );
  menus[martial.id] = <DeckMenu></DeckMenu>;
  menus[magic.id] = <DeckMenu></DeckMenu>;
  menus[expeditions.id] = <ExpeditionsMenu></ExpeditionsMenu>;
  menus[inventory.id] = <InventoryMenu></InventoryMenu>;
  menus[home.id] = <HomeMenu></HomeMenu>;

  return (
    <CharacterEngineProvider>
      <CampEngineProvider>
        <AnimatePresence>
          <MenuSelect
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          ></MenuSelect>
          <div className="flex h-full w-full bg-slate-50 py-10">
            {menus[selectedMenu.id]}
          </div>
        </AnimatePresence>
      </CampEngineProvider>
    </CharacterEngineProvider>
  );
}

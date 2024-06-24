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
import { excursions } from "@/data/menus/excursions";
import ExcursionsMenu from "@/components/camp/excursionsMenu/excursionsMenu";
import CharacterEngineProvider from "@/engine/characterEngineContext";

export default function Page({}) {
  const [selectedMenu, setSelectedMenu] = React.useState<GameObject>(martial);
  let menus: { [menuId: string]: JSX.Element } = {};
  const skillMenus: GameObject[] = [prospecting, smithing];

  skillMenus.forEach(
    (menu) =>
      (menus[menu.id] = (
        <SkillMenu key={menu.id} skill={selectedMenu as Skill}></SkillMenu>
      ))
  );
  menus[martial.id] = <DeckMenu></DeckMenu>;
  menus[magic.id] = <DeckMenu></DeckMenu>;
  menus[excursions.id] = <ExcursionsMenu></ExcursionsMenu>;
  menus[inventory.id] = <InventoryMenu></InventoryMenu>;

  return (
    <div className="flex w-full h-full py-10">
      <CharacterEngineProvider>
        <CampEngineProvider>
          <MenuSelect
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          ></MenuSelect>
          {menus[selectedMenu.id]}
        </CampEngineProvider>
      </CharacterEngineProvider>
    </div>
  );
}

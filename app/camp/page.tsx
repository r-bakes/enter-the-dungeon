"use client";
import MenuSelect from "@/components/camp/menuSelect/MenuSelect";
import InventoryMenu from "@/components/camp/menus/InventoryMenu/InventoryMenu";
import SkillMenu from "@/components/camp/menus/SkillMenu/SkillMenu";
import { GameObject, Skill } from "@/data/GameObject";
import { inventory } from "@/data/menus/Inventory";
import { martial } from "@/data/skills/Martial";
import CampEngineProvider from "@/engine/CampEngineContext";
import React from "react";
import { prospecting } from "@/data/skills/Prospecting";
import { smithing } from "@/data/skills/Smithing";
import DeckMenu from "@/components/camp/menus/DeckMenu/DeckMenu";
import { magic } from "@/data/skills/Magic";
import { excursions } from "@/data/menus/Excursions";
import ExcursionsMenu from "@/components/camp/menus/ExcursionsMenu/ExcursionsMenu";
import CharacterEngineProvider from "@/engine/CharacterEngineContext";

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
  menus[martial.id] = <DeckMenu isMartial={true}></DeckMenu>;
  menus[magic.id] = <DeckMenu isMartial={false}></DeckMenu>;
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

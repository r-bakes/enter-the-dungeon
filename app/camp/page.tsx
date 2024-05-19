"use client";
import MenuSelect from "@/components/camp/MenuSelect/MenuSelect";
import InventoryMenu from "@/components/camp/menus/InventoryMenu/InventoryMenu";
import SkillMenu from "@/components/camp/menus/SkillMenu/SkillMenu";
import { GameObject, Skill } from "@/game/data/GameObject";
import { inventory } from "@/game/data/menus/Inventory";
import { martial } from "@/game/data/skills/Martial";
import EngineProvider from "@/game/engine/EngineContext";
import React from "react";
import { prospecting } from "@/game/data/skills/Prospecting";
import { smithing } from "@/game/data/skills/Smithing";
import DeckMenu from "@/components/camp/menus/DeckMenu/DeckMenu";
import { magic } from "@/game/data/skills/Magic";
import { excursions } from "@/game/data/menus/Excursions";
import ExcursionsMenu from "@/components/camp/menus/ExcursionsMenu/ExcursionsMenu";

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
    <div className="flex w-full h-full py-10 px-4">
      <EngineProvider>
        <MenuSelect
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        ></MenuSelect>
        {menus[selectedMenu.id]}
      </EngineProvider>
    </div>
  );
}

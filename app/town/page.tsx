"use client";
import SkillMenu from "@/features/town/skillMenu/components/skillMenu";
import { inventory } from "@/data/menus/inventory";
import { martial } from "@/data/skills/martial";
import TownEngineProvider from "@/engines/townEngineContext";
import React from "react";
import { prospecting } from "@/data/skills/prospecting";
import { smithing } from "@/data/skills/smithing";
import DeckMenu from "@/features/town/deckMenu/components/deckMenu";
import { magic } from "@/data/skills/magic";
import { expeditions } from "@/data/menus/expeditions";
import ExpeditionsMenu from "@/features/town/expeditionsMenu/components/expeditionsMenu";
import CharacterEngineProvider from "@/engines/characterEngineContext";
import { crafting } from "@/data/skills/crafting";
import { enchanting } from "@/data/skills/enchanting";
import { home } from "@/data/menus/home";
import HomeMenu from "@/features/town/homeMenu/components/homeMenu";
import { athletics } from "@/data/skills/athletics";
import { stealth } from "@/data/skills/stealth";
import { alchemy } from "@/data/skills/alchemy";
import { agriculture } from "@/data/skills/agriculture";
import { bazaar } from "@/data/menus/bazaar";
import BazaarMenu from "@/features/town/bazaarMenu/components/bazaarMenu";
import MenuSelect from "@/features/town/menuSelect/components/menuSelect";
import InventoryMenu from "@/features/town/inventoryMenu/components/inventoryMenu";
import { GameObject } from "@/types/gameObjects";
import AgricultureMenu from "@/features/town/agricultureMenu/components/agricultureMenu";

export default function Page({}) {
  const [selectedMenu, setSelectedMenu] = React.useState<GameObject>(home);

  const skillMenus = {
    [prospecting.id]: {
      data: prospecting,
      menu: <SkillMenu key={prospecting.id} skill={prospecting}></SkillMenu>,
    },
    [smithing.id]: {
      data: smithing,
      menu: <SkillMenu key={smithing.id} skill={smithing}></SkillMenu>,
    },
    [athletics.id]: {
      data: athletics,
      menu: <SkillMenu key={athletics.id} skill={athletics}></SkillMenu>,
    },
    [crafting.id]: {
      data: crafting,
      menu: <SkillMenu key={crafting.id} skill={crafting}></SkillMenu>,
    },
    [agriculture.id]: {
      data: agriculture,
      menu: <AgricultureMenu></AgricultureMenu>,
    },
    [alchemy.id]: {
      data: alchemy,
      menu: <SkillMenu key={alchemy.id} skill={alchemy}></SkillMenu>,
    },
    [enchanting.id]: {
      data: enchanting,
      menu: <SkillMenu key={enchanting.id} skill={enchanting}></SkillMenu>,
    },
    [stealth.id]: {
      data: stealth,
      menu: <SkillMenu key={stealth.id} skill={stealth}></SkillMenu>,
    },
  };
  const miscMenus = {
    [home.id]: {
      data: home,
      menu: <HomeMenu></HomeMenu>,
    },
    [inventory.id]: {
      data: inventory,
      menu: <InventoryMenu></InventoryMenu>,
    },
    [bazaar.id]: {
      data: bazaar,
      menu: <BazaarMenu></BazaarMenu>,
    },
  };
  const combatMenus = {
    [expeditions.id]: {
      data: expeditions,
      menu: <ExpeditionsMenu></ExpeditionsMenu>,
    },
    [martial.id]: {
      data: martial,
      menu: <DeckMenu></DeckMenu>,
    },
    [magic.id]: {
      data: magic,
      menu: <DeckMenu></DeckMenu>,
    },
  };
  const menus = {
    ...skillMenus,
    ...miscMenus,
    ...combatMenus,
  };

  return (
    <CharacterEngineProvider>
      <TownEngineProvider>
        <MenuSelect
          miscMenus={Object.values(miscMenus).map((menu) => menu.data)}
          combatMenus={Object.values(combatMenus).map((menu) => menu.data)}
          skillMenus={Object.values(skillMenus).map((menu) => menu.data)}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        ></MenuSelect>
        <div className="flex h-full w-full bg-secondaryBackground py-10">
          {menus[selectedMenu.id].menu}
        </div>
      </TownEngineProvider>
    </CharacterEngineProvider>
  );
}

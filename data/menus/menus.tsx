import SkillMenu from "@/features/town/skillMenu/components/skillMenu";
import { prospecting } from "../skills/prospecting";
import { MenuId } from "./enums";
import { smithing } from "../skills/smithing";
import { athletics } from "../skills/athletics";
import { crafting } from "../skills/crafting";
import { agriculture } from "../skills/agriculture";
import AgricultureMenu from "@/features/town/agricultureMenu/components/agricultureMenu";
import { alchemy } from "../skills/alchemy";
import { enchanting } from "../skills/enchanting";
import { stealth } from "../skills/stealth";
import { home } from "./home";
import HomeMenu from "@/features/town/homeMenu/components/homeMenu";
import { inventory } from "./inventory";
import InventoryMenu from "@/features/town/inventoryMenu/components/inventoryMenu";
import MarcketplaceMenu from "@/features/town/marketplaceMenu/components/marketplaceMenu";
import { marketplace } from "./marketplace";
import { expeditions } from "./expeditions";
import ExpeditionsMenu from "@/features/town/expeditionsMenu/components/expeditionsMenu";
import { martial } from "../skills/martial";
import DeckMenu from "@/features/town/deckMenu/components/deckMenu";
import { magic } from "../skills/magic";
import { MenuTable } from "@/types/menus";
import Arena from "@/features/expeditions/arena/arena";

export const skillMenus = {
  [MenuId.PROSPECTING]: {
    data: prospecting,
    menu: <SkillMenu key={prospecting.id} skill={prospecting}></SkillMenu>,
  },
  [MenuId.SMITHING]: {
    data: smithing,
    menu: <SkillMenu key={smithing.id} skill={smithing}></SkillMenu>,
  },
  [MenuId.ATHLETICS]: {
    data: athletics,
    menu: <SkillMenu key={athletics.id} skill={athletics}></SkillMenu>,
  },
  [MenuId.CRAFTING]: {
    data: crafting,
    menu: <SkillMenu key={crafting.id} skill={crafting}></SkillMenu>,
  },
  [MenuId.AGRICULTURE]: {
    data: agriculture,
    menu: <AgricultureMenu></AgricultureMenu>,
  },
  [MenuId.ALCHEMY]: {
    data: alchemy,
    menu: <SkillMenu key={alchemy.id} skill={alchemy}></SkillMenu>,
  },
  [MenuId.ENCHANTING]: {
    data: enchanting,
    menu: <SkillMenu key={enchanting.id} skill={enchanting}></SkillMenu>,
  },
  [MenuId.STEALTH]: {
    data: stealth,
    menu: <SkillMenu key={stealth.id} skill={stealth}></SkillMenu>,
  },
};
export const miscMenus = {
  [MenuId.HOME]: {
    data: home,
    menu: <HomeMenu></HomeMenu>,
  },
  [MenuId.INVENTORY]: {
    data: inventory,
    menu: <InventoryMenu></InventoryMenu>,
  },
  [MenuId.MARKETPLACE]: {
    data: marketplace,
    menu: <MarcketplaceMenu></MarcketplaceMenu>,
  },
};
export const combatMenus = {
  [MenuId.EXPEDITIONS]: {
    data: expeditions,
    menu: <ExpeditionsMenu></ExpeditionsMenu>,
  },
  [MenuId.MARTIAL]: {
    data: martial,
    menu: <DeckMenu></DeckMenu>,
  },
  [MenuId.MAGIC]: {
    data: magic,
    menu: <DeckMenu></DeckMenu>,
  },
};
export const expeditionsMenus = {
  [MenuId.EXPEDITION]: {
    data: magic, // Placeholder
    menu: <Arena></Arena>,
  },
};
export const menuTable = {
  ...skillMenus,
  ...miscMenus,
  ...combatMenus,
  ...expeditionsMenus,
} as MenuTable;

import { LucideIcon } from "lucide-react";
import { bazaar } from "./allMenus/Bazaar";
import { inventory } from "./allMenus/Inventory";
import { martial } from "../skills/allSkills/Martial";
import { magic } from "../skills/allSkills/Magic";
import { excursions } from "./allMenus/Excursions";
import { prospecting } from "../skills/allSkills/Prospecting";
import { smithing } from "../skills/allSkills/Smithing";

export interface Menu {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}
export const miscMenus: Menu[] = [bazaar, inventory, excursions];
export const combatMenus: Menu[] = [martial, magic];
export const skillMenus: Menu[] = [prospecting, smithing];

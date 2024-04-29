import { LucideIcon } from "lucide-react";
import { bazaar } from "./allMenus/Bazaar";
import { inventory } from "./allMenus/Inventory";
import { martial } from "../skills/allSkills/Martial";
import { magic } from "../skills/allSkills/Magic";
import { excursions } from "./allMenus/Excursions";
import { prospecting } from "../skills/allSkills/Prospecting";
import { smithing } from "../skills/allSkills/Smithing";
import { GameObject } from "../GameObject";

export const miscMenus: GameObject[] = [bazaar, inventory, excursions];
export const combatMenus: GameObject[] = [martial, magic];
export const skillMenus: GameObject[] = [prospecting, smithing];

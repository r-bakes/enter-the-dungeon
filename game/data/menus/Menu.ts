import { LucideIcon } from "lucide-react";
import { bazaar } from "./allMenus/Bazaar";
import { inventory } from "./allMenus/Inventory";
import { martial } from "../skills/allSkills/Martial";
import { magic } from "../skills/allSkills/Magic";
import { map } from "./allMenus/Map";
import { prospecting } from "../skills/allSkills/Prospecting";

export interface Menu {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
}
export const miscMenus: Menu[] = [
    bazaar,
    inventory,
    map,
]
export const combatMenus: Menu[] = [
    martial,
    magic
]
export const skillMenus: Menu[] = [
    prospecting
] 
import { Weapon } from "../items";
import { Sword } from "lucide-react";

export const bronzeSword: Weapon = {
    id: "bronze-sword",
    name: "Bronze Sword",
    description: "A bronze sword.",
    icon: Sword,
    type: "equipment",
    attackBonus: 1,
    defenseBonus: 1,
    healthBonus: 0
}
export const ironSword: Weapon = {
    id: "iron-sword",
    name: "Iron Sword",
    description: "An iron sword.",
    icon: Sword,
    type: "equipment",
    attackBonus: 10,
    defenseBonus: 10,
    healthBonus: 0
}
export const ironGreatSword: Weapon = {
    id: "iron-greatsword",
    name: "Iron Great Sword",
    description: "An iron great sword.",
    icon: Sword,
    type: "equipment",
    attackBonus: 20,
    defenseBonus: 5,
    healthBonus: 0
}
export const steelSword: Weapon = {
    id: "steel-sword",
    name: "Steel Sword",
    description: "A steel sword.",
    icon: Sword,
    type: "equipment",
    attackBonus: 20,
    defenseBonus: 20,
    healthBonus: 0
}


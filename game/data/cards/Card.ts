import { Shield, Sword, Swords } from "lucide-react"
import { Menu } from "../menus/Menu"

export interface Card extends Menu {
    baseDmg: number
    strikes: number
    baseDef: number
    targets: "1" | "all"
}
export const slice: Card = {
    id: "slice",
    name: "Slice",
    icon: Sword,
    description: "Deals 2xATK 1 time to 1 target",
    baseDmg: 1,
    strikes: 1,
    baseDef: 0,
    targets: "1",
}
export const stab: Card = {
    id: "stab",
    name: "Stab",
    icon: Swords,
    description: "Deals 1xATK 2 times to 1 target",
    baseDmg: 1,
    strikes: 2,
    baseDef: 0,
    targets: "1",
}
export const defend: Card = {
    id: "stab",
    name: "Stab",
    icon: Shield,
    description: "Adds 1xDEF for this round",
    baseDmg: 0,
    strikes: 0,
    baseDef: 1,
    targets: "1",
}
import { Shield, Sword, Swords } from "lucide-react"
import { CombatCard } from "../GameObject"

let createCombatCardDescription = (
    baseDmg: number,
    strikes: number,
    baseDef: number,
    targets: number
) => {
    return `Deals ${baseDmg}xATK ${strikes} time(s) to ${targets} target(s)`
}

export const slice: CombatCard = {
    id: "slice",
    name: "Slice",
    icon: Sword,
    description: createCombatCardDescription(2, 1, 0, 1),
    baseDmg: 2,
    strikes: 1,
    baseDef: 0,
    targets: 1,
    cost: 1
}
export const stab: CombatCard = {
    id: "stab",
    name: "Stab",
    icon: Swords,
    description: createCombatCardDescription(1, 2, 0, 1),
    baseDmg: 1,
    strikes: 2,
    baseDef: 0,
    targets: 1,
    cost: 1
}
export const defend: CombatCard = {
    id: "defend",
    name: "Defend",
    icon: Shield,
    description: createCombatCardDescription(0, 0, 1, 1),
    baseDmg: 0,
    strikes: 0,
    baseDef: 1,
    targets: 1,
    cost: 1
}

export const ALL_CARDS: CombatCard[] = [
    slice,
    stab,
    defend
]
export const CARD_BY_ID: { [cardId: string]: CombatCard } = Object.fromEntries(
    ALL_CARDS.map((cardId) => [cardId.id, cardId])
  );
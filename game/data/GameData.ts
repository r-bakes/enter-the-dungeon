import { prospecting } from "./skills/Prospecting"
import { martial } from "./skills/Martial"
import { inventory } from "./player/Inventory"
import { map } from "./player/Map"
import { magic } from "./skills/Magic"
import { bazaar } from "./player/Bazaar"
import { LucideIcon } from "lucide-react"

export const nonCombatSkills: Array<SkillData> = [
    prospecting,
]

export const combatSkills: Array<CombatSkillData> = [
    martial,
    magic
]

export const playerData: Array<PlayerData> = [
    inventory,
    map,
    bazaar,
]

export interface MenuData {
    name: string,
    description: string,
    icon: LucideIcon
}


export type TrainingActivity = {
    name: string
    icon: LucideIcon
    duration: number
    experience: number
}

export interface SkillData extends MenuData {
    trainingActivities: Array<TrainingActivity>
}
export interface CombatSkillData extends MenuData {}
export interface PlayerData extends MenuData {}
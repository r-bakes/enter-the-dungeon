import { prospecting } from "./skills/Prospecting"
import { martial } from "./skills/Martial"
import { inventory } from "./character/Inventory"
import { map } from "./character/Map"
import { magic } from "./skills/Magic"
import { bazaar } from "./character/Bazaar"
import { LucideIcon } from "lucide-react"
import { characters } from "@prisma/client"

export const nonCombatSkills: Array<Skill> = [
    prospecting,
]

export const combatSkills: Array<CombatSkill> = [
    martial,
    magic
]

export const characterData: Array<CharacterData> = [
    inventory,
    map,
    bazaar,
]

export interface MenuData {
    name: string,
    description: string,
    icon: LucideIcon
}

type CharacterSkillData = {
    level: number
}
export function skillToCharacterFields(character: characters, skill: Skill) {
    const mapping: Record<string, CharacterSkillData> = {
        Prospecting: {
            level: character.prospectingLevel
        },
        Martial: {
            level: character.martialLevel
        },
        Magic: {
            level: character.magicLevel
        }
    }
    return mapping[skill.name]

} 



export type TrainingActivity = {
    name: string
    icon: LucideIcon
    description: string,
    duration: number
    experience: number
}

export interface Skill extends MenuData {
    trainingActivities: Array<TrainingActivity>
}
export interface CombatSkill extends MenuData {}
export interface CharacterData extends MenuData {}
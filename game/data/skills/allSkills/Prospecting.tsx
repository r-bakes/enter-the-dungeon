import { HammerIcon, Mountain } from "lucide-react"
import { Skill, Task } from "../Skills"

const mineCopperOre: Task = {
    id: "mine-copper-ore",
    name: "Mine Copper",
    description: "Mine copper ore.",
    icon: Mountain,
    duration: 4,
    experience: 1,
    lootTable: {"copper-ore": 100, "sapphire": 2}
}
const mineTinOre: Task = {
    id: "mine-tin-ore",
    name: "Mine Tin",
    description: "Mine tin ore.",
    icon: Mountain,
    duration: 4,
    experience: 1,
    lootTable: {"tin-ore": 100, "sapphire": 2}
}
const mineCoal: Task = {
    id: "mine-coal",
    name: "Mine Coal",
    description: "Mine coal.",
    icon: Mountain,
    duration: 8,
    experience: 2,
    lootTable: {"coal": 100}
}
const mineIronOre: Task = {
    id: "mine-iron-ore",
    name: "Mine Iron",
    description: "Mine iron ore.",
    icon: Mountain,
    duration: 4,
    experience: 5,
    lootTable: {"iron-ore": 100, "sapphire": 2}
}
const mineSilverOre: Task = {
    id: "mine-silver-ore",
    name: "Mine Silver",
    description: "Mine silver ore.",
    icon: Mountain,
    duration: 4,
    experience: 5,
    lootTable: {"silver-ore": 100, "sapphire": 5}
}

export const prospecting: Skill = {
    id: "prospecting",
    name: "Prospecting",
    description: "The ability to search for and excavate mineral deposits.",
    icon: HammerIcon,
    tasks: {
        gathering: [
            mineCopperOre,
            mineTinOre,
            mineCoal,
            mineIronOre,
            mineSilverOre
        ],
        crafting: []
    }
}


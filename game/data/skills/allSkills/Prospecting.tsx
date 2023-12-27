import { Circle, Gem, HammerIcon, Mountain, SearchSlash } from "lucide-react"
import { Skill, Task } from "../Skills"

const mineCopperOre: Task = {
    id: "mine-copper-ore",
    name: "Mine Copper",
    description: "Mine copper ore.",
    icon: Mountain,
    durationSec: 4,
    experience: 1,
    requiredLevel: 1,
    lootTable: {"copper-ore": 100, "geode": 2}
}
const mineTinOre: Task = {
    id: "mine-tin-ore",
    name: "Mine Tin",
    description: "Mine tin ore.",
    icon: Mountain,
    durationSec: 4,
    experience: 1,
    requiredLevel: 1,
    lootTable: {"tin-ore": 100, "geode": 2}
}
const mineCoal: Task = {
    id: "mine-coal",
    name: "Mine Coal",
    description: "Mine coal.",
    icon: Circle,
    durationSec: 8,
    experience: 5,
    requiredLevel: 5,
    lootTable: {"coal": 100}
}
const mineIronOre: Task = {
    id: "mine-iron-ore",
    name: "Mine Iron",
    description: "Mine iron ore.",
    icon: Mountain,
    durationSec: 4,
    experience: 10,
    requiredLevel: 10,
    lootTable: {"iron-ore": 100, "geode": 2}
}
const mineSilverOre: Task = {
    id: "mine-silver-ore",
    name: "Mine Silver",
    description: "Mine silver ore.",
    icon: Mountain,
    durationSec: 4,
    experience: 20,
    requiredLevel: 20,
    lootTable: {"silver-ore": 100, "geode": 5}
}
const cutGeode: Task = {
    id: "cut-geode",
    name: "Cut Geode",
    description: "Cut a geode into a gem.",
    icon: Gem,
    durationSec: 10,
    experience: 50,
    requiredLevel: 10,
    lootTable: {"sapphire": 100},
    requires: {"geode": 1}
}

export const prospecting: Skill = {
    id: "prospecting",
    name: "Prospecting",
    description: "The ability to search for and excavate mineral deposits.",
    icon: SearchSlash,
    tasks: {
        gathering: [
            mineCopperOre,
            mineTinOre,
            mineCoal,
            mineIronOre,
            mineSilverOre
        ],
        crafting: [
            cutGeode
        ]
    },
    getAllTasks() {
        let allTasks: Task[] = []
        Object.keys(this.tasks).forEach(key => { allTasks.push(...this.tasks[key])});
        return allTasks;
    }
}


import { HammerIcon } from "lucide-react"
import { Skill, TrainingActivity } from "../MenuData"

const mine: TrainingActivity = {
    name: "Mine Ore",
    description: "Mine a random ore based on your skill level.",
    icon: HammerIcon,
    duration: 10,
    experience: 1
}

export const prospecting: Skill = {
    name: "Prospecting",
    description: "The ability to search for and excavate mineral deposits.",
    icon: HammerIcon,
    trainingActivities: [
        mine
    ]
}


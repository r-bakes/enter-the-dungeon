import { HammerIcon } from "lucide-react"
import { SkillData, TrainingActivity } from "../GameData"

const mine: TrainingActivity = {
    name: "Mine Ore",
    icon: HammerIcon,
    duration: 10,
    experience: 1
}

export const prospecting: SkillData = {
    name: "Prospecting",
    description: "The ability to search for and excavate mineral deposits.",
    icon: HammerIcon,
    trainingActivities: [
        mine
    ]
}


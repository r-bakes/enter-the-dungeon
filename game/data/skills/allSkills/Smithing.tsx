import { HammerIcon, RectangleVertical, Sword } from "lucide-react";
import { Skill, Task } from "../Skills";

const smithBronzeSword: Task = {
    id: "smith-bronze-sword",
    name: "Smith Sword",
    description: "Smith a sword.",
    icon: Sword,
    durationSec: 10,
    experience: 1,
    requiredLevel: 5,
    lootTable: {"bronze-sword": 100},
    requires: {"bronze-bar": 1}
}
const smithIronSword: Task = {
    id: "smith-iron-sword",
    name: "Smith Sword",
    description: "Smith a sword.",
    icon: Sword,
    durationSec: 10,
    experience: 10,
    requiredLevel: 10,
    lootTable: {"iron-sword": 100},
    requires: {"iron-bar": 1}
}
const smithIronGreatSword: Task = {
    id: "smith-iron-greatsword",
    name: "Smith Great Sword",
    description: "Smith a great sword.",
    icon: Sword,
    durationSec: 10,
    experience: 20,
    requiredLevel: 10,
    lootTable: {"iron-greatsword": 100},
    requires: {"iron-bar": 2}
}
const smithSteelSword: Task = {
    id: "smith-steel-sword",
    name: "Smith Sword",
    description: "Smith a sword.",
    icon: Sword,
    durationSec: 10,
    experience: 20,
    requiredLevel: 20,
    lootTable: {"steel-sword": 100},
    requires: {"steel-bar": 1}
}
const smeltBronzeBar: Task = {
    id: "smelt-bronze-bar",
    name: "Bronze Bar",
    description: "Smelt a bronze bar.",
    icon: RectangleVertical,
    durationSec: 10,
    experience: 1,
    requiredLevel: 1,
    lootTable: {"bronze-bar": 100},
    requires: {"copper-ore": 1, "tin-ore": 1, "coal": 1}
}
const smeltIronBar: Task = {
    id: "smelt-iron-bar",
    name: "Iron Bar",
    description: "Smelt a iron bar.",
    icon: RectangleVertical,
    durationSec: 10,
    experience: 10,
    requiredLevel: 10,
    lootTable: {"iron-bar": 100},
    requires: {"iron-ore": 1, "coal": 1}
}
const smeltSteelBar: Task = {
    id: "smelt-iron-bar",
    name: "Iron Bar",
    description: "Smelt a steel bar.",
    icon: RectangleVertical,
    durationSec: 10,
    experience: 20,
    requiredLevel: 20,
    lootTable: {"steel-bar": 100},
    requires: {"iron-ore": 3, "coal": 2}
}
const smeltSilverBar: Task = {
    id: "smelt-silver-bar",
    name: "Silver Bar",
    description: "Smelt a silver bar.",
    icon: RectangleVertical,
    durationSec: 10,
    experience: 20,
    requiredLevel: 20,
    lootTable: {"silver-bar": 100},
    requires: {"silver-ore": 5, "coal": 1}
}
const smeltGoldBar: Task = {
    id: "smelt-gold-bar",
    name: "Gold Bar",
    description: "Smelt a gold bar.",
    icon: RectangleVertical,
    durationSec: 10,
    experience: 30,
    requiredLevel: 30,
    lootTable: {"gold-bar": 100},
    requires: {"gold-ore": 5, "coal": 1}
}


export const smithing: Skill = {
    id: "smithing",
    name: "Smithing",
    description: "The ability to forge arms, armor, and trade goods.",
    icon: HammerIcon,
    tasks: {
        smelting: [smeltBronzeBar, smeltIronBar, smeltSteelBar, smeltSilverBar, smeltGoldBar],
        bronze: [smithBronzeSword],
        iron: [smithIronSword, smithIronGreatSword],
        steel: [smithSteelSword]
    },
    getAllTasks() {
        let allTasks: Task[] = []
        Object.keys(this.tasks).forEach(key => { allTasks.push(...this.tasks[key])});
        return allTasks;
    }
}
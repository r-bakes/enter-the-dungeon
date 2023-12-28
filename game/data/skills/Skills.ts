import { prospecting } from "./allSkills/Prospecting";
import { Menu } from "../menus/Menu";
import { smithing } from "./allSkills/Smithing";
import { LootTable } from "@/game/engine/LootEngine";

export class Skills {
    skills: Skill[] = [
        prospecting,
        smithing
    ];
    skillById: {[skillId: string]: Skill} = {};

    constructor() {
        this.skills.forEach(skill => this.skillById[skill.id] = skill)
    }

    get(id: number): Skill {
        return this.skillById[id];
    }
}
export interface Skill extends Menu {
    tasks: {[taskType: string]: Task[]};
    getAllTasks(): Task[]
}
export interface Task extends Menu {
    durationSec: number;
    experience: number;
    requiredLevel: number;
    lootTable: LootTable;
    requires?: {[itemid: string]: number}
}



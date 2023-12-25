import { prospecting } from "./allSkills/Prospecting";
import { Menu } from "../menus/Menu";

export class Skills {
    skills: Skill[] = [
        prospecting
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
export interface Task extends Menu{
    duration: number;
    experience: number;
    lootTable: LootTable 
}
export interface LootTable {
    [itemId: string]: number
}

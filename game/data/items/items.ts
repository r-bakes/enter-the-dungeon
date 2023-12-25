import { copperOre } from "./allItems/copperOre";
import { Menu } from "../menus/Menu";
import { sapphire } from "./allItems/sapphire";
import { tinOre } from "./allItems/tinOre";
import { coal } from "./allItems/coal";
import { ironOre } from "./allItems/ironOre";
import { silverOre } from "./allItems/silverOre";

class Items {

    items: Item[] = [
        copperOre,
        tinOre,
        ironOre,
        silverOre,
        coal,
        sapphire
    ];
    itemById: {[itemId: string]: Item} = {};

    constructor() {
        this.items.forEach(item => this.itemById[item.id] = item)
    }

    get(id: string): Item {
        return this.itemById[id]
    }
}
export interface Item extends Menu {
}
interface Equipment extends Item {
    attackBonus: number
    defenseBonus: number 
    healthBonus: number
}
interface Weapon extends Equipment {
    attack: number
}

export const items = new Items();
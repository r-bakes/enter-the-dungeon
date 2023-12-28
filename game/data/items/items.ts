import { copperOre, geode, silverOre, coal, ironOre, tinOre, sapphire, goldOre, emerald } from "./allItems/minerals";
import { Menu } from "../menus/Menu";
import { bronzeSword, ironGreatSword, ironSword, steelSword } from "./allItems/weapons";
import { bronzeBar, goldBar, ironBar, silverBar, steelBar } from "./allItems/bars";

class Items {

    items: Item[] = [
        copperOre,
        tinOre,
        ironOre,
        silverOre,
        coal,
        geode,
        sapphire,
        emerald,
        bronzeSword,
        ironSword,
        ironGreatSword,
        bronzeBar,
        ironBar,
        steelBar,
        silverBar,
        goldBar,
        goldOre,
        steelSword
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
    type: "equipment" | "supply" | "trade-good" | "material"
}
export interface Equipment extends Item {
    attackBonus: number
    defenseBonus: number 
    healthBonus: number
}
export interface Weapon extends Equipment {
}

export const items = new Items();
export class Inventory {
    items; 
    gold;

    constructor(inventory: InventoryData) {
        this.items = inventory.items
        this.gold = inventory.gold
    }

    addItem(id: string) {
        if (Object.keys(this.items).includes(id.toString())) {
            this.items[id] += 1
        } else {
            this.items[id] = 1
        }
    }
    removeItem(id: string) {
        if (this.items[id] == 1) {
            delete this.items[id];
        } else {
            this.items[id] -= 1;
        }
    }
    addGold(gold: number) {
        this.gold += gold
    }
    removeGold(gold: number) {
        this.gold -= gold
    }
}

export type InventoryData = {
    gold: number,
    items: {[itemId: string]: number}
} 
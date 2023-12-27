export class Inventory {
    items; 
    gold;

    constructor(inventory: InventoryData) {
        this.items = inventory.items
        this.gold = inventory.gold
    }

    addItem(id: string, amount: number = 1) {
        if (Object.keys(this.items).includes(id.toString())) {
            this.items[id] += amount
        } else {
            this.items[id] = amount
        }
    }
    removeItem(id: string, amount: number = 1) {
        if (this.items[id] - amount == 0) {
            delete this.items[id];
        } else {
            this.items[id] -= amount;
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
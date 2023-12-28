import { randomInt } from "crypto";
import { Item, items } from "../data/items/items"

export default function generateLoot(lootTable: LootTable): Loot{
    let loot: Loot =  []

    Object.entries(lootTable).forEach(([_, lootSet]) => {
        const totalWeight = getTotalWeight(lootSet)
        const roll = Math.random() * totalWeight;
        let currentWeight = 0;

        for (const itemId in lootSet) {
            let data = lootSet[itemId]
            currentWeight += data.weight;

            if (roll < currentWeight) {
                if (itemId in items.itemById) {
                    loot.push({
                        item: items.get(itemId),
                        amount: Math.floor(Math.random() * (data.maxQuantity - data.minQuantity + 1) + data.minQuantity)
                    })
                }
                break
            }      
        }
    })
    return loot
}
export function generateDropRates(lootTable: LootTable): {item: Item, chance: number}[][] {
    let dropRates = []
    
    for (const lootSet in lootTable) {
        let totalWeight = getTotalWeight(lootTable[lootSet])
        let dropGroup = []
        for (const itemId in lootTable[lootSet]) {
            let data = lootTable[lootSet][itemId]
            if (itemId in items.itemById) {
                dropGroup.push({
                    item: items.get(itemId),
                    chance: Math.floor((data.weight / totalWeight) * 100)
                })
            }
        }
        dropRates.push(dropGroup)
    } 

    return dropRates
}

function getTotalWeight(lootSet: LootSet) {
    let totalWeight = 0;
    Object.entries(lootSet).forEach(([_, data]) => totalWeight += data.weight);
    return totalWeight;
}

export type Loot = {item: Item, amount: number}[]
export type LootTable = {
    [lootSetId: string]: LootSet
}
type LootSet = {
    [itemId: string]: {
        weight: number
        minQuantity: number
        maxQuantity: number            
    }
}
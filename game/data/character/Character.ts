import { Inventory, InventoryData } from "./Inventory";
import { Loadout, LoadoutData } from "./Loadout";
import { Skills, SkillsData } from "./Skills";

export class Character {
    name: string;
    inventory: Inventory;
    loadout: Loadout;
    skills: Skills;
    
    constructor(characterData: CharacterData) {
        this.name = characterData.name;
        this.inventory = new Inventory(characterData.inventoryData);
        this.loadout = new Loadout(characterData.loadoutData);
        this.skills = new Skills(characterData.skillsData);
    }
}

type CharacterData = {
    name: string,
    loadoutData: LoadoutData,
    inventoryData: InventoryData,
    skillsData: SkillsData
}

// TODO add persistent storage on GCP.
const characterData = {
    name: "Riley",
    loadoutData: {
        head: null,
        shoulders: null,
        chest: null,
        gloves: null,
        wrists: null,
        legs: null,
        feet: null,
        neck: null,
        trinket: null,
        ringOne: null,
        ringTwo: null,
        leftHand: null,
        rightHand: null
    },
    inventoryData: {
        gold: 10,
        items: {0: 10}
    },
    skillsData: {
        martial: {
            id: "martial",
            level: 5,
            experience: 0
        },
        magic: {
            id: "magic",
            level: 10,
            experience: 0
        },
        prospecting: {
            id: "prospecting",
            level: 1,
            experience: 0
        }
    }
}

export const mockCharacter = new Character(characterData)


 


import { Equipment, items } from "../items/items";
import { Inventory, InventoryData } from "./Inventory";
import { Loadout, LoadoutData } from "./Loadout";
import { Skills, SkillsData } from "./Skills";




// TODO add persistent storage on GCP.
const characterData = {
  name: "Riley",
  loadoutData: {
    head: null,
    neck: null,
    shoulder: null,
    cloak: null,
    chest: null,
    waist: null,
    leg: null,
    wrist: null,
    glove: null,
    feet: null,
    ring1: null,
    ring2: null,
    trinket1: null,
    trinket2: null,
    leftHand: "bronze-sword",
    rightHand: null,
    flask1: null,
    flask2: null,
  },
  
  inventoryData: {
    gold: 10000,
    items: {
      "copper-ore": 10,
      geode: 1,
      "bronze-sword": 1,
      "tin-ore": 10,
      coal: 10,
    },
  },
  skillsData: {
    martial: {
      id: "martial",
      level: 5,
      experience: 0,
    },
    magic: {
      id: "magic",
      level: 10,
      experience: 0,
    },
    prospecting: {
      id: "prospecting",
      level: 10,
      experience: 300,
    },
    smithing: {
      id: "smithing",
      level: 60,
      experience: 10737418239,
    },
  },
};

export const mockCharacter = new Character(characterData);

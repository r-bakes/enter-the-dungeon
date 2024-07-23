import { agriculture } from "../skills/agriculture";

// TODO add persistent storage on GCP.
export type Character = {
  name: string;
  loadout: Loadout;
  inventory: Inventory;
  skills: Skills;
  progress: Progress;
  upgrades: Upgrades;
  deck: Deck;
};
export type Inventory = {
  [itemId: string]: number;
};
export type Loadout = {
  [slotId in Slot]: string | null;
};
export type Upgrades = string[];
export type Skills = {
  [skillId: string]: CharacterSkill;
};
export type CharacterSkill = {
  level: number;
  experience: number;
};
export type Progress = string[];
export type Deck = {
  equppedMartial: string[];
  unequippedMartial: string[];
  equippedMagic: string[];
  unequippedMagic: string[];
};

export enum Slot {
  HEAD = "head",
  NECK = "neck",
  SHOULDER = "shoulder",
  CLOAK = "cloak",
  CHEST = "chest",
  WAIST = "waist",
  LEG = "leg",
  WRIST = "wrist",
  GLOVE = "glove",
  FEET = "feet",
  RING1 = "ring1",
  RING2 = "ring2",
  TRINKET1 = "trinket1",
  TRINKET2 = "trinket2",
  FLASK1 = "flask1",
  FLASK2 = "flask2",
  LEFTHAND = "leftHand",
  RIGHTHAND = "rightHand",
}

export const testCharacter: Character = {
  name: "Riley",
  loadout: {
    head: "bronzeHelmet",
    neck: null,
    shoulder: null,
    cloak: null,
    chest: "bronzeChestplate",
    waist: "bronzeBelt",
    leg: "bronzePlateleggings",
    wrist: null,
    glove: "bronzeGauntlets",
    feet: null,
    ring1: null,
    ring2: null,
    trinket1: null,
    trinket2: null,
    leftHand: "ironSword",
    rightHand: "ironShield",
    flask1: null,
    flask2: null,
  },
  inventory: {
    gold: 10000,
    copperOre: 10,
    geode: 1,
    tinOre: 10,
    coal: 10,
  },
  upgrades: [
    "bronzePickaxe",
    "basicHammer",
    "basicAnvil",
    "basicForge",
    "coalMineCanery",
  ],
  skills: {
    martial: {
      level: 5,
      experience: 0,
    },
    magic: {
      level: 10,
      experience: 0,
    },
    prospecting: {
      level: 10,
      experience: 300,
    },
    smithing: {
      level: 60,
      experience: 10737418239,
    },
    athletics: {
      level: 15,
      experience: 0,
    },
    crafting: {
      level: 1,
      experience: 0,
    },
    agriculture: {
      level: 1,
      experience: 0,
    },
    alchemy: {
      level: 1,
      experience: 0,
    },
    enchanting: {
      level: 1,
      experience: 0,
    },
    stealth: {
      level: 15,
      experience: 0,
    },
  },
  progress: [],
  deck: {
    equppedMartial: ["slice", "slice", "slice", "defend", "defend", "defend"],
    unequippedMartial: [],
    equippedMagic: [],
    unequippedMagic: [],
  },
};

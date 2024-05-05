import { CombatCard } from "../GameObject";
import { slice } from "../cards/cards";

// TODO add persistent storage on GCP.
export type Character = {
  name: string;
  loadout: Loadout;
  inventory: Inventory;
  skills: Skills;
  progress: Progress;
  deck: Deck;
};

export type Inventory = {
  [itemId: string]: number;
};

export type Loadout = {
  [slotId in Slot]: string | null;
};

export type Skills = {
  [skillId: string]: SkillLevel;
};

export type SkillLevel = {
  level: number;
  experience: number;
};

export type Progress = {};

export type Deck = {
  equppedMartial: string[]
  unequippedMartial: string[]
  equippedMagic: string[],
  unequippedMagic: string[]
}

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
    leftHand: "bronzeSword",
    rightHand: null,
    flask1: null,
    flask2: null,
  },
  inventory: {
    gold: 10000,
    copperOre: 10,
    geode: 1,
    bronzeSword: 1,
    tinOre: 10,
    coal: 10,
  },
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
  },
  progress: {},
  deck: {
    equppedMartial: ["slice", "slice"],
    unequippedMartial: [],
    equippedMagic: [],
    unequippedMagic: [],
  }
};

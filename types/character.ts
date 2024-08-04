import { Slot } from "@/data/character/character";

export type Character = {
  name: string;
  loadout: Loadout;
  inventory: Inventory;
  skills: Skills;
  milestones: Milestones;
  upgrades: Upgrades;
  deck: Deck;
};
export type Inventory = {
  [itemId: string]: number;
};
export type Loadout = {
  [slotId in Slot]: string | null;
};
export type Upgrades = Set<string>;
export type Skills = {
  [skillId: string]: CharacterSkill;
};
export type CharacterSkill = {
  level: number;
  experience: number;
};
export type Milestones = Set<string>;
export type Deck = {
  equppedMartial: string[];
  unequippedMartial: string[];
  equippedMagic: string[];
  unequippedMagic: string[];
};

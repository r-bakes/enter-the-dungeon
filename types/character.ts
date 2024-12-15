import { Slot } from "@/data/character/character";
import { ArmorId, WeaponId } from "@/data/items/enums";

export type Character = {
  name: string;
  loadout: Loadout;
  inventory: Inventory;
  skills: Skills;
  milestones: Milestones;
  upgrades: Upgrades;
  deck: Deck;
  working: Working;
};
export type Inventory = {
  [itemId: string]: number;
};
export type Loadout = {
  [slotId in Slot]: WeaponId | ArmorId | null;
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
export type PlotFilled = {
  seedId: string;
  startTime: number;
};
export type PlotEmpty = {
  seedId: null;
  startTime: null;
};
export type Botany = {
  [id in PlotId]: PlotFilled | PlotEmpty;
};
export type PastureFilled = {
  livestockId: string;
  startTime: number;
};
export type PastureEmpty = {
  livestockId: null;
  startTime: null;
};
export type Ranching = {
  [id in PastureId]: PastureFilled | PastureEmpty;
};
export type Agriculture = {
  botany: Botany;
  ranching: Ranching;
};
export type Working =
  | {
      workingSkill: [skillId: string];
      workingTask: [taskId: string];
      startTime: number | null;
      agriculture: Agriculture;
    }
  | {
      workingSkill: null;
      workingTask: null;
      startTime: null;
      agriculture: Agriculture;
    };

export enum PlotId {
  PLOT_ONE = "PLOT_ONE",
  PLOT_TWO = "PLOT_TWO",
  PLOT_THREE = "PLOT_THREE",
  PLOT_FOUR = "PLOT_FOUR",
  PLOT_FIVE = "PLOT_FIVE",
  PLOT_SIX = "PLOT_SIX",
  PLOT_SEVEN = "PLOT_SEVEN",
  PLOT_EIGHT = "PLOT_EIGHT",
}
export enum PastureId {
  PASTURE_ONE = "PASTURE_ONE",
  PASTURE_TWO = "PASTURE_TWO",
  PASTURE_THREE = "PASTURE_THREE",
  PASTURE_FOUR = "PASTURE_FOUR",
  PASTURE_FIVE = "PASTURE_FIVE",
  PASTURE_SIX = "PASTURE_SIX",
  PASTURE_SEVEN = "PASTURE_SEVEN",
  PASTURE_EIGHT = "PASTURE_EIGHT",
}

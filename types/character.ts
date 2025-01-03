import { PastureId, PlotId, Slot } from "@/data/character/enums";
import { ItemId } from "@/data/items/enums";
import { SkillId } from "@/data/skills/enums";
import { TaskId } from "@/data/tasks/enum";

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
  [id in ItemId]: number;
};
export type Loadout = {
  [slotId in Slot]: ItemId | null;
};
export type Upgrades = Set<string>;
export type Skills = {
  [id in SkillId]: CharacterSkill;
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
  seedId: ItemId;
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
  livestockId: ItemId;
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
      workingSkill: SkillId;
      workingTask: TaskId;
      startTime: number | null;
      agriculture: Agriculture;
    }
  | {
      workingSkill: null;
      workingTask: null;
      startTime: null;
      agriculture: Agriculture;
    };

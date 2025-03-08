import { PastureId, PlotId, Slot } from "@/data/character/enums";
import { CombatCardId } from "@/data/combatCards/enums";
import { ItemId } from "@/data/items/enums";
import { MilestoneId } from "@/data/milestones/enums";
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
export type Milestones = Set<MilestoneId>;
export type Deck = {
  equppedMartial: CombatCardId[];
  unequippedMartial: CombatCardId[];
  equippedMagic: CombatCardId[];
  unequippedMagic: CombatCardId[];
};
export type PlotFilled = {
  taskId: TaskId;
  startTime: number;
};
export type PlotEmpty = {
  taskId: null;
  startTime: null;
};
export type Botany = {
  [id in PlotId]: PlotFilled | PlotEmpty;
};
export type PastureFilled = {
  taskId: TaskId;
  startTime: number;
};
export type PastureEmpty = {
  taskId: null;
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
      workingTask: TaskId;
      startTime: number | null;
      agriculture: Agriculture;
    }
  | {
      workingTask: null;
      startTime: null;
      agriculture: Agriculture;
    };

import { ItemId } from "../items/enums";
import { UpgradeId } from "../upgrades/enums";
import { SkillId } from "../skills/enums";
import { CombatCardId } from "../combatCards/enums";
import { Character } from "@/types/character";
import { PastureId, PlotId } from "./enums";

export const testCharacter: Character = {
  name: "Riley",
  loadout: {
    head: ItemId.BRONZE_HELMET,
    neck: null,
    shoulder: null,
    cloak: null,
    chest: ItemId.BRONZE_CHESTPLATE,
    waist: ItemId.BRONZE_BELT,
    leg: ItemId.BRONZE_PLATELEGGINGS,
    wrist: null,
    glove: ItemId.BRONZE_GAUNTLETS,
    feet: null,
    ring1: null,
    ring2: null,
    trinket1: null,
    trinket2: null,
    leftHand: ItemId.IRON_SWORD,
    rightHand: ItemId.IRON_SHIELD,
    flask1: null,
    flask2: null,
  },
  inventory: {
    [ItemId.GOLD]: 10000,
    [ItemId.COPPER_ORE]: 10,
    [ItemId.GEODE]: 1,
    [ItemId.TIN_ORE]: 10,
    [ItemId.COAL]: 10,
    [ItemId.BRONZE_BAR]: 100,
  },
  upgrades: new Set([
    UpgradeId.BASIC_PICKAXE,
    UpgradeId.BRONZE_PICKAXE,
    UpgradeId.BASIC_HAMMER,
    UpgradeId.BASIC_ANVIL,
    UpgradeId.BASIC_FORGE,
    UpgradeId.BASIC_BED,
    UpgradeId.COAL_MINE_CANERY,
  ]),
  skills: {
    [SkillId.MARTIAL]: {
      level: 5,
      experience: 0,
    },
    [SkillId.MAGIC]: {
      level: 10,
      experience: 0,
    },
    [SkillId.PROSPECTING]: {
      level: 10,
      experience: 300,
    },
    [SkillId.SMITHING]: {
      level: 60,
      experience: 10737418239,
    },
    [SkillId.ATHLETICS]: {
      level: 15,
      experience: 0,
    },
    [SkillId.CRAFTING]: {
      level: 1,
      experience: 0,
    },
    [SkillId.AGRICULTURE]: {
      level: 1,
      experience: 0,
    },
    [SkillId.ALCHEMY]: {
      level: 1,
      experience: 0,
    },
    [SkillId.ENCHANTING]: {
      level: 1,
      experience: 0,
    },
    [SkillId.STEALTH]: {
      level: 15,
      experience: 0,
    },
  },
  milestones: new Set([]),
  deck: {
    equppedMartial: [
      CombatCardId.SLICE,
      CombatCardId.SLICE,
      CombatCardId.SLICE,
      CombatCardId.DEFEND,
      CombatCardId.DEFEND,
      CombatCardId.DEFEND,
    ],
    unequippedMartial: [],
    equippedMagic: [],
    unequippedMagic: [],
  },
  working: {
    workingSkill: null,
    workingTask: null,
    startTime: null,
    agriculture: {
      botany: {
        [PlotId.PLOT_ONE]: { seedId: null, startTime: null },
        [PlotId.PLOT_TWO]: { seedId: null, startTime: null },
        [PlotId.PLOT_THREE]: { seedId: null, startTime: null },
        [PlotId.PLOT_FOUR]: { seedId: null, startTime: null },
        [PlotId.PLOT_FIVE]: { seedId: null, startTime: null },
        [PlotId.PLOT_SIX]: { seedId: null, startTime: null },
        [PlotId.PLOT_SEVEN]: { seedId: null, startTime: null },
        [PlotId.PLOT_EIGHT]: { seedId: null, startTime: null },
      },
      ranching: {
        [PastureId.PASTURE_ONE]: { livestockId: null, startTime: null },
        [PastureId.PASTURE_TWO]: { livestockId: null, startTime: null },
        [PastureId.PASTURE_THREE]: { livestockId: null, startTime: null },
        [PastureId.PASTURE_FOUR]: { livestockId: null, startTime: null },
        [PastureId.PASTURE_FIVE]: { livestockId: null, startTime: null },
        [PastureId.PASTURE_SIX]: { livestockId: null, startTime: null },
        [PastureId.PASTURE_SEVEN]: { livestockId: null, startTime: null },
        [PastureId.PASTURE_EIGHT]: { livestockId: null, startTime: null },
      },
    },
  },
};

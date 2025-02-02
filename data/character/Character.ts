import { ItemId } from "../items/enums";
import { UpgradeId } from "../upgrades/enums";
import { SkillId } from "../skills/enums";
import { CombatCardId } from "../combatCards/enums";
import { Character, Inventory } from "@/types/character";
import { PastureId, PlotId, Slot } from "./enums";

const initializeInventory = (): Inventory => {
  let inventory = {} as Inventory;
  for (let itemId in ItemId) {
    inventory[itemId as ItemId] = 0;
  }
  inventory[ItemId.GOLD] = 10000;
  inventory[ItemId.COPPER_ORE] = 10;
  inventory[ItemId.GEODE] = 1;
  inventory[ItemId.TIN_ORE] = 10;
  inventory[ItemId.COAL] = 10;
  inventory[ItemId.BRONZE_BAR] = 100;
  inventory[ItemId.GINSENG_SEED] = 10;

  return inventory;
};

export const testCharacter: Character = {
  name: "Riley",
  loadout: {
    [Slot.HEAD]: ItemId.BRONZE_HELMET,
    [Slot.NECK]: null,
    [Slot.SHOULDER]: null,
    [Slot.CLOAK]: null,
    [Slot.CHEST]: ItemId.BRONZE_CHESTPLATE,
    [Slot.WAIST]: ItemId.BRONZE_BELT,
    [Slot.LEG]: ItemId.BRONZE_PLATELEGGINGS,
    [Slot.WRIST]: null,
    [Slot.GLOVE]: ItemId.BRONZE_GAUNTLETS,
    [Slot.FEET]: null,
    [Slot.RING1]: null,
    [Slot.RING2]: null,
    [Slot.TRINKET1]: null,
    [Slot.TRINKET2]: null,
    [Slot.LEFT_HAND]: ItemId.IRON_SWORD,
    [Slot.RIGHT_HAND]: ItemId.IRON_SHIELD,
    [Slot.FLASK1]: null,
    [Slot.FLASK2]: null,
  },
  inventory: initializeInventory(),
  upgrades: new Set([
    UpgradeId.BASIC_THIEVES_TOOLS,
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
      level: 60,
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
    workingTask: null,
    startTime: null,
    agriculture: {
      botany: {
        [PlotId.PLOT_ONE]: { taskId: null, startTime: null },
        [PlotId.PLOT_TWO]: { taskId: null, startTime: null },
        [PlotId.PLOT_THREE]: { taskId: null, startTime: null },
        [PlotId.PLOT_FOUR]: { taskId: null, startTime: null },
        [PlotId.PLOT_FIVE]: { taskId: null, startTime: null },
        [PlotId.PLOT_SIX]: { taskId: null, startTime: null },
        [PlotId.PLOT_SEVEN]: { taskId: null, startTime: null },
        [PlotId.PLOT_EIGHT]: { taskId: null, startTime: null },
      },
      ranching: {
        [PastureId.PASTURE_ONE]: { taskId: null, startTime: null },
        [PastureId.PASTURE_TWO]: { taskId: null, startTime: null },
        [PastureId.PASTURE_THREE]: { taskId: null, startTime: null },
        [PastureId.PASTURE_FOUR]: { taskId: null, startTime: null },
        [PastureId.PASTURE_FIVE]: { taskId: null, startTime: null },
        [PastureId.PASTURE_SIX]: { taskId: null, startTime: null },
        [PastureId.PASTURE_SEVEN]: { taskId: null, startTime: null },
        [PastureId.PASTURE_EIGHT]: { taskId: null, startTime: null },
      },
    },
  },
};

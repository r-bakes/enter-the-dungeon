import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Anvil, Bird, Heater } from "lucide-react";
import { smithing } from "../skills/smithing";
import { ModifierType } from "../modifiers/enums";
import { HomeRooms } from "../menus/enums";
import { Upgrade } from "@/types/upgrades";
import { taskTable } from "../tasks/tasks";
import { UpgradeId } from "./enums";
import { ItemId } from "../items/enums";
import { TaskId } from "../tasks/enum";

export const miscUpgrades: { [id in UpgradeId]?: Upgrade } = {
  [UpgradeId.BASIC_FORGE]: {
    id: UpgradeId.BASIC_FORGE,
    name: "Basic Forge",
    description: "Your first forge – humble yet reliable.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_FORGE,
    previous: null,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 0,
        [ModifierType.DOUBLE_CHANCE]: 0,
        [ModifierType.PRODUCTION_MULTIPLIER]: 0,
        [ModifierType.EXPERIENCE]: 0,
      },
    },
    requiresItems: { [ItemId.GOLD]: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.BASIC_ANVIL]: {
    id: UpgradeId.BASIC_ANVIL,
    name: "Basic Anvil",
    description: "A sturdy anvil to begin your craft.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_ANVIL,
    previous: null,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 0,
        [ModifierType.DOUBLE_CHANCE]: 0,
      },
    },
    requiresItems: { [ItemId.GOLD]: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.COAL_MINE_CANERY]: {
    id: UpgradeId.COAL_MINE_CANERY,
    name: "Coal Mine Canery",
    description:
      "Your first foray into mining – the coal mine is now under your command.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.SCAFFOLDING,
    previous: null,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 2,
      },
    },
    requiresItems: { [ItemId.GOLD]: 1000000 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },

  // Forge Upgrade Chain
  [UpgradeId.BRONZE_FORGE]: {
    id: UpgradeId.BRONZE_FORGE,
    name: "Bronze Forge",
    description:
      "The forge burns with a bronze glow, increasing all smithing attributes by +1.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_FORGE,
    previous: UpgradeId.BASIC_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 1,
        [ModifierType.DOUBLE_CHANCE]: 1,
        [ModifierType.PRODUCTION_MULTIPLIER]: 1,
        [ModifierType.EXPERIENCE]: 1,
      },
    },
    requiresItems: { [ItemId.GOLD]: 1000 },
    requiresUpgrades: new Set([UpgradeId.BASIC_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.IRON_FORGE]: {
    id: UpgradeId.IRON_FORGE,
    name: "Iron Forge",
    description:
      "Bolstered by iron, your forge now refines your craft with a +2 bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_FORGE,
    previous: UpgradeId.BRONZE_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 2,
        [ModifierType.DOUBLE_CHANCE]: 2,
        [ModifierType.PRODUCTION_MULTIPLIER]: 2,
        [ModifierType.EXPERIENCE]: 2,
      },
    },
    requiresItems: { [ItemId.GOLD]: 2000 },
    requiresUpgrades: new Set([UpgradeId.BRONZE_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.STEEL_FORGE]: {
    id: UpgradeId.STEEL_FORGE,
    name: "Steel Forge",
    description:
      "The steel heat sharpens your skills, bestowing a +3 bonus to all attributes.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_FORGE,
    previous: UpgradeId.IRON_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 3,
        [ModifierType.DOUBLE_CHANCE]: 3,
        [ModifierType.PRODUCTION_MULTIPLIER]: 3,
        [ModifierType.EXPERIENCE]: 3,
      },
    },
    requiresItems: { [ItemId.GOLD]: 3000 },
    requiresUpgrades: new Set([UpgradeId.IRON_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.MITHRIL_FORGE]: {
    id: UpgradeId.MITHRIL_FORGE,
    name: "Mithril Forge",
    description:
      "Light as mithril and resilient as hope, this forge grants a +4 bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_FORGE,
    previous: UpgradeId.STEEL_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 4,
        [ModifierType.DOUBLE_CHANCE]: 4,
        [ModifierType.PRODUCTION_MULTIPLIER]: 4,
        [ModifierType.EXPERIENCE]: 4,
      },
    },
    requiresItems: { [ItemId.GOLD]: 4000 },
    requiresUpgrades: new Set([UpgradeId.STEEL_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ADAMANT_FORGE]: {
    id: UpgradeId.ADAMANT_FORGE,
    name: "Adamant Forge",
    description:
      "Forged in the fires of battle, this upgrade adds a +5 boost to your craft.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ENCHANTED_FORGE,
    previous: UpgradeId.MITHRIL_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 5,
        [ModifierType.DOUBLE_CHANCE]: 5,
        [ModifierType.PRODUCTION_MULTIPLIER]: 5,
        [ModifierType.EXPERIENCE]: 5,
      },
    },
    requiresItems: { [ItemId.GOLD]: 5000 },
    requiresUpgrades: new Set([UpgradeId.MITHRIL_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ENCHANTED_FORGE]: {
    id: UpgradeId.ENCHANTED_FORGE,
    name: "Enchanted Forge",
    description:
      "Magic weaves through the embers, granting a +6 mystical bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.CELESTIAL_FORGE,
    previous: UpgradeId.ADAMANT_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 6,
        [ModifierType.DOUBLE_CHANCE]: 6,
        [ModifierType.PRODUCTION_MULTIPLIER]: 6,
        [ModifierType.EXPERIENCE]: 6,
      },
    },
    requiresItems: { [ItemId.GOLD]: 6000 },
    requiresUpgrades: new Set([UpgradeId.ADAMANT_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.CELESTIAL_FORGE]: {
    id: UpgradeId.CELESTIAL_FORGE,
    name: "Celestial Forge",
    description: "Bathed in starlight, this forge raises your abilities by +7.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.DIVINE_FORGE,
    previous: UpgradeId.ENCHANTED_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 7,
        [ModifierType.DOUBLE_CHANCE]: 7,
        [ModifierType.PRODUCTION_MULTIPLIER]: 7,
        [ModifierType.EXPERIENCE]: 7,
      },
    },
    requiresItems: { [ItemId.GOLD]: 7000 },
    requiresUpgrades: new Set([UpgradeId.ENCHANTED_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.DIVINE_FORGE]: {
    id: UpgradeId.DIVINE_FORGE,
    name: "Divine Forge",
    description:
      "Blessed by the gods, your forge now bestows a +8 bonus to your craft.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ARCANE_FORGE,
    previous: UpgradeId.CELESTIAL_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 8,
        [ModifierType.DOUBLE_CHANCE]: 8,
        [ModifierType.PRODUCTION_MULTIPLIER]: 8,
        [ModifierType.EXPERIENCE]: 8,
      },
    },
    requiresItems: { [ItemId.GOLD]: 8000 },
    requiresUpgrades: new Set([UpgradeId.CELESTIAL_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ARCANE_FORGE]: {
    id: UpgradeId.ARCANE_FORGE,
    name: "Arcane Forge",
    description: "Secrets of the arcane empower your work – gain a +9 boost.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ETHEREAL_FORGE,
    previous: UpgradeId.DIVINE_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 9,
        [ModifierType.DOUBLE_CHANCE]: 9,
        [ModifierType.PRODUCTION_MULTIPLIER]: 9,
        [ModifierType.EXPERIENCE]: 9,
      },
    },
    requiresItems: { [ItemId.GOLD]: 9000 },
    requiresUpgrades: new Set([UpgradeId.DIVINE_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ETHEREAL_FORGE]: {
    id: UpgradeId.ETHEREAL_FORGE,
    name: "Ethereal Forge",
    description:
      "Transcending the mortal realm, your forge grants a +10 mystical bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.RUNIC_FORGE,
    previous: UpgradeId.ARCANE_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.DOUBLE_CHANCE]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 10,
        [ModifierType.EXPERIENCE]: 10,
      },
    },
    requiresItems: { [ItemId.GOLD]: 10000 },
    requiresUpgrades: new Set([UpgradeId.ARCANE_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.RUNIC_FORGE]: {
    id: UpgradeId.RUNIC_FORGE,
    name: "Runic Forge",
    description:
      "Ancient runes inscribed on metal add a +11 bonus to your craft.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.FABLED_FORGE,
    previous: UpgradeId.ETHEREAL_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 11,
        [ModifierType.DOUBLE_CHANCE]: 11,
        [ModifierType.PRODUCTION_MULTIPLIER]: 11,
        [ModifierType.EXPERIENCE]: 11,
      },
    },
    requiresItems: { [ItemId.GOLD]: 11000 },
    requiresUpgrades: new Set([UpgradeId.ETHEREAL_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.FABLED_FORGE]: {
    id: UpgradeId.FABLED_FORGE,
    name: "Fabled Forge",
    description:
      "Stories of old recount the power of this forge – gain a +12 bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MYSTIC_FORGE,
    previous: UpgradeId.RUNIC_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 12,
        [ModifierType.DOUBLE_CHANCE]: 12,
        [ModifierType.PRODUCTION_MULTIPLIER]: 12,
        [ModifierType.EXPERIENCE]: 12,
      },
    },
    requiresItems: { [ItemId.GOLD]: 12000 },
    requiresUpgrades: new Set([UpgradeId.RUNIC_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.MYSTIC_FORGE]: {
    id: UpgradeId.MYSTIC_FORGE,
    name: "Mystic Forge",
    description:
      "Enshrouded in mystery, this forge bestows a +13 bonus to your creations.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.LEGENDARY_FORGE,
    previous: UpgradeId.FABLED_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 13,
        [ModifierType.DOUBLE_CHANCE]: 13,
        [ModifierType.PRODUCTION_MULTIPLIER]: 13,
        [ModifierType.EXPERIENCE]: 13,
      },
    },
    requiresItems: { [ItemId.GOLD]: 13000 },
    requiresUpgrades: new Set([UpgradeId.FABLED_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.LEGENDARY_FORGE]: {
    id: UpgradeId.LEGENDARY_FORGE,
    name: "Legendary Forge",
    description:
      "In the fires of legend, your forge now offers a +14 bonus to your art.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.HEROIC_FORGE,
    previous: UpgradeId.MYSTIC_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 14,
        [ModifierType.DOUBLE_CHANCE]: 14,
        [ModifierType.PRODUCTION_MULTIPLIER]: 14,
        [ModifierType.EXPERIENCE]: 14,
      },
    },
    requiresItems: { [ItemId.GOLD]: 14000 },
    requiresUpgrades: new Set([UpgradeId.MYSTIC_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.HEROIC_FORGE]: {
    id: UpgradeId.HEROIC_FORGE,
    name: "Heroic Forge",
    description:
      "The fire of heroes fuels this forge – now granting a +15 bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.GLORIOUS_FORGE,
    previous: UpgradeId.LEGENDARY_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 15,
        [ModifierType.DOUBLE_CHANCE]: 15,
        [ModifierType.PRODUCTION_MULTIPLIER]: 15,
        [ModifierType.EXPERIENCE]: 15,
      },
    },
    requiresItems: { [ItemId.GOLD]: 15000 },
    requiresUpgrades: new Set([UpgradeId.LEGENDARY_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.GLORIOUS_FORGE]: {
    id: UpgradeId.GLORIOUS_FORGE,
    name: "Glorious Forge",
    description:
      "Radiating brilliance, this forge provides a +16 bonus to your craft.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MYTHIC_FORGE,
    previous: UpgradeId.HEROIC_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 16,
        [ModifierType.DOUBLE_CHANCE]: 16,
        [ModifierType.PRODUCTION_MULTIPLIER]: 16,
        [ModifierType.EXPERIENCE]: 16,
      },
    },
    requiresItems: { [ItemId.GOLD]: 16000 },
    requiresUpgrades: new Set([UpgradeId.HEROIC_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.MYTHIC_FORGE]: {
    id: UpgradeId.MYTHIC_FORGE,
    name: "Mythic Forge",
    description:
      "Whispers of ancient power imbue this forge – bestowing a +17 bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ANCIENT_FORGE,
    previous: UpgradeId.GLORIOUS_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 17,
        [ModifierType.DOUBLE_CHANCE]: 17,
        [ModifierType.PRODUCTION_MULTIPLIER]: 17,
        [ModifierType.EXPERIENCE]: 17,
      },
    },
    requiresItems: { [ItemId.GOLD]: 17000 },
    requiresUpgrades: new Set([UpgradeId.GLORIOUS_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ANCIENT_FORGE]: {
    id: UpgradeId.ANCIENT_FORGE,
    name: "Ancient Forge",
    description:
      "Time-honored and steeped in tradition, this forge grants a +18 bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ETERNAL_FORGE,
    previous: UpgradeId.MYTHIC_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 18,
        [ModifierType.DOUBLE_CHANCE]: 18,
        [ModifierType.PRODUCTION_MULTIPLIER]: 18,
        [ModifierType.EXPERIENCE]: 18,
      },
    },
    requiresItems: { [ItemId.GOLD]: 18000 },
    requiresUpgrades: new Set([UpgradeId.MYTHIC_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ETERNAL_FORGE]: {
    id: UpgradeId.ETERNAL_FORGE,
    name: "Eternal Forge",
    description:
      "Beyond time itself, this forge offers a +19 bonus to your artistry.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.OMNIFORGE,
    previous: UpgradeId.ANCIENT_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 19,
        [ModifierType.DOUBLE_CHANCE]: 19,
        [ModifierType.PRODUCTION_MULTIPLIER]: 19,
        [ModifierType.EXPERIENCE]: 19,
      },
    },
    requiresItems: { [ItemId.GOLD]: 19000 },
    requiresUpgrades: new Set([UpgradeId.ANCIENT_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.OMNIFORGE]: {
    id: UpgradeId.OMNIFORGE,
    name: "Omniforge",
    description:
      "The pinnacle of forging – the ultimate upgrade that grants a +20 bonus.",
    icon: Heater,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: UpgradeId.ETERNAL_FORGE,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 20,
        [ModifierType.DOUBLE_CHANCE]: 20,
        [ModifierType.PRODUCTION_MULTIPLIER]: 20,
        [ModifierType.EXPERIENCE]: 20,
      },
    },
    requiresItems: { [ItemId.GOLD]: 20000 },
    requiresUpgrades: new Set([UpgradeId.ETERNAL_FORGE]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },

  // Anvil Upgrade Chain
  [UpgradeId.BRONZE_ANVIL]: {
    id: UpgradeId.BRONZE_ANVIL,
    name: "Bronze Anvil",
    description: "A modest bronze anvil that improves your efficiency by +1.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_ANVIL,
    previous: UpgradeId.BASIC_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 1,
        [ModifierType.DOUBLE_CHANCE]: 1,
      },
    },
    requiresItems: { [ItemId.GOLD]: 1000 },
    requiresUpgrades: new Set([UpgradeId.BASIC_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.IRON_ANVIL]: {
    id: UpgradeId.IRON_ANVIL,
    name: "Iron Anvil",
    description:
      "Reinforced with iron, this anvil grants a +2 boost to your craft.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_ANVIL,
    previous: UpgradeId.BRONZE_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 2,
        [ModifierType.DOUBLE_CHANCE]: 2,
      },
    },
    requiresItems: { [ItemId.GOLD]: 2000 },
    requiresUpgrades: new Set([UpgradeId.BRONZE_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.STEEL_ANVIL]: {
    id: UpgradeId.STEEL_ANVIL,
    name: "Steel Anvil",
    description: "Forged in fire, this anvil increases your efficiency by +3.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_ANVIL,
    previous: UpgradeId.IRON_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 3,
        [ModifierType.DOUBLE_CHANCE]: 3,
      },
    },
    requiresItems: { [ItemId.GOLD]: 3000 },
    requiresUpgrades: new Set([UpgradeId.IRON_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.MITHRIL_ANVIL]: {
    id: UpgradeId.MITHRIL_ANVIL,
    name: "Mithril Anvil",
    description:
      "Light and strong, the mithril anvil provides a +4 enhancement.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_ANVIL,
    previous: UpgradeId.STEEL_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 4,
        [ModifierType.DOUBLE_CHANCE]: 4,
      },
    },
    requiresItems: { [ItemId.GOLD]: 4000 },
    requiresUpgrades: new Set([UpgradeId.STEEL_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ADAMANT_ANVIL]: {
    id: UpgradeId.ADAMANT_ANVIL,
    name: "Adamant Anvil",
    description:
      "Tempered in the heat of battle, this anvil bestows a +5 bonus.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ENCHANTED_ANVIL,
    previous: UpgradeId.MITHRIL_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 5,
        [ModifierType.DOUBLE_CHANCE]: 5,
      },
    },
    requiresItems: { [ItemId.GOLD]: 5000 },
    requiresUpgrades: new Set([UpgradeId.MITHRIL_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ENCHANTED_ANVIL]: {
    id: UpgradeId.ENCHANTED_ANVIL,
    name: "Enchanted Anvil",
    description: "Mystic energies infuse this anvil, granting a +6 bonus.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.CELESTIAL_ANVIL,
    previous: UpgradeId.ADAMANT_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 6,
        [ModifierType.DOUBLE_CHANCE]: 6,
      },
    },
    requiresItems: { [ItemId.GOLD]: 6000 },
    requiresUpgrades: new Set([UpgradeId.ADAMANT_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.CELESTIAL_ANVIL]: {
    id: UpgradeId.CELESTIAL_ANVIL,
    name: "Celestial Anvil",
    description:
      "Bathed in cosmic radiance, this anvil offers a +7 enhancement.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.DIVINE_ANVIL,
    previous: UpgradeId.ENCHANTED_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 7,
        [ModifierType.DOUBLE_CHANCE]: 7,
      },
    },
    requiresItems: { [ItemId.GOLD]: 7000 },
    requiresUpgrades: new Set([UpgradeId.ENCHANTED_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.DIVINE_ANVIL]: {
    id: UpgradeId.DIVINE_ANVIL,
    name: "Divine Anvil",
    description: "Heavenly favor grants this anvil a +8 boost in your craft.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ARCANE_ANVIL,
    previous: UpgradeId.CELESTIAL_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 8,
        [ModifierType.DOUBLE_CHANCE]: 8,
      },
    },
    requiresItems: { [ItemId.GOLD]: 8000 },
    requiresUpgrades: new Set([UpgradeId.CELESTIAL_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ARCANE_ANVIL]: {
    id: UpgradeId.ARCANE_ANVIL,
    name: "Arcane Anvil",
    description: "Infused with eldritch lore, this anvil delivers a +9 bonus.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ETHEREAL_ANVIL,
    previous: UpgradeId.DIVINE_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 9,
        [ModifierType.DOUBLE_CHANCE]: 9,
      },
    },
    requiresItems: { [ItemId.GOLD]: 9000 },
    requiresUpgrades: new Set([UpgradeId.DIVINE_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ETHEREAL_ANVIL]: {
    id: UpgradeId.ETHEREAL_ANVIL,
    name: "Ethereal Anvil",
    description:
      "Otherworldly forces transform this anvil into a +10 beacon of craft.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.RUNIC_ANVIL,
    previous: UpgradeId.ARCANE_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.DOUBLE_CHANCE]: 10,
      },
    },
    requiresItems: { [ItemId.GOLD]: 10000 },
    requiresUpgrades: new Set([UpgradeId.ARCANE_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.RUNIC_ANVIL]: {
    id: UpgradeId.RUNIC_ANVIL,
    name: "Runic Anvil",
    description: "Ancient runes carved into its surface grant a +11 boost.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.FABLED_ANVIL,
    previous: UpgradeId.ETHEREAL_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 11,
        [ModifierType.DOUBLE_CHANCE]: 11,
      },
    },
    requiresItems: { [ItemId.GOLD]: 11000 },
    requiresUpgrades: new Set([UpgradeId.ETHEREAL_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.FABLED_ANVIL]: {
    id: UpgradeId.FABLED_ANVIL,
    name: "Fabled Anvil",
    description:
      "Stories tell of its power – this anvil provides a +12 enhancement.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MYSTIC_ANVIL,
    previous: UpgradeId.RUNIC_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 12,
        [ModifierType.DOUBLE_CHANCE]: 12,
      },
    },
    requiresItems: { [ItemId.GOLD]: 12000 },
    requiresUpgrades: new Set([UpgradeId.RUNIC_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.MYSTIC_ANVIL]: {
    id: UpgradeId.MYSTIC_ANVIL,
    name: "Mystic Anvil",
    description:
      "Enshrouded in mystery, this anvil grants a +13 bonus to your craft.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.LEGENDARY_ANVIL,
    previous: UpgradeId.FABLED_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 13,
        [ModifierType.DOUBLE_CHANCE]: 13,
      },
    },
    requiresItems: { [ItemId.GOLD]: 13000 },
    requiresUpgrades: new Set([UpgradeId.FABLED_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.LEGENDARY_ANVIL]: {
    id: UpgradeId.LEGENDARY_ANVIL,
    name: "Legendary Anvil",
    description:
      "A storied tool of the ages, granting a +14 boost to your abilities.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.HEROIC_ANVIL,
    previous: UpgradeId.MYSTIC_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 14,
        [ModifierType.DOUBLE_CHANCE]: 14,
      },
    },
    requiresItems: { [ItemId.GOLD]: 14000 },
    requiresUpgrades: new Set([UpgradeId.MYSTIC_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.HEROIC_ANVIL]: {
    id: UpgradeId.HEROIC_ANVIL,
    name: "Heroic Anvil",
    description:
      "The spirit of heroes empowers this anvil, granting a +15 bonus.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.GLORIOUS_ANVIL,
    previous: UpgradeId.LEGENDARY_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 15,
        [ModifierType.DOUBLE_CHANCE]: 15,
      },
    },
    requiresItems: { [ItemId.GOLD]: 15000 },
    requiresUpgrades: new Set([UpgradeId.LEGENDARY_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.GLORIOUS_ANVIL]: {
    id: UpgradeId.GLORIOUS_ANVIL,
    name: "Glorious Anvil",
    description:
      "Shining with splendor, this anvil provides a +16 enhancement.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MYTHIC_ANVIL,
    previous: UpgradeId.HEROIC_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 16,
        [ModifierType.DOUBLE_CHANCE]: 16,
      },
    },
    requiresItems: { [ItemId.GOLD]: 16000 },
    requiresUpgrades: new Set([UpgradeId.HEROIC_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.MYTHIC_ANVIL]: {
    id: UpgradeId.MYTHIC_ANVIL,
    name: "Mythic Anvil",
    description:
      "Legends whisper of its power – this anvil grants a +17 bonus.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ANCIENT_ANVIL,
    previous: UpgradeId.GLORIOUS_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 17,
        [ModifierType.DOUBLE_CHANCE]: 17,
      },
    },
    requiresItems: { [ItemId.GOLD]: 17000 },
    requiresUpgrades: new Set([UpgradeId.GLORIOUS_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ANCIENT_ANVIL]: {
    id: UpgradeId.ANCIENT_ANVIL,
    name: "Ancient Anvil",
    description: "Time-tested and venerable, this anvil grants a +18 bonus.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ETERNAL_ANVIL,
    previous: UpgradeId.MYTHIC_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 18,
        [ModifierType.DOUBLE_CHANCE]: 18,
      },
    },
    requiresItems: { [ItemId.GOLD]: 18000 },
    requiresUpgrades: new Set([UpgradeId.MYTHIC_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.ETERNAL_ANVIL]: {
    id: UpgradeId.ETERNAL_ANVIL,
    name: "Eternal Anvil",
    description: "Timeless and unyielding, this anvil delivers a +19 bonus.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.OMNI_ANVIL,
    previous: UpgradeId.ANCIENT_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 19,
        [ModifierType.DOUBLE_CHANCE]: 19,
      },
    },
    requiresItems: { [ItemId.GOLD]: 19000 },
    requiresUpgrades: new Set([UpgradeId.ANCIENT_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.OMNI_ANVIL]: {
    id: UpgradeId.OMNI_ANVIL,
    name: "Omni Anvil",
    description:
      "The ultimate tool of creation – an anvil that provides a +20 bonus.",
    icon: Anvil,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: UpgradeId.ETERNAL_ANVIL,
    modifier: {
      targets: Object.keys(smithing.tasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 20,
        [ModifierType.DOUBLE_CHANCE]: 20,
      },
    },
    requiresItems: { [ItemId.GOLD]: 20000 },
    requiresUpgrades: new Set([UpgradeId.ETERNAL_ANVIL]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },

  // Coal Mine Canery Themed Upgrade Chain
  [UpgradeId.SCAFFOLDING]: {
    id: UpgradeId.SCAFFOLDING,
    name: "Reinforced Scaffolding",
    description:
      "Robust scaffolding supports deeper mining – production multiplier is now x3.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MINE_RAILS,
    previous: UpgradeId.COAL_MINE_CANERY,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 3,
      },
    },
    requiresItems: { [ItemId.GOLD]: 1000000 },
    requiresUpgrades: new Set([UpgradeId.COAL_MINE_CANERY]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.MINE_RAILS]: {
    id: UpgradeId.MINE_RAILS,
    name: "Sturdy Mine Rails",
    description:
      "Improved rails expedite coal transport – multiplier increased to x4.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.PRECISION_DRILLING,
    previous: UpgradeId.SCAFFOLDING,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 4,
      },
    },
    requiresItems: { [ItemId.GOLD]: 2000000 },
    requiresUpgrades: new Set([UpgradeId.SCAFFOLDING]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.PRECISION_DRILLING]: {
    id: UpgradeId.PRECISION_DRILLING,
    name: "Precision Drilling Rig",
    description:
      "State-of-the-art drilling extracts more coal – multiplier now x5.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.GLOWING_LANTERNS,
    previous: UpgradeId.MINE_RAILS,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 5,
      },
    },
    requiresItems: { [ItemId.GOLD]: 3000000 },
    requiresUpgrades: new Set([UpgradeId.MINE_RAILS]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.GLOWING_LANTERNS]: {
    id: UpgradeId.GLOWING_LANTERNS,
    name: "Glowing Lanterns",
    description:
      "Enchanted lights brighten the depths – multiplier raised to x6.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.VENTILATION_SYSTEM,
    previous: UpgradeId.PRECISION_DRILLING,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 6,
      },
    },
    requiresItems: { [ItemId.GOLD]: 4000000 },
    requiresUpgrades: new Set([UpgradeId.PRECISION_DRILLING]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.VENTILATION_SYSTEM]: {
    id: UpgradeId.VENTILATION_SYSTEM,
    name: "Ventilation System",
    description:
      "Improved air flow keeps miners fresh – multiplier increased to x7.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADVANCED_EXTRACTORS,
    previous: UpgradeId.GLOWING_LANTERNS,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 7,
      },
    },
    requiresItems: { [ItemId.GOLD]: 5000000 },
    requiresUpgrades: new Set([UpgradeId.GLOWING_LANTERNS]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.ADVANCED_EXTRACTORS]: {
    id: UpgradeId.ADVANCED_EXTRACTORS,
    name: "Advanced Ore Extractors",
    description: "High-tech machinery increases output – multiplier now at x8.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.DEEP_SHAFT_ELEVATORS,
    previous: UpgradeId.VENTILATION_SYSTEM,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 8,
      },
    },
    requiresItems: { [ItemId.GOLD]: 6000000 },
    requiresUpgrades: new Set([UpgradeId.VENTILATION_SYSTEM]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.DEEP_SHAFT_ELEVATORS]: {
    id: UpgradeId.DEEP_SHAFT_ELEVATORS,
    name: "Deep Shaft Elevators",
    description: "Elevators reach the deepest veins – multiplier climbs to x9.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.RUNIC_BLAST_DOORS,
    previous: UpgradeId.ADVANCED_EXTRACTORS,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 9,
      },
    },
    requiresItems: { [ItemId.GOLD]: 7000000 },
    requiresUpgrades: new Set([UpgradeId.ADVANCED_EXTRACTORS]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.RUNIC_BLAST_DOORS]: {
    id: UpgradeId.RUNIC_BLAST_DOORS,
    name: "Runic Blast Doors",
    description:
      "Mystic doors secure the mine, boosting the multiplier to x10.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MYSTIC_ORE_SENSORS,
    previous: UpgradeId.DEEP_SHAFT_ELEVATORS,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 10,
      },
    },
    requiresItems: { [ItemId.GOLD]: 8000000 },
    requiresUpgrades: new Set([UpgradeId.DEEP_SHAFT_ELEVATORS]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.MYSTIC_ORE_SENSORS]: {
    id: UpgradeId.MYSTIC_ORE_SENSORS,
    name: "Mystic Ore Sensors",
    description:
      "Enchanted sensors reveal hidden seams – multiplier raised to x11.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ENCHANTED_EXTRACTION,
    previous: UpgradeId.RUNIC_BLAST_DOORS,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 11,
      },
    },
    requiresItems: { [ItemId.GOLD]: 9000000 },
    requiresUpgrades: new Set([UpgradeId.RUNIC_BLAST_DOORS]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  [UpgradeId.ENCHANTED_EXTRACTION]: {
    id: UpgradeId.ENCHANTED_EXTRACTION,
    name: "Enchanted Extraction System",
    description:
      "A marvel of magic and engineering – the ultimate upgrade yields a multiplier of x12.",
    icon: Bird,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: UpgradeId.MYSTIC_ORE_SENSORS,
    modifier: {
      targets: [taskTable.MINE_COAL.id],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 12,
      },
    },
    requiresItems: { [ItemId.GOLD]: 10000000 },
    requiresUpgrades: new Set([UpgradeId.MYSTIC_ORE_SENSORS]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
};

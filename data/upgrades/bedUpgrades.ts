import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { HomeRooms } from "@/data/menus/enums";
import { ModifierType } from "@/data/modifiers/enums";
import { Upgrade } from "@/types/upgrades";
import { Bed } from "lucide-react";
import { UpgradeId } from "./enums";
import { TaskId } from "../tasks/enum";
import { ItemId } from "../items/enums";
import { MilestoneId } from "../milestones/enums";

export const bedUpgrades: { [id in UpgradeId]?: Upgrade } = {
  [UpgradeId.BASIC_BED]: {
    id: UpgradeId.BASIC_BED,
    name: "Basic Bed",
    description: "A simple bed to rest. (+1% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.STRAW_BED,
    previous: null,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 1 },
    },
    requiresItems: { [ItemId.GOLD]: 0 },
    requiresUpgrades: new Set<UpgradeId>([]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.STRAW_BED]: {
    id: UpgradeId.STRAW_BED,
    name: "Straw Bed",
    description: "A bed made of straw for better rest. (+2% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.COMFORTABLE_BED,
    previous: UpgradeId.BASIC_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 2 },
    },
    requiresItems: { [ItemId.GOLD]: 1000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BASIC_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.COMFORTABLE_BED]: {
    id: UpgradeId.COMFORTABLE_BED,
    name: "Comfortable Bed",
    description: "A comfortable bed for better rest. (+3% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.REFINED_BED,
    previous: UpgradeId.STRAW_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 3 },
    },
    requiresItems: { [ItemId.GOLD]: 100000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STRAW_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.REFINED_BED]: {
    id: UpgradeId.REFINED_BED,
    name: "Refined Bed",
    description: "A refined bed for superior rest. (+4% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.LUXURY_BED,
    previous: UpgradeId.COMFORTABLE_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 4 },
    },
    requiresItems: { [ItemId.GOLD]: 1000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.COMFORTABLE_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.LUXURY_BED]: {
    id: UpgradeId.LUXURY_BED,
    name: "Luxury Bed",
    description: "A luxury bed for the best rest. (+5% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.ROYAL_BED,
    previous: UpgradeId.REFINED_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 5 },
    },
    requiresItems: { [ItemId.GOLD]: 10000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.REFINED_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.ROYAL_BED]: {
    id: UpgradeId.ROYAL_BED,
    name: "Royal Bed",
    description: "A bed fit for royalty. (+6% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.REGAL_BED,
    previous: UpgradeId.LUXURY_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 6 },
    },
    requiresItems: { [ItemId.GOLD]: 100000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.LUXURY_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.REGAL_BED]: {
    id: UpgradeId.REGAL_BED,
    name: "Regal Bed",
    description: "A regal bed exuding elegance. (+7% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.IMPERIAL_BED,
    previous: UpgradeId.ROYAL_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 7 },
    },
    requiresItems: { [ItemId.GOLD]: 1000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ROYAL_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.IMPERIAL_BED]: {
    id: UpgradeId.IMPERIAL_BED,
    name: "Imperial Bed",
    description: "An imperial bed that commands respect. (+8% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.NOBLE_BED,
    previous: UpgradeId.REGAL_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 8 },
    },
    requiresItems: { [ItemId.GOLD]: 10000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.REGAL_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.NOBLE_BED]: {
    id: UpgradeId.NOBLE_BED,
    name: "Noble Bed",
    description: "A noble bed for the discerning sleeper. (+9% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.MAJESTIC_BED,
    previous: UpgradeId.IMPERIAL_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 9 },
    },
    requiresItems: { [ItemId.GOLD]: 100000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IMPERIAL_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.MAJESTIC_BED]: {
    id: UpgradeId.MAJESTIC_BED,
    name: "Majestic Bed",
    description: "A majestic bed that inspires dreams. (+10% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.OPULENT_BED,
    previous: UpgradeId.NOBLE_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 10 },
    },
    requiresItems: { [ItemId.GOLD]: 1000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.NOBLE_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.OPULENT_BED]: {
    id: UpgradeId.OPULENT_BED,
    name: "Opulent Bed",
    description: "An opulent bed with lavish comfort. (+11% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.EXQUISITE_BED,
    previous: UpgradeId.MAJESTIC_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 11 },
    },
    requiresItems: { [ItemId.GOLD]: 10000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MAJESTIC_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.EXQUISITE_BED]: {
    id: UpgradeId.EXQUISITE_BED,
    name: "Exquisite Bed",
    description: "An exquisite bed crafted for supreme relaxation. (+12% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.SUMPTUOUS_BED,
    previous: UpgradeId.OPULENT_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 12 },
    },
    requiresItems: { [ItemId.GOLD]: 100000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.OPULENT_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.SUMPTUOUS_BED]: {
    id: UpgradeId.SUMPTUOUS_BED,
    name: "Sumptuous Bed",
    description: "A sumptuous bed that pampers you every night. (+13% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.ELEGANT_BED,
    previous: UpgradeId.EXQUISITE_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 13 },
    },
    requiresItems: { [ItemId.GOLD]: 1000000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.EXQUISITE_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.ELEGANT_BED]: {
    id: UpgradeId.ELEGANT_BED,
    name: "Elegant Bed",
    description: "An elegant bed that exudes refined taste. (+14% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.GRANDIOSE_BED,
    previous: UpgradeId.SUMPTUOUS_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 14 },
    },
    requiresItems: { [ItemId.GOLD]: 10000000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.SUMPTUOUS_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.GRANDIOSE_BED]: {
    id: UpgradeId.GRANDIOSE_BED,
    name: "Grandiose Bed",
    description: "A grandiose bed that redefines luxury. (+15% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.SPLENDID_BED,
    previous: UpgradeId.ELEGANT_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 15 },
    },
    requiresItems: { [ItemId.GOLD]: 100000000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ELEGANT_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.SPLENDID_BED]: {
    id: UpgradeId.SPLENDID_BED,
    name: "Splendid Bed",
    description: "A splendid bed offering unmatched comfort. (+16% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.DIVINE_BED,
    previous: UpgradeId.GRANDIOSE_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 16 },
    },
    requiresItems: { [ItemId.GOLD]: 1000000000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.GRANDIOSE_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.DIVINE_BED]: {
    id: UpgradeId.DIVINE_BED,
    name: "Divine Bed",
    description: "A divine bed that feels like a blessing. (+17% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.CELESTIAL_BED,
    previous: UpgradeId.SPLENDID_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 17 },
    },
    requiresItems: { [ItemId.GOLD]: 10000000000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.SPLENDID_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.CELESTIAL_BED]: {
    id: UpgradeId.CELESTIAL_BED,
    name: "Celestial Bed",
    description: "A celestial bed that transcends earthly comfort. (+18% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.ELYSIAN_BED,
    previous: UpgradeId.DIVINE_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 18 },
    },
    requiresItems: { [ItemId.GOLD]: 100000000000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.DIVINE_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.ELYSIAN_BED]: {
    id: UpgradeId.ELYSIAN_BED,
    name: "Elysian Bed",
    description: "An Elysian bed for a taste of paradise. (+19% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: UpgradeId.TRANSCENDENT_BED,
    previous: UpgradeId.CELESTIAL_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 19 },
    },
    requiresItems: { [ItemId.GOLD]: 1000000000000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.CELESTIAL_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.TRANSCENDENT_BED]: {
    id: UpgradeId.TRANSCENDENT_BED,
    name: "Transcendent Bed",
    description: "The ultimate bed – transcending all mortal rest. (+20% EXP)",
    icon: Bed,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    next: null,
    previous: UpgradeId.ELYSIAN_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: { [ModifierType.EXPERIENCE]: 20 },
    },
    requiresItems: { [ItemId.GOLD]: 10000000000000000000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ELYSIAN_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
};

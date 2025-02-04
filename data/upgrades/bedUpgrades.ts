// src/data/upgrades/bedUpgrades.ts
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { HomeRooms } from "@/data/menus/enums";
import { ModifierType } from "@/data/modifiers/enums";
import { skillTable } from "@/data/skills/skills";
import { Upgrade } from "@/types/upgrades";
import { Bed } from "lucide-react";
import { UpgradeId } from "./enums";
import { SkillId } from "../skills/enums";
import { Skill } from "@/types/skills";
import { TaskId } from "../tasks/enum";
import { ItemId } from "../items/enums";
import { MilestoneId } from "../milestones/enums";

export const bedUpgrades: { [id in UpgradeId]?: Upgrade } = {
  [UpgradeId.BASIC_BED]: {
    id: UpgradeId.BASIC_BED,
    name: "Basic Bed",
    description: "A simple bed to rest.",
    icon: Bed,
    iconStyle: {
      fill: "#A3A3A3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STRAW_BED,
    previous: null,
    modifier: {
      targets: Object.values(TaskId),
      values: {
        [ModifierType.EXPERIENCE]: 1,
      },
    },
    requiresItems: { [ItemId.GOLD]: 0 },
    requiresUpgrades: new Set<UpgradeId>([]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.STRAW_BED]: {
    id: UpgradeId.STRAW_BED,
    name: "Straw Bed",
    description: "A bed made of straw for better rest.",
    icon: Bed,
    iconStyle: {
      fill: "#B3B3B3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.COMFORTABLE_BED,
    previous: UpgradeId.BASIC_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: {
        [ModifierType.EXPERIENCE]: 2,
      },
    },
    requiresItems: { [ItemId.GOLD]: 1000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BASIC_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.COMFORTABLE_BED]: {
    id: UpgradeId.COMFORTABLE_BED,
    name: "Comfortable Bed",
    description: "A comfortable bed for better rest.",
    icon: Bed,
    iconStyle: {
      fill: "#C3C3C3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.REFINED_BED,
    previous: UpgradeId.STRAW_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: {
        [ModifierType.EXPERIENCE]: 3,
      },
    },
    requiresItems: { [ItemId.GOLD]: 100000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STRAW_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.REFINED_BED]: {
    id: UpgradeId.REFINED_BED,
    name: "Refined Bed",
    description: "A refined bed for superior rest.",
    icon: Bed,
    iconStyle: {
      fill: "#D3D3D3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.LUXURY_BED,
    previous: UpgradeId.COMFORTABLE_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: {
        [ModifierType.EXPERIENCE]: 4,
      },
    },
    requiresItems: { [ItemId.GOLD]: 1000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.COMFORTABLE_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [UpgradeId.LUXURY_BED]: {
    id: UpgradeId.LUXURY_BED,
    name: "Luxury Bed",
    description: "A luxury bed for the best rest.",
    icon: Bed,
    iconStyle: {
      fill: "#E3E3E3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: UpgradeId.REFINED_BED,
    modifier: {
      targets: Object.values(TaskId),
      values: {
        [ModifierType.EXPERIENCE]: 5,
      },
    },
    requiresItems: { [ItemId.GOLD]: 10000000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.REFINED_BED]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
};

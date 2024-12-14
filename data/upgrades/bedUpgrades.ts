// src/data/upgrades/bedUpgrades.ts
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { HomeRooms } from "@/data/menus/enums";
import { SkillModifierType } from "@/data/modifiers/enums";
import { skillTable } from "@/data/skills/skills";
import { Upgrade } from "@/types/upgrades";
import { Bed } from "lucide-react";
import { BedUpgradeId } from "./enums";

const getGlobalModifier = (): { [skillId: string]: string[] } => {
  let targetsEverything: { [skillId: string]: string[] } = {};

  for (const [skillId, skill] of Object.entries(skillTable)) {
    targetsEverything[skillId] = [];

    Object.keys(skill.tasks).forEach((taskId) =>
      targetsEverything[skillId].push(taskId),
    );
  }

  return targetsEverything;
};
const GLOBAL_MODIFIER = getGlobalModifier();

export const bedUpgrades: { [id in BedUpgradeId]: Upgrade } = {
  [BedUpgradeId.BASIC_BED]: {
    id: BedUpgradeId.BASIC_BED,
    name: "Basic Bed",
    description: "A simple bed to rest.",
    icon: Bed,
    iconStyle: {
      fill: "#A3A3A3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: BedUpgradeId.STRAW_BED,
    previous: null,
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 1,
      },
    },
    requiresItems: { gold: 0 },
    requiresUpgrades: new Set<BedUpgradeId>([]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [BedUpgradeId.STRAW_BED]: {
    id: BedUpgradeId.STRAW_BED,
    name: "Straw Bed",
    description: "A bed made of straw for better rest.",
    icon: Bed,
    iconStyle: {
      fill: "#B3B3B3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: BedUpgradeId.COMFORTABLE_BED,
    previous: BedUpgradeId.BASIC_BED,
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 2,
      },
    },
    requiresItems: { gold: 1000 },
    requiresUpgrades: new Set<BedUpgradeId>([BedUpgradeId.BASIC_BED]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [BedUpgradeId.COMFORTABLE_BED]: {
    id: BedUpgradeId.COMFORTABLE_BED,
    name: "Comfortable Bed",
    description: "A comfortable bed for better rest.",
    icon: Bed,
    iconStyle: {
      fill: "#C3C3C3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: BedUpgradeId.REFINED_BED,
    previous: BedUpgradeId.STRAW_BED,
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 3,
      },
    },
    requiresItems: { gold: 100000 },
    requiresUpgrades: new Set<BedUpgradeId>([BedUpgradeId.STRAW_BED]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [BedUpgradeId.REFINED_BED]: {
    id: BedUpgradeId.REFINED_BED,
    name: "Refined Bed",
    description: "A refined bed for superior rest.",
    icon: Bed,
    iconStyle: {
      fill: "#D3D3D3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: BedUpgradeId.LUXURY_BED,
    previous: BedUpgradeId.COMFORTABLE_BED,
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 4,
      },
    },
    requiresItems: { gold: 1000000 },
    requiresUpgrades: new Set<BedUpgradeId>([BedUpgradeId.COMFORTABLE_BED]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  [BedUpgradeId.LUXURY_BED]: {
    id: BedUpgradeId.LUXURY_BED,
    name: "Luxury Bed",
    description: "A luxury bed for the best rest.",
    icon: Bed,
    iconStyle: {
      fill: "#E3E3E3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: BedUpgradeId.REFINED_BED,
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 5,
      },
    },
    requiresItems: { gold: 10000000 },
    requiresUpgrades: new Set<BedUpgradeId>([BedUpgradeId.REFINED_BED]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.BEDROOM,
  },
};

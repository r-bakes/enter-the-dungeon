import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { HomeRooms } from "@/data/menus/enums";
import { SkillModifierType } from "@/data/modifiers/enums";
import { skillTable } from "@/data/skills/skills";
import { Upgrade } from "@/types/upgrades";
import { Bed } from "lucide-react";

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

export const bedUpgrades: { [upgradeId: string]: Upgrade } = {
  basicBed: {
    id: "basicBed",
    name: "Basic Bed",
    description: "A simple bed to rest.",
    icon: Bed,
    iconStyle: {
      fill: "#A3A3A3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "strawBed",
    previous: null,
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 1,
      },
    },
    requiresItems: { gold: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  strawBed: {
    id: "strawBed",
    name: "Straw Bed",
    description: "A bed made of straw for better rest.",
    icon: Bed,
    iconStyle: {
      fill: "#B3B3B3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "comfortableBed",
    previous: "basicBed",
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 2,
      },
    },
    requiresItems: { gold: 1000 },
    requiresUpgrades: new Set(["basicBed"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  comfortableBed: {
    id: "comfortableBed",
    name: "Comfortable Bed",
    description: "A comfortable bed for better rest.",
    icon: Bed,
    iconStyle: {
      fill: "#C3C3C3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "refinedBed",
    previous: "strawBed",
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 3,
      },
    },
    requiresItems: { gold: 100000 },
    requiresUpgrades: new Set(["strawBed"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  refinedBed: {
    id: "refinedBed",
    name: "Refined Bed",
    description: "A refined bed for superior rest.",
    icon: Bed,
    iconStyle: {
      fill: "#D3D3D3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "luxuryBed",
    previous: "comfortableBed",
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 4,
      },
    },
    requiresItems: { gold: 1000000 },
    requiresUpgrades: new Set(["comfortableBed"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.BEDROOM,
  },
  luxuryBed: {
    id: "luxuryBed",
    name: "Luxury Bed",
    description: "A luxury bed for the best rest.",
    icon: Bed,
    iconStyle: {
      fill: "#E3E3E3",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: "refinedBed",
    modifier: {
      targets: GLOBAL_MODIFIER,

      values: {
        [SkillModifierType.EXPERIENCE]: 5,
      },
    },
    requiresItems: { gold: 10000000 },
    requiresUpgrades: new Set(["refinedBed"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.BEDROOM,
  },
};

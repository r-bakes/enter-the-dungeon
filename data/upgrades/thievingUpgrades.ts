import { Upgrade } from "@/types/upgrades";
import { UpgradeId } from "./enums";
import { Briefcase } from "lucide-react";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { thievingTasks } from "../tasks/stealth/thieving";
import { ModifierType } from "../modifiers/enums";
import { Milestones } from "@/types/character";
import { HomeRooms } from "../menus/enums";
import { MilestoneId } from "../milestones/enums";
import { ItemId } from "../items/enums";
import { TaskId } from "../tasks/enum";

export const thievingUpgrades: { [id in UpgradeId]?: Upgrade } = {
  [UpgradeId.BASIC_THIEVES_TOOLS]: {
    id: UpgradeId.BASIC_THIEVES_TOOLS,
    name: "Basic Thieves Tools",
    description: "Now why would you have these?",
    icon: Briefcase,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    next: UpgradeId.THIEVES_GLOVES_OF_SILENCE,
    previous: null,
    modifier: {
      targets: Object.keys(thievingTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 0,
        [ModifierType.DOUBLE_CHANCE]: 0,
        [ModifierType.STEALTH]: 0,
        [ModifierType.PRODUCTION_MULTIPLIER]: 1,
      },
    },
    requiresItems: { [ItemId.GOLD]: 0 },
    requiresUpgrades: new Set<UpgradeId>([]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.THIEVES_GLOVES_OF_SILENCE]: {
    id: UpgradeId.THIEVES_GLOVES_OF_SILENCE,
    name: "Thieves' Gloves of Silence",
    description: "Muffles even the most fumble-fingered thief.",
    icon: Briefcase,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    next: UpgradeId.MASTER_THIEVES_LOCKPICK_SET,
    previous: UpgradeId.BASIC_THIEVES_TOOLS,
    modifier: {
      targets: Object.keys(thievingTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 10,
        [ModifierType.DOUBLE_CHANCE]: 1,
        [ModifierType.STEALTH]: 10,
        [ModifierType.PRODUCTION_MULTIPLIER]: 2,
      },
    },
    requiresItems: { [ItemId.GOLD]: 100 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BASIC_THIEVES_TOOLS]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.MASTER_THIEVES_LOCKPICK_SET]: {
    id: UpgradeId.MASTER_THIEVES_LOCKPICK_SET,
    name: "Master Thieves' Lockpick Set",
    description: "No lock is safe from you now.",
    icon: Briefcase,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    next: UpgradeId.THIEVES_INFINITE_ROPE_OF_CLIMBING,
    previous: UpgradeId.THIEVES_GLOVES_OF_SILENCE,
    modifier: {
      targets: Object.keys(thievingTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 20,
        [ModifierType.DOUBLE_CHANCE]: 2,
        [ModifierType.STEALTH]: 20,
        [ModifierType.PRODUCTION_MULTIPLIER]: 3,
      },
    },
    requiresItems: { [ItemId.GOLD]: 200 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.THIEVES_GLOVES_OF_SILENCE]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.THIEVES_INFINITE_ROPE_OF_CLIMBING]: {
    id: UpgradeId.THIEVES_INFINITE_ROPE_OF_CLIMBING,
    name: "Thieves' Infinite Rope of Climbing",
    description: "A rope that never ends? Sounds useful.",
    icon: Briefcase,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    next: UpgradeId.CLOAK_OF_LESSER_INVISIBILITY,
    previous: UpgradeId.MASTER_THIEVES_LOCKPICK_SET,
    modifier: {
      targets: Object.keys(thievingTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 30,
        [ModifierType.DOUBLE_CHANCE]: 3,
        [ModifierType.STEALTH]: 30,
        [ModifierType.PRODUCTION_MULTIPLIER]: 4,
      },
    },
    requiresItems: { [ItemId.GOLD]: 300 },
    requiresUpgrades: new Set<UpgradeId>([
      UpgradeId.MASTER_THIEVES_LOCKPICK_SET,
    ]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.CLOAK_OF_LESSER_INVISIBILITY]: {
    id: UpgradeId.CLOAK_OF_LESSER_INVISIBILITY,
    name: "Cloak of Lesser Invisibility",
    description: "Now you see me... now you don't.",
    icon: Briefcase,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    next: UpgradeId.BOOTS_OF_IMPOSSIBLE_QUIET,
    previous: UpgradeId.THIEVES_INFINITE_ROPE_OF_CLIMBING,
    modifier: {
      targets: Object.keys(thievingTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 40,
        [ModifierType.DOUBLE_CHANCE]: 4,
        [ModifierType.STEALTH]: 40,
        [ModifierType.PRODUCTION_MULTIPLIER]: 5,
      },
    },
    requiresItems: { [ItemId.GOLD]: 400 },
    requiresUpgrades: new Set<UpgradeId>([
      UpgradeId.THIEVES_INFINITE_ROPE_OF_CLIMBING,
    ]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.BOOTS_OF_IMPOSSIBLE_QUIET]: {
    id: UpgradeId.BOOTS_OF_IMPOSSIBLE_QUIET,
    name: "Boots of Impossible Quiet",
    description: "Your footsteps disappear into the night.",
    icon: Briefcase,
    iconStyle: TASK_AND_ITEM_ICON_STYLE,
    next: UpgradeId.THIEVES_OMNISIGHT_GLASSES,
    previous: UpgradeId.CLOAK_OF_LESSER_INVISIBILITY,
    modifier: {
      targets: Object.keys(thievingTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 50,
        [ModifierType.DOUBLE_CHANCE]: 5,
        [ModifierType.STEALTH]: 50,
        [ModifierType.PRODUCTION_MULTIPLIER]: 6,
      },
    },
    requiresItems: { [ItemId.GOLD]: 500 },
    requiresUpgrades: new Set<UpgradeId>([
      UpgradeId.CLOAK_OF_LESSER_INVISIBILITY,
    ]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
};

// src/data/upgrades/pickaxeUpgrades.ts

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { mineralsTable } from "@/data/items/minerals";
import { HomeRooms } from "@/data/menus/enums";
import { SkillModifierType } from "@/data/modifiers/enums";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { prospecting } from "@/data/skills/prospecting";
import { Pickaxe } from "lucide-react";
import { Upgrade } from "@/types/upgrades";
import { PickaxeUpgradeId } from "./pickaxeUpgradeIds";

export const pickaxeUpgrades: { [id in PickaxeUpgradeId]: Upgrade } = {
  [PickaxeUpgradeId.BASIC_PICKAXE]: {
    id: PickaxeUpgradeId.BASIC_PICKAXE,
    name: "Basic Pickaxe",
    description: "Your trusty pickaxe!",
    icon: Pickaxe,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.BRONZE_PICKAXE,
    previous: null,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 0,
      },
    },
    requiresItems: { gold: 0 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.BRONZE_PICKAXE]: {
    id: PickaxeUpgradeId.BRONZE_PICKAXE,
    name: "Bronze Pickaxe",
    description: "Your trusty pickaxe!",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.BRONZE_PICKAXE1,
    previous: PickaxeUpgradeId.BASIC_PICKAXE,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 2,
      },
    },
    requiresItems: { gold: 10 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.BASIC_PICKAXE,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.BRONZE_PICKAXE1]: {
    id: PickaxeUpgradeId.BRONZE_PICKAXE1,
    name: "Bronze Pickaxe +1",
    description: "An improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.BRONZE_PICKAXE2,
    previous: PickaxeUpgradeId.BRONZE_PICKAXE,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 4,
      },
    },
    requiresItems: { gold: 20 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.BRONZE_PICKAXE,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.BRONZE_PICKAXE2]: {
    id: PickaxeUpgradeId.BRONZE_PICKAXE2,
    name: "Bronze Pickaxe +2",
    description: "A further improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.BRONZE_PICKAXE3,
    previous: PickaxeUpgradeId.BRONZE_PICKAXE1,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 6,
      },
    },
    requiresItems: { gold: 30 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.BRONZE_PICKAXE1,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.BRONZE_PICKAXE3]: {
    id: PickaxeUpgradeId.BRONZE_PICKAXE3,
    name: "Bronze Pickaxe +3",
    description: "An even further improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.BRONZE_PICKAXE4,
    previous: PickaxeUpgradeId.BRONZE_PICKAXE2,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 8,
      },
    },
    requiresItems: { gold: 40 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.BRONZE_PICKAXE2,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.BRONZE_PICKAXE4]: {
    id: PickaxeUpgradeId.BRONZE_PICKAXE4,
    name: "Bronze Pickaxe +4",
    description: "The ultimate bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.IRON_PICKAXE,
    previous: PickaxeUpgradeId.BRONZE_PICKAXE3,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 10,
      },
    },
    requiresItems: { gold: 50 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.BRONZE_PICKAXE3,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.IRON_PICKAXE]: {
    id: PickaxeUpgradeId.IRON_PICKAXE,
    name: "Iron Pickaxe",
    description: "An iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.IRON_PICKAXE1,
    previous: PickaxeUpgradeId.BRONZE_PICKAXE4,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 12,
      },
    },
    requiresItems: { gold: 100 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.BRONZE_PICKAXE4,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.IRON_PICKAXE1]: {
    id: PickaxeUpgradeId.IRON_PICKAXE1,
    name: "Iron Pickaxe +1",
    description: "An improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.IRON_PICKAXE2,
    previous: PickaxeUpgradeId.IRON_PICKAXE,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 14,
      },
    },
    requiresItems: { gold: 200 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.IRON_PICKAXE,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.IRON_PICKAXE2]: {
    id: PickaxeUpgradeId.IRON_PICKAXE2,
    name: "Iron Pickaxe +2",
    description: "A further improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.IRON_PICKAXE3,
    previous: PickaxeUpgradeId.IRON_PICKAXE1,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 16,
      },
    },
    requiresItems: { gold: 300 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.IRON_PICKAXE1,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.IRON_PICKAXE3]: {
    id: PickaxeUpgradeId.IRON_PICKAXE3,
    name: "Iron Pickaxe +3",
    description: "An even further improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.IRON_PICKAXE4,
    previous: PickaxeUpgradeId.IRON_PICKAXE2,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 18,
      },
    },
    requiresItems: { gold: 400 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.IRON_PICKAXE2,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.IRON_PICKAXE4]: {
    id: PickaxeUpgradeId.IRON_PICKAXE4,
    name: "Iron Pickaxe +4",
    description: "The ultimate iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.STEEL_PICKAXE,
    previous: PickaxeUpgradeId.IRON_PICKAXE3,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 20,
      },
    },
    requiresItems: { gold: 500 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.IRON_PICKAXE3,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.STEEL_PICKAXE]: {
    id: PickaxeUpgradeId.STEEL_PICKAXE,
    name: "Steel Pickaxe",
    description: "A steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.STEEL_PICKAXE1,
    previous: PickaxeUpgradeId.IRON_PICKAXE4,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 22,
      },
    },
    requiresItems: { gold: 1000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.IRON_PICKAXE4,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.STEEL_PICKAXE1]: {
    id: PickaxeUpgradeId.STEEL_PICKAXE1,
    name: "Steel Pickaxe +1",
    description: "An improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.STEEL_PICKAXE2,
    previous: PickaxeUpgradeId.STEEL_PICKAXE,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 24,
      },
    },
    requiresItems: { gold: 2000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.STEEL_PICKAXE,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.STEEL_PICKAXE2]: {
    id: PickaxeUpgradeId.STEEL_PICKAXE2,
    name: "Steel Pickaxe +2",
    description: "A further improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.STEEL_PICKAXE3,
    previous: PickaxeUpgradeId.STEEL_PICKAXE1,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 26,
      },
    },
    requiresItems: { gold: 3000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.STEEL_PICKAXE1,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.STEEL_PICKAXE3]: {
    id: PickaxeUpgradeId.STEEL_PICKAXE3,
    name: "Steel Pickaxe +3",
    description: "An even further improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.STEEL_PICKAXE4,
    previous: PickaxeUpgradeId.STEEL_PICKAXE2,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 28,
      },
    },
    requiresItems: { gold: 4000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.STEEL_PICKAXE2,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.STEEL_PICKAXE4]: {
    id: PickaxeUpgradeId.STEEL_PICKAXE4,
    name: "Steel Pickaxe +4",
    description: "The ultimate steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.MITHRIL_PICKAXE,
    previous: PickaxeUpgradeId.STEEL_PICKAXE3,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 30,
      },
    },
    requiresItems: { gold: 5000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.STEEL_PICKAXE3,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.MITHRIL_PICKAXE]: {
    id: PickaxeUpgradeId.MITHRIL_PICKAXE,
    name: "Mithril Pickaxe",
    description: "A mithril pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.MITHRIL_PICKAXE1,
    previous: PickaxeUpgradeId.STEEL_PICKAXE4,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 32,
      },
    },
    requiresItems: { gold: 10000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.STEEL_PICKAXE4,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.MITHRIL_PICKAXE1]: {
    id: PickaxeUpgradeId.MITHRIL_PICKAXE1,
    name: "Mithril Pickaxe +1",
    description: "A mithril pickaxe with improved efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.MITHRIL_PICKAXE2,
    previous: PickaxeUpgradeId.MITHRIL_PICKAXE,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 34,
      },
    },
    requiresItems: { gold: 20000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.MITHRIL_PICKAXE,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.MITHRIL_PICKAXE2]: {
    id: PickaxeUpgradeId.MITHRIL_PICKAXE2,
    name: "Mithril Pickaxe +2",
    description: "A mithril pickaxe with superior efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.MITHRIL_PICKAXE3,
    previous: PickaxeUpgradeId.MITHRIL_PICKAXE1,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 36,
      },
    },
    requiresItems: { gold: 30000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.MITHRIL_PICKAXE1,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.MITHRIL_PICKAXE3]: {
    id: PickaxeUpgradeId.MITHRIL_PICKAXE3,
    name: "Mithril Pickaxe +3",
    description: "A mithril pickaxe with unmatched efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.MITHRIL_PICKAXE4,
    previous: PickaxeUpgradeId.MITHRIL_PICKAXE2,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 38,
      },
    },
    requiresItems: { gold: 40000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.MITHRIL_PICKAXE2,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.MITHRIL_PICKAXE4]: {
    id: PickaxeUpgradeId.MITHRIL_PICKAXE4,
    name: "Mithril Pickaxe +4",
    description: "A mithril pickaxe with ultimate efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.ADAMANT_PICKAXE,
    previous: PickaxeUpgradeId.MITHRIL_PICKAXE3,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 40,
      },
    },
    requiresItems: { gold: 50000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.MITHRIL_PICKAXE3,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.ADAMANT_PICKAXE]: {
    id: PickaxeUpgradeId.ADAMANT_PICKAXE,
    name: "Adamant Pickaxe",
    description: "An adamant pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.ADAMANT_PICKAXE1,
    previous: PickaxeUpgradeId.MITHRIL_PICKAXE4,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 42,
      },
    },
    requiresItems: { gold: 100000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.MITHRIL_PICKAXE4,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.ADAMANT_PICKAXE1]: {
    id: PickaxeUpgradeId.ADAMANT_PICKAXE1,
    name: "Adamant Pickaxe +1",
    description: "An adamant pickaxe with improved efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.ADAMANT_PICKAXE2,
    previous: PickaxeUpgradeId.ADAMANT_PICKAXE,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 44,
      },
    },
    requiresItems: { gold: 200000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.ADAMANT_PICKAXE,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.ADAMANT_PICKAXE2]: {
    id: PickaxeUpgradeId.ADAMANT_PICKAXE2,
    name: "Adamant Pickaxe +2",
    description: "An adamant pickaxe with superior efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.ADAMANT_PICKAXE3,
    previous: PickaxeUpgradeId.ADAMANT_PICKAXE1,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 46,
      },
    },
    requiresItems: { gold: 300000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.ADAMANT_PICKAXE1,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.ADAMANT_PICKAXE3]: {
    id: PickaxeUpgradeId.ADAMANT_PICKAXE3,
    name: "Adamant Pickaxe +3",
    description: "An adamant pickaxe with unmatched efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: PickaxeUpgradeId.ADAMANT_PICKAXE4,
    previous: PickaxeUpgradeId.ADAMANT_PICKAXE2,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 48,
      },
    },
    requiresItems: { gold: 400000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.ADAMANT_PICKAXE2,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [PickaxeUpgradeId.ADAMANT_PICKAXE4]: {
    id: PickaxeUpgradeId.ADAMANT_PICKAXE4,
    name: "Adamant Pickaxe +4",
    description: "An adamant pickaxe with ultimate efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: PickaxeUpgradeId.ADAMANT_PICKAXE3,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(
            ([taskId, task]) =>
              task.category === ProspectingTaskCategories.MINE,
          )
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 50,
      },
    },
    requiresItems: { gold: 500000 },
    requiresUpgrades: new Set<PickaxeUpgradeId>([
      PickaxeUpgradeId.ADAMANT_PICKAXE3,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
};


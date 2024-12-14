// src/data/upgrades/hammerUpgrades.ts

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { mineralsTable } from "@/data/items/minerals";
import { HomeRooms } from "@/data/menus/enums";
import { SkillModifierType } from "@/data/modifiers/enums";
import { smithing } from "@/data/skills/smithing";
import { Hammer } from "lucide-react";
import { Upgrade } from "@/types/upgrades";
import { HammerUpgradeId } from "./enums";
import { MineralId } from "../items/enums";

export const hammerUpgrades: { [id in HammerUpgradeId]: Upgrade } = {
  [HammerUpgradeId.BASIC_HAMMER]: {
    id: HammerUpgradeId.BASIC_HAMMER,
    name: "Basic Hammer",
    description: "Your trusty hammer!",
    icon: Hammer,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.BRONZE_HAMMER,
    previous: null,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 0,
      },
    },
    requiresItems: { gold: 0 },
    requiresUpgrades: new Set<HammerUpgradeId>([]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.BRONZE_HAMMER]: {
    id: HammerUpgradeId.BRONZE_HAMMER,
    name: "Bronze Hammer",
    description: "Your trusty hammer!",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.BRONZE_HAMMER1,
    previous: HammerUpgradeId.BASIC_HAMMER,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 2,
      },
    },
    requiresItems: { gold: 10 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.BASIC_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.BRONZE_HAMMER1]: {
    id: HammerUpgradeId.BRONZE_HAMMER1,
    name: "Bronze Hammer +1",
    description: "An improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.BRONZE_HAMMER2,
    previous: HammerUpgradeId.BRONZE_HAMMER,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 4,
      },
    },
    requiresItems: { gold: 20 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.BRONZE_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.BRONZE_HAMMER2]: {
    id: HammerUpgradeId.BRONZE_HAMMER2,
    name: "Bronze Hammer +2",
    description: "A further improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.BRONZE_HAMMER3,
    previous: HammerUpgradeId.BRONZE_HAMMER1,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 6,
      },
    },
    requiresItems: { gold: 30 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.BRONZE_HAMMER1,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.BRONZE_HAMMER3]: {
    id: HammerUpgradeId.BRONZE_HAMMER3,
    name: "Bronze Hammer +3",
    description: "An even further improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.BRONZE_HAMMER4,
    previous: HammerUpgradeId.BRONZE_HAMMER2,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 8,
      },
    },
    requiresItems: { gold: 40 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.BRONZE_HAMMER2,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.BRONZE_HAMMER4]: {
    id: HammerUpgradeId.BRONZE_HAMMER4,
    name: "Bronze Hammer +4",
    description: "The ultimate bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.IRON_HAMMER,
    previous: HammerUpgradeId.BRONZE_HAMMER3,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 10,
      },
    },
    requiresItems: { gold: 50 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.BRONZE_HAMMER3,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.IRON_HAMMER]: {
    id: HammerUpgradeId.IRON_HAMMER,
    name: "Iron Hammer",
    description: "An iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.IRON_HAMMER1,
    previous: HammerUpgradeId.BRONZE_HAMMER4,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 12,
      },
    },
    requiresItems: { gold: 100 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.BRONZE_HAMMER4,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.IRON_HAMMER1]: {
    id: HammerUpgradeId.IRON_HAMMER1,
    name: "Iron Hammer +1",
    description: "An improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.IRON_HAMMER2,
    previous: HammerUpgradeId.IRON_HAMMER,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 14,
      },
    },
    requiresItems: { gold: 200 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.IRON_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.IRON_HAMMER2]: {
    id: HammerUpgradeId.IRON_HAMMER2,
    name: "Iron Hammer +2",
    description: "A further improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.IRON_HAMMER3,
    previous: HammerUpgradeId.IRON_HAMMER1,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 16,
      },
    },
    requiresItems: { gold: 300 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.IRON_HAMMER1]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.IRON_HAMMER3]: {
    id: HammerUpgradeId.IRON_HAMMER3,
    name: "Iron Hammer +3",
    description: "An even further improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.IRON_HAMMER4,
    previous: HammerUpgradeId.IRON_HAMMER2,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 18,
      },
    },
    requiresItems: { gold: 400 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.IRON_HAMMER2]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.IRON_HAMMER4]: {
    id: HammerUpgradeId.IRON_HAMMER4,
    name: "Iron Hammer +4",
    description: "The ultimate iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.STEEL_HAMMER,
    previous: HammerUpgradeId.IRON_HAMMER3,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 20,
      },
    },
    requiresItems: { gold: 500 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.IRON_HAMMER3]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.STEEL_HAMMER]: {
    id: HammerUpgradeId.STEEL_HAMMER,
    name: "Steel Hammer",
    description: "A steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.STEEL_HAMMER1,
    previous: HammerUpgradeId.IRON_HAMMER4,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 22,
      },
    },
    requiresItems: { gold: 1000 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.IRON_HAMMER4]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.STEEL_HAMMER1]: {
    id: HammerUpgradeId.STEEL_HAMMER1,
    name: "Steel Hammer +1",
    description: "An improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.STEEL_HAMMER2,
    previous: HammerUpgradeId.STEEL_HAMMER,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 24,
      },
    },
    requiresItems: { gold: 2000 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.STEEL_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.STEEL_HAMMER2]: {
    id: HammerUpgradeId.STEEL_HAMMER2,
    name: "Steel Hammer +2",
    description: "A further improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.STEEL_HAMMER3,
    previous: HammerUpgradeId.STEEL_HAMMER1,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 26,
      },
    },
    requiresItems: { gold: 3000 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.STEEL_HAMMER1]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.STEEL_HAMMER3]: {
    id: HammerUpgradeId.STEEL_HAMMER3,
    name: "Steel Hammer +3",
    description: "An even further improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.STEEL_HAMMER4,
    previous: HammerUpgradeId.STEEL_HAMMER2,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 28,
      },
    },
    requiresItems: { gold: 4000 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.STEEL_HAMMER2]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.STEEL_HAMMER4]: {
    id: HammerUpgradeId.STEEL_HAMMER4,
    name: "Steel Hammer +4",
    description: "The ultimate steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.MITHRIL_HAMMER,
    previous: HammerUpgradeId.STEEL_HAMMER3,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 30,
      },
    },
    requiresItems: { gold: 5000 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.STEEL_HAMMER3]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.MITHRIL_HAMMER]: {
    id: HammerUpgradeId.MITHRIL_HAMMER,
    name: "Mithril Hammer",
    description: "A mithril hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.MITHRIL_HAMMER1,
    previous: HammerUpgradeId.STEEL_HAMMER4,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 32,
      },
    },
    requiresItems: { gold: 10000 },
    requiresUpgrades: new Set<HammerUpgradeId>([HammerUpgradeId.STEEL_HAMMER4]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.MITHRIL_HAMMER1]: {
    id: HammerUpgradeId.MITHRIL_HAMMER1,
    name: "Mithril Hammer +1",
    description: "A mithril hammer with improved efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.MITHRIL_HAMMER2,
    previous: HammerUpgradeId.MITHRIL_HAMMER,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 34,
      },
    },
    requiresItems: { gold: 20000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.MITHRIL_HAMMER,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.MITHRIL_HAMMER2]: {
    id: HammerUpgradeId.MITHRIL_HAMMER2,
    name: "Mithril Hammer +2",
    description: "A mithril hammer with superior efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.MITHRIL_HAMMER3,
    previous: HammerUpgradeId.MITHRIL_HAMMER1,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 36,
      },
    },
    requiresItems: { gold: 30000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.MITHRIL_HAMMER1,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.MITHRIL_HAMMER3]: {
    id: HammerUpgradeId.MITHRIL_HAMMER3,
    name: "Mithril Hammer +3",
    description: "A mithril hammer with unmatched efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.MITHRIL_HAMMER4,
    previous: HammerUpgradeId.MITHRIL_HAMMER2,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 38,
      },
    },
    requiresItems: { gold: 40000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.MITHRIL_HAMMER2,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.MITHRIL_HAMMER4]: {
    id: HammerUpgradeId.MITHRIL_HAMMER4,
    name: "Mithril Hammer +4",
    description: "A mithril hammer with ultimate efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.ADAMANT_HAMMER,
    previous: HammerUpgradeId.MITHRIL_HAMMER3,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 40,
      },
    },
    requiresItems: { gold: 50000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.MITHRIL_HAMMER3,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.ADAMANT_HAMMER]: {
    id: HammerUpgradeId.ADAMANT_HAMMER,
    name: "Adamant Hammer",
    description: "An adamant hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.ADAMANT_HAMMER1,
    previous: HammerUpgradeId.MITHRIL_HAMMER4,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 42,
      },
    },
    requiresItems: { gold: 100000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.MITHRIL_HAMMER4,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.ADAMANT_HAMMER1]: {
    id: HammerUpgradeId.ADAMANT_HAMMER1,
    name: "Adamant Hammer +1",
    description: "An adamant hammer with improved efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.ADAMANT_HAMMER2,
    previous: HammerUpgradeId.ADAMANT_HAMMER,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 44,
      },
    },
    requiresItems: { gold: 200000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.ADAMANT_HAMMER,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.ADAMANT_HAMMER2]: {
    id: HammerUpgradeId.ADAMANT_HAMMER2,
    name: "Adamant Hammer +2",
    description: "An adamant hammer with superior efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.ADAMANT_HAMMER3,
    previous: HammerUpgradeId.ADAMANT_HAMMER1,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 46,
      },
    },
    requiresItems: { gold: 300000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.ADAMANT_HAMMER1,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.ADAMANT_HAMMER3]: {
    id: HammerUpgradeId.ADAMANT_HAMMER3,
    name: "Adamant Hammer +3",
    description: "An adamant hammer with unmatched efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: HammerUpgradeId.ADAMANT_HAMMER4,
    previous: HammerUpgradeId.ADAMANT_HAMMER2,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 48,
      },
    },
    requiresItems: { gold: 400000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.ADAMANT_HAMMER2,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [HammerUpgradeId.ADAMANT_HAMMER4]: {
    id: HammerUpgradeId.ADAMANT_HAMMER4,
    name: "Adamant Hammer +4",
    description: "An adamant hammer with ultimate efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: HammerUpgradeId.ADAMANT_HAMMER3,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 50,
      },
    },
    requiresItems: { gold: 500000 },
    requiresUpgrades: new Set<HammerUpgradeId>([
      HammerUpgradeId.ADAMANT_HAMMER3,
    ]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
};

// src/data/upgrades/hammerUpgrades.ts

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { HomeRooms } from "@/data/menus/enums";
import { SkillModifierType } from "@/data/modifiers/enums";
import { smithing } from "@/data/skills/smithing";
import { Hammer } from "lucide-react";
import { Upgrade } from "@/types/upgrades";
import { UpgradeId } from "./enums";
import { ItemId } from "../items/enums";
import { itemTable } from "../items/items";

export const hammerUpgrades: { [id in UpgradeId]?: Upgrade } = {
  [UpgradeId.BASIC_HAMMER]: {
    id: UpgradeId.BASIC_HAMMER,
    name: "Basic Hammer",
    description: "Your trusty hammer!",
    icon: Hammer,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_HAMMER,
    previous: null,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 0,
      },
    },
    requiresItems: { gold: 0 },
    requiresUpgrades: new Set<UpgradeId>([]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.BRONZE_HAMMER]: {
    id: UpgradeId.BRONZE_HAMMER,
    name: "Bronze Hammer",
    description: "Your trusty hammer!",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_HAMMER1,
    previous: UpgradeId.BASIC_HAMMER,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 2,
      },
    },
    requiresItems: { gold: 10 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BASIC_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.BRONZE_HAMMER1]: {
    id: UpgradeId.BRONZE_HAMMER1,
    name: "Bronze Hammer +1",
    description: "An improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_HAMMER2,
    previous: UpgradeId.BRONZE_HAMMER,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 4,
      },
    },
    requiresItems: { gold: 20 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.BRONZE_HAMMER2]: {
    id: UpgradeId.BRONZE_HAMMER2,
    name: "Bronze Hammer +2",
    description: "A further improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_HAMMER3,
    previous: UpgradeId.BRONZE_HAMMER1,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 6,
      },
    },
    requiresItems: { gold: 30 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_HAMMER1]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.BRONZE_HAMMER3]: {
    id: UpgradeId.BRONZE_HAMMER3,
    name: "Bronze Hammer +3",
    description: "An even further improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_HAMMER4,
    previous: UpgradeId.BRONZE_HAMMER2,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 8,
      },
    },
    requiresItems: { gold: 40 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_HAMMER2]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.BRONZE_HAMMER4]: {
    id: UpgradeId.BRONZE_HAMMER4,
    name: "Bronze Hammer +4",
    description: "The ultimate bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_HAMMER,
    previous: UpgradeId.BRONZE_HAMMER3,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 10,
      },
    },
    requiresItems: { gold: 50 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_HAMMER3]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.IRON_HAMMER]: {
    id: UpgradeId.IRON_HAMMER,
    name: "Iron Hammer",
    description: "An iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_HAMMER1,
    previous: UpgradeId.BRONZE_HAMMER4,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 12,
      },
    },
    requiresItems: { gold: 100 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_HAMMER4]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.IRON_HAMMER1]: {
    id: UpgradeId.IRON_HAMMER1,
    name: "Iron Hammer +1",
    description: "An improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_HAMMER2,
    previous: UpgradeId.IRON_HAMMER,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 14,
      },
    },
    requiresItems: { gold: 200 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.IRON_HAMMER2]: {
    id: UpgradeId.IRON_HAMMER2,
    name: "Iron Hammer +2",
    description: "A further improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_HAMMER3,
    previous: UpgradeId.IRON_HAMMER1,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 16,
      },
    },
    requiresItems: { gold: 300 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_HAMMER1]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.IRON_HAMMER3]: {
    id: UpgradeId.IRON_HAMMER3,
    name: "Iron Hammer +3",
    description: "An even further improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_HAMMER4,
    previous: UpgradeId.IRON_HAMMER2,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 18,
      },
    },
    requiresItems: { gold: 400 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_HAMMER2]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.IRON_HAMMER4]: {
    id: UpgradeId.IRON_HAMMER4,
    name: "Iron Hammer +4",
    description: "The ultimate iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_HAMMER,
    previous: UpgradeId.IRON_HAMMER3,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 20,
      },
    },
    requiresItems: { gold: 500 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_HAMMER3]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.STEEL_HAMMER]: {
    id: UpgradeId.STEEL_HAMMER,
    name: "Steel Hammer",
    description: "A steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_HAMMER1,
    previous: UpgradeId.IRON_HAMMER4,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 22,
      },
    },
    requiresItems: { gold: 1000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_HAMMER4]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.STEEL_HAMMER1]: {
    id: UpgradeId.STEEL_HAMMER1,
    name: "Steel Hammer +1",
    description: "An improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_HAMMER2,
    previous: UpgradeId.STEEL_HAMMER,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 24,
      },
    },
    requiresItems: { gold: 2000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.STEEL_HAMMER2]: {
    id: UpgradeId.STEEL_HAMMER2,
    name: "Steel Hammer +2",
    description: "A further improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_HAMMER3,
    previous: UpgradeId.STEEL_HAMMER1,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 26,
      },
    },
    requiresItems: { gold: 3000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_HAMMER1]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.STEEL_HAMMER3]: {
    id: UpgradeId.STEEL_HAMMER3,
    name: "Steel Hammer +3",
    description: "An even further improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_HAMMER4,
    previous: UpgradeId.STEEL_HAMMER2,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 28,
      },
    },
    requiresItems: { gold: 4000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_HAMMER2]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.STEEL_HAMMER4]: {
    id: UpgradeId.STEEL_HAMMER4,
    name: "Steel Hammer +4",
    description: "The ultimate steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_HAMMER,
    previous: UpgradeId.STEEL_HAMMER3,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 30,
      },
    },
    requiresItems: { gold: 5000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_HAMMER3]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.MITHRIL_HAMMER]: {
    id: UpgradeId.MITHRIL_HAMMER,
    name: "Mithril Hammer",
    description: "A mithril hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_HAMMER1,
    previous: UpgradeId.STEEL_HAMMER4,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 32,
      },
    },
    requiresItems: { gold: 10000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_HAMMER4]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.MITHRIL_HAMMER1]: {
    id: UpgradeId.MITHRIL_HAMMER1,
    name: "Mithril Hammer +1",
    description: "A mithril hammer with improved efficiency",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_HAMMER2,
    previous: UpgradeId.MITHRIL_HAMMER,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 34,
      },
    },
    requiresItems: { gold: 20000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.MITHRIL_HAMMER2]: {
    id: UpgradeId.MITHRIL_HAMMER2,
    name: "Mithril Hammer +2",
    description: "A mithril hammer with superior efficiency",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_HAMMER3,
    previous: UpgradeId.MITHRIL_HAMMER1,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 36,
      },
    },
    requiresItems: { gold: 30000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_HAMMER1]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.MITHRIL_HAMMER3]: {
    id: UpgradeId.MITHRIL_HAMMER3,
    name: "Mithril Hammer +3",
    description: "A mithril hammer with unmatched efficiency",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_HAMMER4,
    previous: UpgradeId.MITHRIL_HAMMER2,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 38,
      },
    },
    requiresItems: { gold: 40000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_HAMMER2]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.MITHRIL_HAMMER4]: {
    id: UpgradeId.MITHRIL_HAMMER4,
    name: "Mithril Hammer +4",
    description: "A mithril hammer with ultimate efficiency",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_HAMMER,
    previous: UpgradeId.MITHRIL_HAMMER3,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 40,
      },
    },
    requiresItems: { gold: 50000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_HAMMER3]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.ADAMANT_HAMMER]: {
    id: UpgradeId.ADAMANT_HAMMER,
    name: "Adamant Hammer",
    description: "An adamant hammer",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_HAMMER1,
    previous: UpgradeId.MITHRIL_HAMMER4,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 42,
      },
    },
    requiresItems: { gold: 100000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_HAMMER4]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.ADAMANT_HAMMER1]: {
    id: UpgradeId.ADAMANT_HAMMER1,
    name: "Adamant Hammer +1",
    description: "An adamant hammer with improved efficiency",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_HAMMER2,
    previous: UpgradeId.ADAMANT_HAMMER,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 44,
      },
    },
    requiresItems: { gold: 200000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ADAMANT_HAMMER]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.ADAMANT_HAMMER2]: {
    id: UpgradeId.ADAMANT_HAMMER2,
    name: "Adamant Hammer +2",
    description: "An adamant hammer with superior efficiency",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_HAMMER3,
    previous: UpgradeId.ADAMANT_HAMMER1,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 46,
      },
    },
    requiresItems: { gold: 300000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ADAMANT_HAMMER1]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.ADAMANT_HAMMER3]: {
    id: UpgradeId.ADAMANT_HAMMER3,
    name: "Adamant Hammer +3",
    description: "An adamant hammer with unmatched efficiency",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_HAMMER4,
    previous: UpgradeId.ADAMANT_HAMMER2,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 48,
      },
    },
    requiresItems: { gold: 400000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ADAMANT_HAMMER2]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  [UpgradeId.ADAMANT_HAMMER4]: {
    id: UpgradeId.ADAMANT_HAMMER4,
    name: "Adamant Hammer +4",
    description: "An adamant hammer with ultimate efficiency",
    icon: Hammer,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: UpgradeId.ADAMANT_HAMMER3,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 50,
      },
    },
    requiresItems: { gold: 500000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ADAMANT_HAMMER3]),
    requiresMilestones: new Set<string>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
};

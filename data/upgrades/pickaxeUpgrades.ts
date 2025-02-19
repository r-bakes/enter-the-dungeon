import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { HomeRooms } from "@/data/menus/enums";
import { ModifierType } from "@/data/modifiers/enums";
import { Pickaxe } from "lucide-react";
import { Upgrade } from "@/types/upgrades";
import { UpgradeId } from "./enums";
import { ItemId } from "../items/enums";
import { itemTable } from "../items/items";
import { MilestoneId } from "../milestones/enums";
import { TaskId } from "../tasks/enum";
import { miningTasks } from "../tasks/prospecting/mining";

export const pickaxeUpgrades: { [id in UpgradeId]?: Upgrade } = {
  [UpgradeId.BASIC_PICKAXE]: {
    id: UpgradeId.BASIC_PICKAXE,
    name: "Basic Pickaxe",
    description: "Your trusty pickaxe!",
    icon: Pickaxe,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_PICKAXE,
    previous: null,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 0,
      },
    },
    requiresItems: { [ItemId.GOLD]: 0 },
    requiresUpgrades: new Set<UpgradeId>([]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.BRONZE_PICKAXE]: {
    id: UpgradeId.BRONZE_PICKAXE,
    name: "Bronze Pickaxe",
    description: "Your trusty pickaxe!",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_PICKAXE1,
    previous: UpgradeId.BASIC_PICKAXE,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 2,
      },
    },
    requiresItems: { [ItemId.GOLD]: 10 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BASIC_PICKAXE]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.BRONZE_PICKAXE1]: {
    id: UpgradeId.BRONZE_PICKAXE1,
    name: "Bronze Pickaxe +1",
    description: "An improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_PICKAXE2,
    previous: UpgradeId.BRONZE_PICKAXE,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 4,
      },
    },
    requiresItems: { [ItemId.GOLD]: 20 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_PICKAXE]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.BRONZE_PICKAXE2]: {
    id: UpgradeId.BRONZE_PICKAXE2,
    name: "Bronze Pickaxe +2",
    description: "A further improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_PICKAXE3,
    previous: UpgradeId.BRONZE_PICKAXE1,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 6,
      },
    },
    requiresItems: { [ItemId.GOLD]: 30 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_PICKAXE1]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.BRONZE_PICKAXE3]: {
    id: UpgradeId.BRONZE_PICKAXE3,
    name: "Bronze Pickaxe +3",
    description: "An even further improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.BRONZE_PICKAXE4,
    previous: UpgradeId.BRONZE_PICKAXE2,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 8,
      },
    },
    requiresItems: { [ItemId.GOLD]: 40 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_PICKAXE2]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.BRONZE_PICKAXE4]: {
    id: UpgradeId.BRONZE_PICKAXE4,
    name: "Bronze Pickaxe +4",
    description: "The ultimate bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_PICKAXE,
    previous: UpgradeId.BRONZE_PICKAXE3,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 10,
      },
    },
    requiresItems: { [ItemId.GOLD]: 50 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_PICKAXE3]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.IRON_PICKAXE]: {
    id: UpgradeId.IRON_PICKAXE,
    name: "Iron Pickaxe",
    description: "An iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_PICKAXE1,
    previous: UpgradeId.BRONZE_PICKAXE4,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 12,
      },
    },
    requiresItems: { [ItemId.GOLD]: 100 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.BRONZE_PICKAXE4]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.IRON_PICKAXE1]: {
    id: UpgradeId.IRON_PICKAXE1,
    name: "Iron Pickaxe +1",
    description: "An improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_PICKAXE2,
    previous: UpgradeId.IRON_PICKAXE,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 14,
      },
    },
    requiresItems: { [ItemId.GOLD]: 200 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_PICKAXE]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.IRON_PICKAXE2]: {
    id: UpgradeId.IRON_PICKAXE2,
    name: "Iron Pickaxe +2",
    description: "A further improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_PICKAXE3,
    previous: UpgradeId.IRON_PICKAXE1,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 16,
      },
    },
    requiresItems: { [ItemId.GOLD]: 300 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_PICKAXE1]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.IRON_PICKAXE3]: {
    id: UpgradeId.IRON_PICKAXE3,
    name: "Iron Pickaxe +3",
    description: "An even further improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.IRON_PICKAXE4,
    previous: UpgradeId.IRON_PICKAXE2,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 18,
      },
    },
    requiresItems: { [ItemId.GOLD]: 400 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_PICKAXE2]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.IRON_PICKAXE4]: {
    id: UpgradeId.IRON_PICKAXE4,
    name: "Iron Pickaxe +4",
    description: "The ultimate iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_PICKAXE,
    previous: UpgradeId.IRON_PICKAXE3,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 20,
      },
    },
    requiresItems: { [ItemId.GOLD]: 500 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_PICKAXE3]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.STEEL_PICKAXE]: {
    id: UpgradeId.STEEL_PICKAXE,
    name: "Steel Pickaxe",
    description: "A steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_PICKAXE1,
    previous: UpgradeId.IRON_PICKAXE4,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 22,
      },
    },
    requiresItems: { [ItemId.GOLD]: 1000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.IRON_PICKAXE4]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.STEEL_PICKAXE1]: {
    id: UpgradeId.STEEL_PICKAXE1,
    name: "Steel Pickaxe +1",
    description: "An improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_PICKAXE2,
    previous: UpgradeId.STEEL_PICKAXE,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 24,
      },
    },
    requiresItems: { [ItemId.GOLD]: 2000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_PICKAXE]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.STEEL_PICKAXE2]: {
    id: UpgradeId.STEEL_PICKAXE2,
    name: "Steel Pickaxe +2",
    description: "A further improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_PICKAXE3,
    previous: UpgradeId.STEEL_PICKAXE1,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 26,
      },
    },
    requiresItems: { [ItemId.GOLD]: 3000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_PICKAXE1]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.STEEL_PICKAXE3]: {
    id: UpgradeId.STEEL_PICKAXE3,
    name: "Steel Pickaxe +3",
    description: "An even further improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.STEEL_PICKAXE4,
    previous: UpgradeId.STEEL_PICKAXE2,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 28,
      },
    },
    requiresItems: { [ItemId.GOLD]: 4000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_PICKAXE2]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.STEEL_PICKAXE4]: {
    id: UpgradeId.STEEL_PICKAXE4,
    name: "Steel Pickaxe +4",
    description: "The ultimate steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_PICKAXE,
    previous: UpgradeId.STEEL_PICKAXE3,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 30,
      },
    },
    requiresItems: { [ItemId.GOLD]: 5000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_PICKAXE3]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.MITHRIL_PICKAXE]: {
    id: UpgradeId.MITHRIL_PICKAXE,
    name: "Mithril Pickaxe",
    description: "A mithril pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_PICKAXE1,
    previous: UpgradeId.STEEL_PICKAXE4,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 32,
      },
    },
    requiresItems: { [ItemId.GOLD]: 10000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.STEEL_PICKAXE4]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.MITHRIL_PICKAXE1]: {
    id: UpgradeId.MITHRIL_PICKAXE1,
    name: "Mithril Pickaxe +1",
    description: "A mithril pickaxe with improved efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_PICKAXE2,
    previous: UpgradeId.MITHRIL_PICKAXE,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 34,
      },
    },
    requiresItems: { [ItemId.GOLD]: 20000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_PICKAXE]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.MITHRIL_PICKAXE2]: {
    id: UpgradeId.MITHRIL_PICKAXE2,
    name: "Mithril Pickaxe +2",
    description: "A mithril pickaxe with superior efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_PICKAXE3,
    previous: UpgradeId.MITHRIL_PICKAXE1,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 36,
      },
    },
    requiresItems: { [ItemId.GOLD]: 30000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_PICKAXE1]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.MITHRIL_PICKAXE3]: {
    id: UpgradeId.MITHRIL_PICKAXE3,
    name: "Mithril Pickaxe +3",
    description: "A mithril pickaxe with unmatched efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.MITHRIL_PICKAXE4,
    previous: UpgradeId.MITHRIL_PICKAXE2,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 38,
      },
    },
    requiresItems: { [ItemId.GOLD]: 40000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_PICKAXE2]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.MITHRIL_PICKAXE4]: {
    id: UpgradeId.MITHRIL_PICKAXE4,
    name: "Mithril Pickaxe +4",
    description: "A mithril pickaxe with ultimate efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_PICKAXE,
    previous: UpgradeId.MITHRIL_PICKAXE3,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 40,
      },
    },
    requiresItems: { [ItemId.GOLD]: 50000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_PICKAXE3]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.ADAMANT_PICKAXE]: {
    id: UpgradeId.ADAMANT_PICKAXE,
    name: "Adamant Pickaxe",
    description: "An adamant pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_PICKAXE1,
    previous: UpgradeId.MITHRIL_PICKAXE4,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 42,
      },
    },
    requiresItems: { [ItemId.GOLD]: 100000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.MITHRIL_PICKAXE4]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.ADAMANT_PICKAXE1]: {
    id: UpgradeId.ADAMANT_PICKAXE1,
    name: "Adamant Pickaxe +1",
    description: "An adamant pickaxe with improved efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_PICKAXE2,
    previous: UpgradeId.ADAMANT_PICKAXE,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 44,
      },
    },
    requiresItems: { [ItemId.GOLD]: 200000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ADAMANT_PICKAXE]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.ADAMANT_PICKAXE2]: {
    id: UpgradeId.ADAMANT_PICKAXE2,
    name: "Adamant Pickaxe +2",
    description: "An adamant pickaxe with superior efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_PICKAXE3,
    previous: UpgradeId.ADAMANT_PICKAXE1,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 46,
      },
    },
    requiresItems: { [ItemId.GOLD]: 300000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ADAMANT_PICKAXE1]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.ADAMANT_PICKAXE3]: {
    id: UpgradeId.ADAMANT_PICKAXE3,
    name: "Adamant Pickaxe +3",
    description: "An adamant pickaxe with unmatched efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: UpgradeId.ADAMANT_PICKAXE4,
    previous: UpgradeId.ADAMANT_PICKAXE2,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 48,
      },
    },
    requiresItems: { [ItemId.GOLD]: 400000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ADAMANT_PICKAXE2]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },

  [UpgradeId.ADAMANT_PICKAXE4]: {
    id: UpgradeId.ADAMANT_PICKAXE4,
    name: "Adamant Pickaxe +4",
    description: "An adamant pickaxe with ultimate efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: itemTable[ItemId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: UpgradeId.ADAMANT_PICKAXE3,
    modifier: {
      targets: Object.keys(miningTasks) as TaskId[],
      values: {
        [ModifierType.SPEED]: 50,
      },
    },
    requiresItems: { [ItemId.GOLD]: 500000 },
    requiresUpgrades: new Set<UpgradeId>([UpgradeId.ADAMANT_PICKAXE3]),
    requiresMilestones: new Set<MilestoneId>([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
};

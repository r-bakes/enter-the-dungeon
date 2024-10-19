import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { mineralsTable } from "@/data/items/minerals";
import { HomeRooms } from "@/data/menus/enums";
import { SkillModifierType } from "@/data/modifiers/enums";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { prospecting } from "@/data/skills/prospecting";
import { Pickaxe } from "lucide-react";

export const pickaxeUpgrades = {
  basicPickaxe: {
    id: "basicPickaxe",
    name: "Basic Pickaxe",
    description: "Your trusty pickaxe!",
    icon: Pickaxe,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzePickaxe",
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
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe: {
    id: "bronzePickaxe",
    name: "Bronze Pickaxe",
    description: "Your trusty pickaxe!",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzePickaxe1",
    previous: "basicPickaxe",
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
    requiresUpgrades: new Set(["basicPickaxe"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe1: {
    id: "bronzePickaxe1",
    name: "Bronze Pickaxe +1",
    description: "An improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzePickaxe2",
    previous: "bronzePickaxe",
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
    requiresUpgrades: new Set(["bronzePickaxe"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe2: {
    id: "bronzePickaxe2",
    name: "Bronze Pickaxe +2",
    description: "A further improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzePickaxe3",
    previous: "bronzePickaxe1",
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
    requiresUpgrades: new Set(["bronzePickaxe1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe3: {
    id: "bronzePickaxe3",
    name: "Bronze Pickaxe +3",
    description: "An even further improved bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzePickaxe4",
    previous: "bronzePickaxe2",
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
    requiresUpgrades: new Set(["bronzePickaxe2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe4: {
    id: "bronzePickaxe4",
    name: "Bronze Pickaxe +4",
    description: "The ultimate bronze pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironPickaxe",
    previous: "bronzePickaxe3",
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
    requiresUpgrades: new Set(["bronzePickaxe3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironPickaxe: {
    id: "ironPickaxe",
    name: "Iron Pickaxe",
    description: "An iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironPickaxe1",
    previous: "bronzePickaxe4",
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
    requiresUpgrades: new Set(["bronzePickaxe4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironPickaxe1: {
    id: "ironPickaxe1",
    name: "Iron Pickaxe +1",
    description: "An improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironPickaxe2",
    previous: "ironPickaxe",
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
    requiresUpgrades: new Set(["ironPickaxe"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironPickaxe2: {
    id: "ironPickaxe2",
    name: "Iron Pickaxe +2",
    description: "A further improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironPickaxe3",
    previous: "ironPickaxe1",
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
    requiresUpgrades: new Set(["ironPickaxe1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironPickaxe3: {
    id: "ironPickaxe3",
    name: "Iron Pickaxe +3",
    description: "An even further improved iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironPickaxe4",
    previous: "ironPickaxe2",
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
    requiresUpgrades: new Set(["ironPickaxe2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironPickaxe4: {
    id: "ironPickaxe4",
    name: "Iron Pickaxe +4",
    description: "The ultimate iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelPickaxe",
    previous: "ironPickaxe3",
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
    requiresUpgrades: new Set(["ironPickaxe3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelPickaxe: {
    id: "steelPickaxe",
    name: "Steel Pickaxe",
    description: "A steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelPickaxe1",
    previous: "ironPickaxe4",
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
    requiresUpgrades: new Set(["ironPickaxe4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelPickaxe1: {
    id: "steelPickaxe1",
    name: "Steel Pickaxe +1",
    description: "An improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelPickaxe2",
    previous: "steelPickaxe",
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
    requiresUpgrades: new Set(["steelPickaxe"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelPickaxe2: {
    id: "steelPickaxe2",
    name: "Steel Pickaxe +2",
    description: "A further improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelPickaxe3",
    previous: "steelPickaxe1",
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
    requiresUpgrades: new Set(["steelPickaxe1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelPickaxe3: {
    id: "steelPickaxe3",
    name: "Steel Pickaxe +3",
    description: "An even further improved steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelPickaxe4",
    previous: "steelPickaxe2",
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
    requiresUpgrades: new Set(["steelPickaxe2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelPickaxe4: {
    id: "steelPickaxe4",
    name: "Steel Pickaxe +4",
    description: "The ultimate steel pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilPickaxe",
    previous: "steelPickaxe3",
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
    requiresUpgrades: new Set(["steelPickaxe3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilPickaxe: {
    id: "mithrilPickaxe",
    name: "Mithril Pickaxe",
    description: "A mithril pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilPickaxe1",
    previous: "steelPickaxe4",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 32,
      },
    },
    requiresItems: { gold: 10000 },
    requiresUpgrades: new Set(["steelPickaxe4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilPickaxe1: {
    id: "mithrilPickaxe1",
    name: "Mithril Pickaxe +1",
    description: "A mithril pickaxe with improved efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilPickaxe2",
    previous: "mithrilPickaxe",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 34,
      },
    },
    requiresItems: { gold: 20000 },
    requiresUpgrades: new Set(["mithrilPickaxe"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilPickaxe2: {
    id: "mithrilPickaxe2",
    name: "Mithril Pickaxe +2",
    description: "A mithril pickaxe with superior efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilPickaxe3",
    previous: "mithrilPickaxe1",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 36,
      },
    },
    requiresItems: { gold: 30000 },
    requiresUpgrades: new Set(["mithrilPickaxe1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilPickaxe3: {
    id: "mithrilPickaxe3",
    name: "Mithril Pickaxe +3",
    description: "A mithril pickaxe with unmatched efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilPickaxe4",
    previous: "mithrilPickaxe2",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 38,
      },
    },
    requiresItems: { gold: 40000 },
    requiresUpgrades: new Set(["mithrilPickaxe2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilPickaxe4: {
    id: "mithrilPickaxe4",
    name: "Mithril Pickaxe +4",
    description: "A mithril pickaxe with ultimate efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantPickaxe",
    previous: "mithrilPickaxe3",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 40,
      },
    },
    requiresItems: { gold: 50000 },
    requiresUpgrades: new Set(["mithrilPickaxe3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantPickaxe: {
    id: "adamantPickaxe",
    name: "Adamant Pickaxe",
    description: "An adamant pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantPickaxe1",
    previous: "mithrilPickaxe4",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 42,
      },
    },
    requiresItems: { gold: 100000 },
    requiresUpgrades: new Set(["mithrilPickaxe4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantPickaxe1: {
    id: "adamantPickaxe1",
    name: "Adamant Pickaxe 1",
    description: "An adamant pickaxe with improved efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantPickaxe2",
    previous: "adamantPickaxe",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 44,
      },
    },
    requiresItems: { gold: 200000 },
    requiresUpgrades: new Set(["adamantPickaxe"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantPickaxe2: {
    id: "adamantPickaxe2",
    name: "Adamant Pickaxe +2",
    description: "An adamant pickaxe with superior efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantPickaxe3",
    previous: "adamantPickaxe1",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 46,
      },
    },
    requiresItems: { gold: 300000 },
    requiresUpgrades: new Set(["adamantPickaxe1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantPickaxe3: {
    id: "adamantPickaxe3",
    name: "Adamant Pickaxe +3",
    description: "An adamant pickaxe with unmatched efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantPickaxe4",
    previous: "adamantPickaxe2",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 48,
      },
    },
    requiresItems: { gold: 400000 },
    requiresUpgrades: new Set(["adamantPickaxe2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantPickaxe4: {
    id: "adamantPickaxe4",
    name: "Adamant Pickaxe +4",
    description: "An adamant pickaxe with ultimate efficiency",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: "adamantPickaxe3",
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.category === ProspectingTaskCategories.MINE)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 50,
      },
    },
    requiresItems: { gold: 500000 },
    requiresUpgrades: new Set(["adamantPickaxe3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  }
}
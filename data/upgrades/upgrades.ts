import { Anvil, Bed, Bird, Hammer, Heater, Pickaxe } from "lucide-react";
import { Upgrade } from "@/types/upgrades";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { prospecting } from "@/data/skills/prospecting";
import { skillTable } from "@/data/skills/skills";
import { ProspectingTaskCategories } from "@/data/skills/enums";
import { SkillModifierType } from "@/data/modifiers/enums";
import { HomeRooms } from "@/data/menus/enums";
import { mineralsTable } from "@/data/items/minerals";
import { smithing } from "@/data/skills/smithing";
import { barsTable } from "@/data/items/bars";

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

export const upgradeTable: { [upgradeId: string]: Upgrade } = {
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
    requiresItems: { bronzeBar: 0 },
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
        [SkillModifierType.SPEED]: 1,
      },
    },
    requiresItems: { gold: 10, bronzeBar: 10 },
    requiresUpgrades: new Set(["basicPickaxe"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe1: {
    id: "bronzePickaxe1",
    name: "Bronze Pickaxe +1",
    description: "A sharpened bronze pick!",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzePickaxe2",
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
    requiresItems: { gold: 100, bronzeBar: 100 },
    requiresUpgrades: new Set(["bronzePickaxe"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe2: {
    id: "bronzePickaxe2",
    name: "Bronze Pick +2",
    description: "An even sharper bronze pick!",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzePickaxe3",
    previous: "basicPickaxe1",
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
        [SkillModifierType.SPEED]: 3,
      },
    },
    requiresItems: { gold: 1000, bronzeBar: 1000 },
    requiresUpgrades: new Set(["bronzePickaxe1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe3: {
    id: "bronzePickaxe3",
    name: "Bronze Pick +3",
    description: "A honed bronze pick!",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzePickaxe4",
    previous: "basicPickaxe2",
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
    requiresItems: { gold: 1000, bronzeBar: 5000 },
    requiresUpgrades: new Set(["bronzePickaxe2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzePickaxe4: {
    id: "bronzePickaxe4",
    name: "Bronze Pick +4",
    description: "Wow thats a sharp bronze pick!",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironPickaxe",
    previous: "basicPickaxe3",
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
        [SkillModifierType.SPEED]: 5,
      },
    },
    requiresItems: { gold: 1000, bronzeBar: 10000 },
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
    previous: "basicPickaxe4",
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
    requiresItems: { gold: 100, ironBar: 100 },
    requiresUpgrades: new Set(["bronzePickaxe4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironPickaxe1: {
    id: "ironPickaxe1",
    name: "Iron Pickaxe +1",
    description: "An iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
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
        [SkillModifierType.SPEED]: 7,
      },
    },
    requiresItems: { gold: 1000, ironBar: 1000 },
    requiresUpgrades: new Set(["ironPickaxes"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  basicHammer: {
    id: "basicHammer",
    name: "Basic Hammer",
    description: "Your trusty hammer!",
    icon: Hammer,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 0,
      },
    },
    next: "bronzeHammer",
    previous: null,
    requiresItems: {},
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer: {
    id: "bronzeHammer",
    name: "Bronze Hammer",
    description: "A bronze hammer!",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 1,
      },
    },
    next: "bronzeHammer1",
    previous: "basicHammer",
    requiresItems: { gold: 100, bronzeBar: 100 },
    requiresUpgrades: new Set(["basicHammer"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer1: {
    id: "bronzeHammer1",
    name: "Bronze Hammer +1",
    description: "A bronze hammer!",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzeHammer2",
    previous: "bronzeHammer",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 2,
      },
    },
    requiresItems: { gold: 1000, bronzeBar: 1000 },
    requiresUpgrades: new Set(["bronzeHammer"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  basicForge: {
    id: "basicForge",
    name: "Basic Forge",
    description: "Your trusty Forge!",
    icon: Heater,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: null,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 0,
        [SkillModifierType.DOUBLE_CHANCE]: 0,
        [SkillModifierType.PRODUCTION_MULTIPLIER]: 0,
        [SkillModifierType.EXPERIENCE]: 0,
      },
    },
    requiresItems: { steelBar: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  basicAnvil: {
    id: "basicAnvil",
    name: "Basic Anvil",
    description: "Your trusty Anvil!",
    icon: Anvil,
    iconStyle: {
      fill: barsTable.steelBar.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: null,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 0,
        [SkillModifierType.DOUBLE_CHANCE]: 0,
      },
    },
    requiresItems: { steelBar: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  coalMineCanery: {
    id: "coalMineCanery",
    name: "Coal Mine Canery",
    description: "Now were cooking!",
    icon: Bird,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: null,
    modifier: {
      targets: {
        [prospecting.id]: Object.entries(prospecting.tasks)
          .filter(([taskId, task]) => task.id === prospecting.tasks.mineCoal.id)
          .map(([taskId, task]) => taskId),
      },
      values: {
        [SkillModifierType.SPEED]: 10,
        [SkillModifierType.PRODUCTION_MULTIPLIER]: 1,
      },
    },
    requiresItems: { gold: 1000000 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
  basicBed: {
    id: "basicBed",
    name: "Basic Bed",
    description: "Really uncomfortable",
    icon: Bed,
    iconStyle: {
      fill: "white",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "strawBed",
    previous: null,
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 0,
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
    description: "I feel itchy...",
    icon: Bed,
    iconStyle: {
      fill: "white",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: "basicBed",
    modifier: {
      targets: GLOBAL_MODIFIER,
      values: {
        [SkillModifierType.EXPERIENCE]: 1,
      },
    },
    requiresItems: { gold: 10000 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.BEDROOM,
  },
};

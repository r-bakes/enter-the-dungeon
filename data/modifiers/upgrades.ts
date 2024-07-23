import { Anvil, Bird, Gavel, Heater, Pickaxe } from "lucide-react";
import { TASK_AND_ITEM_ICON_STYLE } from "../configurations";
import { mineralsTable } from "../items/minerals";
import { prospecting } from "../skills/prospecting";
import { smithing } from "../skills/smithing";
import { barsTable } from "../items/bars";
import { SkillModifierType, Upgrade } from "./types";
import { ProspectingTaskCategories } from "../skills/types";
import { HomeRooms } from "../menus/types";

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
    requires: { bronzeBar: 0 },
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
    requires: { bronzeBar: 0 },
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
    requires: { bronzeBar: 10 },
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
    requires: { bronzeBar: 100 },
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
    requires: { bronzeBar: 1000 },
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
    requires: { bronzeBar: 10000 },
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
    requires: { ironBar: 100 },
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironPickaxe1: {
    id: "ironPickaxe",
    name: "Iron Pickaxe +1",
    description: "An iron pickaxe",
    icon: Pickaxe,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
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
    requires: { ironBar: 1000 },
    homeRoom: HomeRooms.TOOL_SHED,
  },
  basicHammer: {
    id: "basicHammer",
    name: "Basic Hammer",
    description: "Your trusty hammer!",
    icon: Gavel,
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
    requires: { gold: 0 },
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer: {
    id: "bronzeHammer",
    name: "Bronze Hammer",
    description: "A bronze hammer!",
    icon: Gavel,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
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
    next: "bronzeHammer1",
    requires: { bronzeBar: 0 },
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer1: {
    id: "bronzeHammer1",
    name: "Bronze Hammer +1",
    description: "A bronze hammer!",
    icon: Gavel,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 1,
      },
    },
    requires: { bronzeBar: 10 },
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
    requires: { steelBar: 0 },
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
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 0,
        [SkillModifierType.DOUBLE_CHANCE]: 0,
      },
    },
    requires: { steelBar: 0 },
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
    requires: { gold: 1000000 },
    homeRoom: HomeRooms.MENAGERIE,
  },
};

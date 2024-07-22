import { Gavel, Pickaxe } from "lucide-react";
import { TASK_AND_ITEM_ICON_STYLE } from "../configurations";
import { HomeRooms } from "../menus/home";
import { SkillModifies, SkillModifierType } from "./skillModifiers";
import { GameObject } from "../gameObject";
import { mineralsTable } from "../items/minerals";
import { prospecting } from "../skills/prospecting";
import { smithing } from "../skills/smithing";
import { getAllTasks } from "../skills/skills";

export type Upgrade = {
  next: string | null;
  modifier: SkillModifies;
  requires: {
    [itemId: string]: number;
  };
  homeRoom: HomeRooms;
} & GameObject;

export const upgradeTable: { [upgradeId: string]: Upgrade } = {
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
        [prospecting.id]: prospecting.tasks.mining.map((task) => task.id),
      },
      values: {
        [SkillModifierType.SPEED]: 0,
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
        [prospecting.id]: prospecting.tasks.mining.map((task) => task.id),
      },
      values: {
        [SkillModifierType.SPEED]: 1,
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
        [prospecting.id]: prospecting.tasks.mining.map((task) => task.id),
      },
      values: {
        [SkillModifierType.SPEED]: 2,
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
        [prospecting.id]: prospecting.tasks.mining.map((task) => task.id),
      },
      values: {
        [SkillModifierType.SPEED]: 3,
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
        [prospecting.id]: prospecting.tasks.mining.map((task) => task.id),
      },
      values: {
        [SkillModifierType.SPEED]: 4,
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
        [prospecting.id]: prospecting.tasks.mining.map((task) => task.id),
      },
      values: {
        [SkillModifierType.SPEED]: 5,
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
        [prospecting.id]: prospecting.tasks.mining.map((task) => task.id),
      },
      values: {
        [SkillModifierType.SPEED]: 6,
      },
    },
    requires: { ironBar: 1000 },
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer: {
    id: "bronzeHammer",
    name: "Bronze Hammer",
    description: "Your trusty hammer!",
    icon: Gavel,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    modifier: {
      targets: {
        [smithing.id]: getAllTasks(smithing.tasks).map((task) => task.id),
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
        [smithing.id]: getAllTasks(smithing.tasks).map((task) => task.id),
      },
      values: {
        [SkillModifierType.SPEED]: 1,
      },
    },
    requires: { bronzeBar: 10 },
    homeRoom: HomeRooms.TOOL_SHED,
  },
};

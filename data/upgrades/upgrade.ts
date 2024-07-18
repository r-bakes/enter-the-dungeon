import { GameObject, getAllTasks } from "../gameObject";
import { Gavel, Pickaxe } from "lucide-react";
import { mineralsTable } from "../items/minerals";
import { TASK_AND_ITEM_ICON_STYLE } from "../configurations";
import { prospecting } from "../skills/prospecting";
import { Skill, Task } from "../skills/skills";
import { HomeRooms } from "../menus/home";
import { smithing } from "../skills/smithing";

export enum UpgradeModifierType {
  SPEED = "speed",
  DOUBLE_CHANCE = "double chance",
  EXPERIENCE = "experience",
}

export type UpgradeModifier = {
  type: UpgradeModifierType;
  skill: Set<Skill>;
  tasks: Set<Task>;
  value: number;
};

export type Upgrade = {
  next: string | null;
  modifier: UpgradeModifier;
  requires: { [itemId: string]: number };
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
      type: UpgradeModifierType.SPEED,
      value: 0,
      skill: new Set([prospecting]),
      tasks: new Set([...prospecting.tasks.gathering]),
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
      type: UpgradeModifierType.SPEED,
      value: 1,
      skill: new Set([prospecting]),
      tasks: new Set([...prospecting.tasks.gathering]),
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
      type: UpgradeModifierType.SPEED,
      value: 2,
      skill: new Set([prospecting]),
      tasks: new Set([...prospecting.tasks.gathering]),
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
      type: UpgradeModifierType.SPEED,
      value: 3,
      skill: new Set([prospecting]),
      tasks: new Set([...prospecting.tasks.gathering]),
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
      type: UpgradeModifierType.SPEED,
      value: 4,
      skill: new Set([prospecting]),
      tasks: new Set([...prospecting.tasks.gathering]),
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
      type: UpgradeModifierType.SPEED,
      value: 5,
      skill: new Set([prospecting]),
      tasks: new Set([...prospecting.tasks.gathering]),
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
      type: UpgradeModifierType.SPEED,
      value: 5,
      skill: new Set([prospecting]),
      tasks: new Set([...prospecting.tasks.gathering]),
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
    next: "bronzeHammer1",
    modifier: {
      type: UpgradeModifierType.SPEED,
      value: 0,
      skill: new Set([prospecting]),
      tasks: new Set([...prospecting.tasks.gathering]),
    },
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
      type: UpgradeModifierType.SPEED,
      value: 1,
      skill: new Set([smithing]),
      tasks: new Set([...getAllTasks(smithing.tasks)]),
    },
    requires: { bronzeBar: 10 },
    homeRoom: HomeRooms.TOOL_SHED,
  },
};

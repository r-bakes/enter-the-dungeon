import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Anvil, Bird, Heater } from "lucide-react";
import { smithing } from "../skills/smithing";
import { SkillModifierType } from "../modifiers/enums";
import { HomeRooms } from "../menus/enums";
import { prospecting } from "../skills/prospecting";
import { Upgrade } from "@/types/upgrades";
import { tasksTable } from "../tasks/tasks";
import { UpgradeId } from "./enums";
import { ItemId } from "../items/enums";
import { itemTable } from "../items/items";

export const miscUpgrades: { [id in UpgradeId]?: Upgrade } = {
  [UpgradeId.BASIC_FORGE]: {
    id: UpgradeId.BASIC_FORGE,
    name: "Basic Forge",
    description: "Your trusty Forge!",
    icon: Heater,
    iconStyle: {
      fill: itemTable[ItemId.COPPER_ORE].iconStyle.fill,
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
    requiresItems: { [ItemId.GOLD]: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.BASIC_ANVIL]: {
    id: UpgradeId.BASIC_ANVIL,
    name: "Basic Anvil",
    description: "Your trusty Anvil!",
    icon: Anvil,
    iconStyle: {
      fill: itemTable[ItemId.STEEL_BAR].iconStyle.fill,
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
    requiresItems: { [ItemId.GOLD]: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [UpgradeId.COAL_MINE_CANERY]: {
    id: UpgradeId.COAL_MINE_CANERY,
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
        [prospecting.id]: [tasksTable.MINE_COAL.id],
      },
      values: {
        [SkillModifierType.SPEED]: 10,
        [SkillModifierType.PRODUCTION_MULTIPLIER]: 1,
      },
    },
    requiresItems: { [ItemId.GOLD]: 1000000 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.MENAGERIE,
  },
};

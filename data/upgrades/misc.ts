import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Anvil, Bird, Heater } from "lucide-react";
import { smithing } from "../skills/smithing";
import { mineralsTable } from "../items/minerals";
import { SkillModifierType } from "../modifiers/enums";
import { HomeRooms } from "../menus/enums";
import { barsTable } from "../items/bars";
import { prospecting } from "../skills/prospecting";
import { BarId, MineralId, MiscId } from "../items/enums";
import { MiscUpgradeId } from "./enums";
import { Upgrade } from "@/types/upgrades";

export const miscUpgrades: { [id in MiscUpgradeId]: Upgrade } = {
  [MiscUpgradeId.BASIC_FORGE]: {
    id: MiscUpgradeId.BASIC_FORGE,
    name: "Basic Forge",
    description: "Your trusty Forge!",
    icon: Heater,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
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
    requiresItems: { gold: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [MiscUpgradeId.BASIC_ANVIL]: {
    id: MiscUpgradeId.BASIC_ANVIL,
    name: "Basic Anvil",
    description: "Your trusty Anvil!",
    icon: Anvil,
    iconStyle: {
      fill: barsTable[BarId.STEEL_BAR].iconStyle.fill,
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
    requiresItems: { gold: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.WORKSHOP,
  },
  [MiscUpgradeId.COAL_MINE_CANERY]: {
    id: MiscUpgradeId.COAL_MINE_CANERY,
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
};

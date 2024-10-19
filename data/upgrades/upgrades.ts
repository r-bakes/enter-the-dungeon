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
import { pickaxeUpgrades } from "@/data/upgrades/pickaxeUpgrades";
import { hammerUpgrades } from "@/data/upgrades/hammerUpgrades";
import { bedUpgrades } from "@/data/upgrades/bedUpgrades";

export const upgradeTable: { [upgradeId: string]: Upgrade } = {
  ...pickaxeUpgrades,
  ...hammerUpgrades,
  ...bedUpgrades,
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
    requiresItems: { gold: 0 },
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
    requiresItems: { gold: 0 },
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
};

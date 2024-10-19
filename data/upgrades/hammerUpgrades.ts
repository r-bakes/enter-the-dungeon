import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { mineralsTable } from "@/data/items/minerals";
import { HomeRooms } from "@/data/menus/enums";
import { SkillModifierType } from "@/data/modifiers/enums";
import { smithing } from "@/data/skills/smithing";
import { Hammer } from "lucide-react";

export const hammerUpgrades = {
  basicHammer: {
    id: "basicHammer",
    name: "Basic Hammer",
    description: "Your trusty hammer!",
    icon: Hammer,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzeHammer",
    previous: null,
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 0,
      },
    },
    requiresItems: { gold: 0 },
    requiresUpgrades: new Set([]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer: {
    id: "bronzeHammer",
    name: "Bronze Hammer",
    description: "Your trusty hammer!",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzeHammer1",
    previous: "basicHammer",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 2,
      },
    },
    requiresItems: { gold: 10 },
    requiresUpgrades: new Set(["basicHammer"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer1: {
    id: "bronzeHammer1",
    name: "Bronze Hammer +1",
    description: "An improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzeHammer2",
    previous: "bronzeHammer",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 4,
      },
    },
    requiresItems: { gold: 20 },
    requiresUpgrades: new Set(["bronzeHammer"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer2: {
    id: "bronzeHammer2",
    name: "Bronze Hammer +2",
    description: "A further improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzeHammer3",
    previous: "bronzeHammer1",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 6,
      },
    },
    requiresItems: { gold: 30 },
    requiresUpgrades: new Set(["bronzeHammer1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer3: {
    id: "bronzeHammer3",
    name: "Bronze Hammer +3",
    description: "An even further improved bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "bronzeHammer4",
    previous: "bronzeHammer2",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 8,
      },
    },
    requiresItems: { gold: 40 },
    requiresUpgrades: new Set(["bronzeHammer2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  bronzeHammer4: {
    id: "bronzeHammer4",
    name: "Bronze Hammer +4",
    description: "The ultimate bronze hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironHammer",
    previous: "bronzeHammer3",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 10,
      },
    },
    requiresItems: { gold: 50 },
    requiresUpgrades: new Set(["bronzeHammer3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironHammer: {
    id: "ironHammer",
    name: "Iron Hammer",
    description: "An iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironHammer1",
    previous: "bronzeHammer4",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 12,
      },
    },
    requiresItems: { gold: 100 },
    requiresUpgrades: new Set(["bronzeHammer4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironHammer1: {
    id: "ironHammer1",
    name: "Iron Hammer +1",
    description: "An improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironHammer2",
    previous: "ironHammer",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 14,
      },
    },
    requiresItems: { gold: 200 },
    requiresUpgrades: new Set(["ironHammer"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironHammer2: {
    id: "ironHammer2",
    name: "Iron Hammer +2",
    description: "A further improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironHammer3",
    previous: "ironHammer1",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 16,
      },
    },
    requiresItems: { gold: 300 },
    requiresUpgrades: new Set(["ironHammer1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironHammer3: {
    id: "ironHammer3",
    name: "Iron Hammer +3",
    description: "An even further improved iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "ironHammer4",
    previous: "ironHammer2",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 18,
      },
    },
    requiresItems: { gold: 400 },
    requiresUpgrades: new Set(["ironHammer2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  ironHammer4: {
    id: "ironHammer4",
    name: "Iron Hammer +4",
    description: "The ultimate iron hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelHammer",
    previous: "ironHammer3",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 20,
      },
    },
    requiresItems: { gold: 500 },
    requiresUpgrades: new Set(["ironHammer3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelHammer: {
    id: "steelHammer",
    name: "Steel Hammer",
    description: "A steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelHammer1",
    previous: "ironHammer4",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 22,
      },
    },
    requiresItems: { gold: 1000 },
    requiresUpgrades: new Set(["ironHammer4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelHammer1: {
    id: "steelHammer1",
    name: "Steel Hammer +1",
    description: "An improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelHammer2",
    previous: "steelHammer",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 24,
      },
    },
    requiresItems: { gold: 2000 },
    requiresUpgrades: new Set(["steelHammer"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelHammer2: {
    id: "steelHammer2",
    name: "Steel Hammer +2",
    description: "A further improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelHammer3",
    previous: "steelHammer1",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 26,
      },
    },
    requiresItems: { gold: 3000 },
    requiresUpgrades: new Set(["steelHammer1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelHammer3: {
    id: "steelHammer3",
    name: "Steel Hammer +3",
    description: "An even further improved steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "steelHammer4",
    previous: "steelHammer2",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 28,
      },
    },
    requiresItems: { gold: 4000 },
    requiresUpgrades: new Set(["steelHammer2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  steelHammer4: {
    id: "steelHammer4",
    name: "Steel Hammer +4",
    description: "The ultimate steel hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilHammer",
    previous: "steelHammer3",
    modifier: {
      targets: { [smithing.id]: Object.keys(smithing.tasks) },
      values: {
        [SkillModifierType.SPEED]: 30,
      },
    },
    requiresItems: { gold: 5000 },
    requiresUpgrades: new Set(["steelHammer3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilHammer: {
    id: "mithrilHammer",
    name: "Mithril Hammer",
    description: "A mithril hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilHammer1",
    previous: "steelHammer4",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 32,
      },
    },
    requiresItems: { gold: 10000 },
    requiresUpgrades: new Set(["steelHammer4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilHammer1: {
    id: "mithrilHammer1",
    name: "Mithril Hammer +1",
    description: "A mithril hammer with improved efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilHammer2",
    previous: "mithrilHammer",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 34,
      },
    },
    requiresItems: { gold: 20000 },
    requiresUpgrades: new Set(["mithrilHammer"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilHammer2: {
    id: "mithrilHammer2",
    name: "Mithril Hammer +2",
    description: "A mithril hammer with superior efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilHammer3",
    previous: "mithrilHammer1",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 36,
      },
    },
    requiresItems: { gold: 30000 },
    requiresUpgrades: new Set(["mithrilHammer1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilHammer3: {
    id: "mithrilHammer3",
    name: "Mithril Hammer +3",
    description: "A mithril hammer with unmatched efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "mithrilHammer4",
    previous: "mithrilHammer2",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 38,
      },
    },
    requiresItems: { gold: 40000 },
    requiresUpgrades: new Set(["mithrilHammer2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  mithrilHammer4: {
    id: "mithrilHammer4",
    name: "Mithril Hammer +4",
    description: "A mithril hammer with ultimate efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantHammer",
    previous: "mithrilHammer3",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 40,
      },
    },
    requiresItems: { gold: 50000 },
    requiresUpgrades: new Set(["mithrilHammer3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantHammer: {
    id: "adamantHammer",
    name: "Adamant Hammer",
    description: "An adamant hammer",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantHammer1",
    previous: "mithrilHammer4",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 42,
      },
    },
    requiresItems: { gold: 100000 },
    requiresUpgrades: new Set(["mithrilHammer4"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantHammer1: {
    id: "adamantHammer1",
    name: "Adamant Hammer 1",
    description: "An adamant hammer with improved efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantHammer2",
    previous: "adamantHammer",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 44,
      },
    },
    requiresItems: { gold: 200000 },
    requiresUpgrades: new Set(["adamantHammer"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantHammer2: {
    id: "adamantHammer2",
    name: "Adamant Hammer +2",
    description: "An adamant hammer with superior efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantHammer3",
    previous: "adamantHammer1",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 46,
      },
    },
    requiresItems: { gold: 300000 },
    requiresUpgrades: new Set(["adamantHammer1"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantHammer3: {
    id: "adamantHammer3",
    name: "Adamant Hammer +3",
    description: "An adamant hammer with unmatched efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: "adamantHammer4",
    previous: "adamantHammer2",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 48,
      },
    },
    requiresItems: { gold: 400000 },
    requiresUpgrades: new Set(["adamantHammer2"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
  adamantHammer4: {
    id: "adamantHammer4",
    name: "Adamant Hammer +4",
    description: "An adamant hammer with ultimate efficiency",
    icon: Hammer,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    next: null,
    previous: "adamantHammer3",
    modifier: {
      targets: {
        [smithing.id]: Object.keys(smithing.tasks),
      },
      values: {
        [SkillModifierType.SPEED]: 50,
      },
    },
    requiresItems: { gold: 500000 },
    requiresUpgrades: new Set(["adamantHammer3"]),
    requiresMilestones: new Set([]),
    homeRoom: HomeRooms.TOOL_SHED,
  },
};

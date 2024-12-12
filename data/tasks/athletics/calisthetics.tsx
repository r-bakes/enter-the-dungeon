import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { AthleticsTaskCategories } from "@/data/skills/enums";
import { Task } from "@/types/skills";
import {
  PersonStanding,
  Heart,
  UserCheck,
  Repeat,
  Redo,
  Footprints,
  UploadIcon,
} from "lucide-react";

const agilityCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
]);

export const calistheticsTasks: { [taskId: string]: Task } = {
  jumpingJacks: {
    id: "jumpingJacks",
    name: "Jumping Jacks",
    description: "Do jumping jacks.",
    icon: PersonStanding,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 3,
    experience: 10,
    requiredLevel: 1,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  sprinting: {
    id: "sprinting",
    name: "Sprinting",
    description: "Run at full speed for a short distance.",
    icon: Footprints,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 100,
    requiredLevel: 10,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  longJump: {
    id: "longJump",
    name: "Long Jump",
    description: "Perform a long jump.",
    icon: Redo,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 8,
    experience: 150,
    requiredLevel: 20,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  pushUps: {
    id: "pushUps",
    name: "Push-Ups",
    description: "Perform a set of push-ups.",
    icon: Heart,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 5,
    experience: 80,
    requiredLevel: 30,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  pullUps: {
    id: "pullUps",
    name: "Pull-Ups",
    description: "Perform a set of pull-ups.",
    icon: UserCheck,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 6,
    experience: 120,
    requiredLevel: 40,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  burpees: {
    id: "burpees",
    name: "Burpees",
    description: "Perform a set of burpees.",
    icon: Repeat,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 7,
    experience: 200,
    requiredLevel: 50,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  mountainClimbers: {
    id: "mountainClimbers",
    name: "Mountain Climbers",
    description: "Perform mountain climbers.",
    icon: UploadIcon,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 9,
    experience: 250,
    requiredLevel: 60,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },
};

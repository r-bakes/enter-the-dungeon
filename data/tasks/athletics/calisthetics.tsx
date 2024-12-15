import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { AthleticsTaskCategories } from "@/data/skills/enums";
import {
  PersonStanding,
  Heart,
  UserCheck,
  Repeat,
  Redo,
  Footprints,
  UploadIcon,
} from "lucide-react";
import { CalistheticCategoryTaskId } from "./enum";
import { Task } from "@/types/tasks";

const agilityCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
]);

export const calistheticsTasks: { [id in CalistheticCategoryTaskId]: Task } = {
  [CalistheticCategoryTaskId.JUMPING_JACKS]: {
    id: CalistheticCategoryTaskId.JUMPING_JACKS,
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

  [CalistheticCategoryTaskId.SPRINTING]: {
    id: CalistheticCategoryTaskId.SPRINTING,
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

  [CalistheticCategoryTaskId.LONG_JUMP]: {
    id: CalistheticCategoryTaskId.LONG_JUMP,
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

  [CalistheticCategoryTaskId.PUSH_UPS]: {
    id: CalistheticCategoryTaskId.PUSH_UPS,
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

  [CalistheticCategoryTaskId.PULL_UPS]: {
    id: CalistheticCategoryTaskId.PULL_UPS,
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

  [CalistheticCategoryTaskId.BURPEES]: {
    id: CalistheticCategoryTaskId.BURPEES,
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

  [CalistheticCategoryTaskId.MOUNTAIN_CLIMBERS]: {
    id: CalistheticCategoryTaskId.MOUNTAIN_CLIMBERS,
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

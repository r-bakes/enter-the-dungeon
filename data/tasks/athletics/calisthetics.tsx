import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ModifierType } from "@/data/modifiers/enums";
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
import { Task } from "@/types/tasks";
import { TaskId } from "../enum";

const agilityCommonModifiers = new Set([
  ModifierType.SPEED,
  ModifierType.EXPERIENCE,
]);

export const calistheticsTasks: { [id in TaskId]?: Task } = {
  [TaskId.JUMPING_JACKS]: {
    id: TaskId.JUMPING_JACKS,
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

  [TaskId.SPRINTING]: {
    id: TaskId.SPRINTING,
    name: "Sprinting",
    description: "Run at full speed for a short distance.",
    icon: Footprints,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 4,
    experience: 50,
    requiredLevel: 5,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.LONG_JUMP]: {
    id: TaskId.LONG_JUMP,
    name: "Long Jump",
    description: "Perform a standing long jump.",
    icon: Redo,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 5,
    experience: 80,
    requiredLevel: 10,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.PUSH_UPS]: {
    id: TaskId.PUSH_UPS,
    name: "Push-Ups",
    description: "Perform a set of push-ups.",
    icon: Heart,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 5,
    experience: 100,
    requiredLevel: 15,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.PULL_UPS]: {
    id: TaskId.PULL_UPS,
    name: "Pull-Ups",
    description: "Do a series of pull-ups.",
    icon: UserCheck,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 6,
    experience: 120,
    requiredLevel: 20,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.BURPEES]: {
    id: TaskId.BURPEES,
    name: "Burpees",
    description: "Perform a set of burpees.",
    icon: Repeat,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 7,
    experience: 150,
    requiredLevel: 25,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.MOUNTAIN_CLIMBERS]: {
    id: TaskId.MOUNTAIN_CLIMBERS,
    name: "Mountain Climbers",
    description: "Perform mountain climbers.",
    icon: UploadIcon,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 8,
    experience: 180,
    requiredLevel: 30,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.PLANK]: {
    id: TaskId.PLANK,
    name: "Plank",
    description: "Hold a plank position to build core strength.",
    icon: PersonStanding,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 5,
    experience: 200,
    requiredLevel: 35,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.HIGH_KNEES]: {
    id: TaskId.HIGH_KNEES,
    name: "High Knees",
    description: "Run in place, lifting knees to waist height.",
    icon: Footprints,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 5,
    experience: 220,
    requiredLevel: 40,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.SQUATS]: {
    id: TaskId.SQUATS,
    name: "Squats",
    description: "Perform a set of bodyweight squats.",
    icon: Redo,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 7,
    experience: 250,
    requiredLevel: 45,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.LUNGES]: {
    id: TaskId.LUNGES,
    name: "Lunges",
    description: "Perform forward lunges to strengthen legs and glutes.",
    icon: Heart,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 8,
    experience: 280,
    requiredLevel: 50,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.CRUNCHES]: {
    id: TaskId.CRUNCHES,
    name: "Crunches",
    description: "Perform core-strengthening crunches.",
    icon: UserCheck,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 8,
    experience: 300,
    requiredLevel: 55,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },
};

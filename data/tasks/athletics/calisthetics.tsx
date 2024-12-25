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
    durationSec: 10,
    experience: 100,
    requiredLevel: 10,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.LONG_JUMP]: {
    id: TaskId.LONG_JUMP,
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
    experience: 80,
    requiredLevel: 30,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },

  [TaskId.PULL_UPS]: {
    id: TaskId.PULL_UPS,
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
    experience: 200,
    requiredLevel: 50,
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
    durationSec: 9,
    experience: 250,
    requiredLevel: 60,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },
};

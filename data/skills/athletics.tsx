import { PersonStanding } from "lucide-react";
import { Skill, Task } from "./skills";
import {
  SKILL_AND_MENU_ICON_STYLE,
  TASK_AND_ITEM_ICON_STYLE,
} from "../configurations";
import { SkillModifierType } from "../modifiers/skillModifiers";

const agilityCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
]);

export enum AthleticsTaskCategories {
  CALISTHETICS = "calisthetics",
}

const AthleticsTasks = {
  jumpingJacks: {
    id: "jumpingJacks",
    name: "Jumping Jacks",
    description: "Do jumping jacks.",
    icon: PersonStanding,
    iconStyle: {
      fill: "none",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    durationSec: 10,
    experience: 1,
    requiredLevel: 1,
    lootTable: {},
    requires: {},
    category: AthleticsTaskCategories.CALISTHETICS,
    applicableModifiers: agilityCommonModifiers,
  },
};

export const athletics: Skill = {
  id: "athletics",
  name: "Athletics",
  description: "The ability to perform physically.",
  icon: PersonStanding,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: AthleticsTasks,
  taskCategories: AthleticsTaskCategories,
};

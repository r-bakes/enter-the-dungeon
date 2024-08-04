import {
  SKILL_AND_MENU_ICON_STYLE,
  TASK_AND_ITEM_ICON_STYLE,
} from "@/configurations/configurations";
import { SkillModifierType } from "@/data/modifiers/enums";
import { AthleticsTaskCategories } from "@/data/skills/enums";
import { Skill } from "@/types/skills";
import { PersonStanding } from "lucide-react";

const agilityCommonModifiers = new Set([
  SkillModifierType.SPEED,
  SkillModifierType.EXPERIENCE,
]);

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

import { LucideIcon } from "lucide-react";
import { SkillModifierType } from "@/data/modifiers/enums";
import { IconStyle } from "@/types/gameObjects";

export type Modifier = {
  targets: { [skillId: string]: string[] };
  values: { [type in SkillModifierType]?: number };
};
export type SkillModifierTable = {
  [skillId: string]: {
    [taskId: string]: SkillModifier;
  };
};
export type SkillModifier = {
  [type in SkillModifierType]?: number;
};
export type SkillModifierIconsType = {
  [type in SkillModifierType]: { icon: LucideIcon; iconStyle: IconStyle };
};

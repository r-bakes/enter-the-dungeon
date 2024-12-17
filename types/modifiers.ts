import { LucideIcon } from "lucide-react";
import { SkillModifierType } from "@/data/modifiers/enums";
import { IconStyle } from "@/types/gameObjects";
import { SkillId } from "@/data/skills/enums";
import { TaskId } from "@/data/tasks/enum";

export type Modifier = {
  targets: { [id in SkillId]?: string[] };
  values: { [type in SkillModifierType]?: number };
};
export type SkillModifierTable = {
  [id in SkillId]?: {
    [id in TaskId]?: SkillModifier;
  };
};
export type SkillModifier = {
  [type in SkillModifierType]?: number;
};
export type SkillModifierIconsType = {
  [type in SkillModifierType]: { icon: LucideIcon; iconStyle: IconStyle };
};

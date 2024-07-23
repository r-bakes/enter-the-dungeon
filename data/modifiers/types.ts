import { LucideIcon } from "lucide-react";
import { HomeRooms } from "../menus/types";
import { GameObject, IconStyle } from "../gameObject";

export type SkillModifies = {
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

export enum SkillModifierType {
  SPEED = "speed",
  DOUBLE_CHANCE = "double chance",
  PRODUCTION_MULTIPLIER = "production multiplier",
  EXPERIENCE = "experience",
}

export type Upgrade = {
  next: string | null;
  modifier: SkillModifies;
  requires: {
    [itemId: string]: number;
  };
  homeRoom: HomeRooms;
} & GameObject;

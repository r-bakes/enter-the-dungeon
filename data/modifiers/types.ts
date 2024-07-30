import { LucideIcon } from "lucide-react";
import { HomeRooms } from "../menus/types";
import { GameObject, IconStyle } from "../gameObject";

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

export enum SkillModifierType {
  SPEED = "speed",
  DOUBLE_CHANCE = "double chance",
  PRODUCTION_MULTIPLIER = "production multiplier",
  EXPERIENCE = "experience",
}

export type Upgrade = {
  previous: string | null;
  next: string | null;
  modifier: Modifier;
  requiresItems: {
    [itemId: string]: number;
  };
  requiresMilestones: Set<string>;
  requiresUpgrades: Set<string>;
  homeRoom: HomeRooms;
} & GameObject;

import { Copy, Gauge, LucideIcon, Sparkle, SquareStack } from "lucide-react";
import { IconStyle } from "../gameObject";
import { TASK_AND_ITEM_ICON_STYLE } from "../configurations";

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
export type SkillModifierIcons = {
  [type in SkillModifierType]: { icon: LucideIcon; iconStyle: IconStyle };
};

export enum SkillModifierType {
  SPEED = "speed",
  DOUBLE_CHANCE = "double chance",
  PRODUCTION_MULTIPLIER = "production multiplier",
  EXPERIENCE = "experience",
}

export const SkillModifierIcons: SkillModifierIcons = {
  [SkillModifierType.SPEED]: {
    icon: Gauge,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
  [SkillModifierType.DOUBLE_CHANCE]: {
    icon: Copy,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
  [SkillModifierType.PRODUCTION_MULTIPLIER]: {
    icon: SquareStack,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
  [SkillModifierType.EXPERIENCE]: {
    icon: Sparkle,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
};

export const applySpeedModifier = (
  duration: number,
  modifier: number | undefined,
): number => {
  if (!modifier) {
    return duration;
  }

  return roundModifiedValue(duration * (1 - modifier / 100));
};

export const applyExperienceModifier = (
  amount: number,
  modifier: number | undefined,
): number => {
  if (!modifier) {
    return amount;
  }

  return roundModifiedValue(amount + (amount * modifier) / 100);
};

export const getModifiers = (
  modifierTable: SkillModifierTable,
  skillId: string,
  taskId: string,
): SkillModifier => {
  return modifierTable[skillId][taskId];
};

const roundModifiedValue = (value: number): number => {
  return Math.round(value * 100) / 100;
};

import { Copy, Gauge, Sparkle, SquareStack } from "lucide-react";
import { SkillModifierType } from "./enums";
import {
  SkillModifier,
  SkillModifierIconsType,
  SkillModifierTable,
} from "@/types/modifiers";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Loot } from "@/types/loot";

export const SkillModifierIcons: SkillModifierIconsType = {
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

export const applyProductionModifier = (
  loot: Loot,
  modifier: number | undefined,
): Loot => {
  if (!modifier) {
    return loot;
  }
  Object.entries(loot).forEach(
    ([itemId, amount]) => (loot[itemId] = amount * modifier),
  );
  return loot;
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

export const formatModifiers = (
  value: number,
  modifierType: string,
): string => {
  if (modifierType === SkillModifierType.PRODUCTION_MULTIPLIER) {
    return "+" + value;
  }
  return "+" + value + "%";
};

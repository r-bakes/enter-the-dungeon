import { ItemId } from "@/data/items/enums";
import { ModifierType } from "@/data/modifiers/enums";
import { Loot } from "@/types/loot";

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
    ([itemId, amount]) => (loot[itemId as ItemId] = amount * modifier),
  );
  return loot;
};

const roundModifiedValue = (value: number): number => {
  return Math.round(value * 100) / 100;
};

export const formatModifiers = (
  value: number,
  modifierType: string,
): string => {
  if (modifierType === ModifierType.PRODUCTION_MULTIPLIER) {
    return "+" + value;
  }
  return "+" + value + "%";
};

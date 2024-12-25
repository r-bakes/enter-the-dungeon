import { ModifierType } from "@/data/modifiers/enums";

export const formatModifiers = (
  value: number,
  modifierType: string,
): string => {
  if (modifierType === ModifierType.PRODUCTION_MULTIPLIER) {
    return "+" + value;
  }
  return "+" + value + "%";
};

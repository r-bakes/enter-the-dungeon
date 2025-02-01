import { ModifierType } from "@/data/modifiers/enums";

export const formatModifier = (value: number, modifierType: string): string => {
  if (modifierType === ModifierType.PRODUCTION_MULTIPLIER) {
    return "x" + value;
  } else if (modifierType === ModifierType.STEALTH) {
    return "+" + value;
  } else {
    return "+" + value + "%";
  }
};

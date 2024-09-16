import { Copy, Gauge, Sparkle, SquareStack } from "lucide-react";
import { SkillModifierType } from "./enums";
import { SkillModifierIconsType } from "@/types/modifiers";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";

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

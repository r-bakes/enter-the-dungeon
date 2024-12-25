import { Copy, Eye, Gauge, Sparkle, SquareStack } from "lucide-react";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ModifierType } from "./enums";
import { ModifierIconsType } from "@/types/modifiers";

export const ModifierIcons: ModifierIconsType = {
  [ModifierType.SPEED]: {
    icon: Gauge,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
  [ModifierType.DOUBLE_CHANCE]: {
    icon: Copy,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
  [ModifierType.PRODUCTION_MULTIPLIER]: {
    icon: SquareStack,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
  [ModifierType.EXPERIENCE]: {
    icon: Sparkle,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
  [ModifierType.DETECTION]: {
    icon: Eye,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
  },
};

import { LucideIcon } from "lucide-react";
import { ModifierType } from "@/data/modifiers/enums";
import { IconStyle } from "@/types/gameObjects";
import { TaskId } from "@/data/tasks/enum";

export type Modifiers = {
  [id in TaskId]: Modifier;
};

export type Modifier = {
  [type in ModifierType]?: number;
};

export type ModifierIconsType = {
  [type in ModifierType]: { icon: LucideIcon; iconStyle: IconStyle };
};

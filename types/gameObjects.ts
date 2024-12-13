import { LucideIcon } from "lucide-react";
import { ItemId } from "./items";
import { CombatCardId } from "@/data/combatCards/enums";
import { SkillId } from "@/data/skills/enums";
import { TaskId } from "./tasks";

export type GameObject = {
  id: GameObjectId;
  name: string;
  description: string;
  icon: LucideIcon;
  iconStyle: IconStyle;
};

export type IconStyle = {
  fill?: string;
  fillOpacity?: number;
  strokeWidth?: number;
  strokeOpacity?: number;
  color?: string;
};

export type IconStylePrimitive = {
  fillOpacity: number;
  strokeWidth: number;
  strokeOpacity: number;
};

export type GameObjectId = ItemId | CombatCardId | TaskId | SkillId;

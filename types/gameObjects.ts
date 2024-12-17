import { LucideIcon } from "lucide-react";
import { CombatCardId } from "@/data/combatCards/enums";
import { SkillId } from "@/data/skills/enums";
import { UpgradeId } from "@/data/upgrades/enums";
import { ItemId } from "@/data/items/enums";
import { TaskId } from "@/data/tasks/enum";

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

export type GameObjectId = ItemId | CombatCardId | TaskId | SkillId | UpgradeId;

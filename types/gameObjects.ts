import { LucideIcon } from "lucide-react";
import { CombatCardId } from "@/data/combatCards/enums";
import { SkillId } from "@/data/skills/enums";
import { UpgradeId } from "@/data/upgrades/enums";
import { ItemId } from "@/data/items/enums";
import { TaskId } from "@/data/tasks/enum";
import { MenuId } from "@/data/menus/enums";
import { CombatantId } from "@/data/combatants/enums";
import { EncounterId } from "@/data/encounters/enums";
import { ExpeditionId } from "./ExpeditionId";

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

export type GameObjectId =
  | ItemId
  | ExpeditionId
  | EncounterId
  | CombatantId
  | CombatCardId
  | TaskId
  | SkillId
  | UpgradeId
  | MenuId;

import { GameObject } from "@/types/gameObjects";
import { Modifier } from "@/types/modifiers";
import { HomeRooms } from "@/data/menus/enums";
import { UpgradeId } from "@/data/upgrades/enums";
import { ItemId } from "@/data/items/enums";
import { MilestoneId } from "@/data/milestones/enums";

export type Upgrade = {
  previous: UpgradeId | null;
  next: UpgradeId | null;
  modifier: Modifier;
  requiresItems: {
    [id in ItemId]?: number;
  };
  requiresMilestones: Set<MilestoneId>;
  requiresUpgrades: Set<UpgradeId>;
  homeRoom: HomeRooms;
} & GameObject;

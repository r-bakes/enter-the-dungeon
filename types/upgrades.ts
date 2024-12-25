import { GameObject } from "@/types/gameObjects";
import { Modifier } from "@/types/modifiers";
import { HomeRooms } from "@/data/menus/enums";
import { UpgradeId } from "@/data/upgrades/enums";
import { ItemId } from "@/data/items/enums";
import { MilestoneId } from "@/data/milestones/enums";
import { TaskId } from "@/data/tasks/enum";

export type Upgrade = {
  id: UpgradeId;
  previous: UpgradeId | null;
  next: UpgradeId | null;
  modifier: UpgradeModifies;
  requiresItems: {
    [id in ItemId]?: number;
  };
  requiresMilestones: Set<MilestoneId>;
  requiresUpgrades: Set<UpgradeId>;
  homeRoom: HomeRooms;
} & GameObject;

export type UpgradeModifies = {
  targets: TaskId[];
  values: Modifier;
};

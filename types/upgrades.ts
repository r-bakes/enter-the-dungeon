import { GameObject } from "@/types/gameObjects";
import { Modifier } from "@/types/modifiers";
import { HomeRooms } from "@/data/menus/enums";
import {
  BedUpgradeId,
  HammerUpgradeId,
  MiscUpgradeId,
  PickaxeUpgradeId,
} from "@/data/upgrades/enums";

export type Upgrade = {
  previous: string | null;
  next: string | null;
  modifier: Modifier;
  requiresItems: {
    [itemId: string]: number;
  };
  requiresMilestones: Set<string>;
  requiresUpgrades: Set<string>;
  homeRoom: HomeRooms;
} & GameObject;

export type UpgradeId =
  | BedUpgradeId
  | HammerUpgradeId
  | PickaxeUpgradeId
  | MiscUpgradeId;

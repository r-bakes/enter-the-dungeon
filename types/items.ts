import { Slot } from "@/data/character/character";
import {
  ArmorId,
  BarId,
  ItemType,
  MineralId,
  MiscId,
  PlantId,
  SeedId,
  WeaponId,
} from "@/data/items/enums";
import { CombatCardTemplate } from "@/types/combatCards";
import { GameObject } from "@/types/gameObjects";

export type Equipment = {
  type: ItemType.EQUIPMENT;
  attackBonus: number;
  defenseBonus: number;
  healthBonus: number;
  isTwoHanded?: boolean;
  cards: CombatCardTemplate[];
  slots: Slot[];
} & Item;

export type ItemId =
  | MineralId
  | ArmorId
  | WeaponId
  | BarId
  | MiscId
  | PlantId
  | SeedId;

export type Item = {
  type: ItemType;
  value: number;
} & GameObject;

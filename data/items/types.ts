import { Slot } from "../character/character";
import { CombatCardTemplate } from "../combatCards/types";
import { GameObject } from "../gameObject";

export type Equipment = {
  type: ItemType.EQUIPEMENT;
  attackBonus: number;
  defenseBonus: number;
  healthBonus: number;
  isTwoHanded?: boolean;
  cards: CombatCardTemplate[];
  slots: Slot[];
} & Item;
export enum ItemType {
  EQUIPEMENT = "EQUIPMENT",
  SUPPLIES = "SUPPLIES",
  TRADEGOODS = "TRADEGOODS",
  MATERIALS = "MATERIALS",
  HIDDEN = "HIDDEN",
}
export type Item = {
  type: ItemType;
  value: number;
} & GameObject;

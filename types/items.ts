import { Slot } from "@/data/character/character";
import { ItemType } from "@/data/items/enums";
import { CombatCardTemplate } from "@/types/combatCards";
import { GameObject } from "@/types/gameObjects";

export type Equipment = {
  type: ItemType.EQUIPEMENT;
  attackBonus: number;
  defenseBonus: number;
  healthBonus: number;
  isTwoHanded?: boolean;
  cards: CombatCardTemplate[];
  slots: Slot[];
} & Item;

export type Item = {
  type: ItemType;
  value: number;
} & GameObject;

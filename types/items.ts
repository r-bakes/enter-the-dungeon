import { Slot } from "@/data/character/enums";
import { ItemId, ItemType } from "@/data/items/enums";
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

export type Item = {
  id: ItemId;
  type: ItemType;
  value: number;
} & GameObject;

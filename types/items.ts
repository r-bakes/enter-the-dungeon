import { Slot } from "@/data/character/enums";
import { CombatCardId } from "@/data/combatCards/enums";
import { ItemId, ItemType } from "@/data/items/enums";
import { GameObject } from "@/types/gameObjects";

export type Equipment = {
  type: ItemType.EQUIPMENT;
  attackBonus: number;
  defenseBonus: number;
  healthBonus: number;
  isTwoHanded?: boolean;
  cards: CombatCardId[];
  slots: Slot[];
} & Item;

export type Item = {
  id: ItemId;
  type: ItemType;
  value: number;
} & GameObject;

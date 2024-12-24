import { CombatCardTarget, CombatCardType } from "@/data/combatCards/enums";
import { GameObject } from "@/types/gameObjects";

export type CombatCard = {
  deckId: number;
} & CombatCardTemplate;

export type CombatCardTemplate = {
  modifier: number;
  strikes: number;
  targets: number;
  target: CombatCardTarget;
  cost: number;
  type: CombatCardType;
} & GameObject;

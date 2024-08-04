import { Target } from "@/data/combatCards/enums";
import { GameObject } from "@/types/gameObjects";

export type CombatCard = {
  deckId: number;
} & CombatCardTemplate;

export type CombatCardTemplate = {
  modifier: number;
  strikes: number;
  targets: number;
  target: Target;
  cost: number;
} & GameObject;

import { GameObject } from "../gameObject";

export enum Target {
  ENEMIES = 0,
  ALLIES,
}
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

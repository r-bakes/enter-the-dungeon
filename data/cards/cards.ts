import { Shield, Sword, Swords } from "lucide-react";
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

let createOffensiveCombatCardDescription = (
  strikes: number,
  targets: number,
  modifier: number
) => {
  let formattedModifier = modifier.toString();
  if (modifier === 0.5) {
    formattedModifier = "1/2";
  }

  return `Deals ${formattedModifier}xATK ${strikes} time(s) to `.concat(
    targets != -1 ? `${targets} target(s)` : `all enemies`
  );
};

let createDefensiveCombatCardDescription = (
  targets: number,
  modifier: number
) => {
  let formattedModifier = modifier.toString();
  if (modifier === 0.5) {
    formattedModifier = "1/2";
  }
  return `Adds ${formattedModifier}xDEF to `.concat(
    targets != -1 ? `${targets} allies(s)` : `all allies`
  );
};

export const cardTable: { [cardId: string]: CombatCardTemplate } = {
  slice: {
    id: "slice",
    name: "Slice",
    target: Target.ENEMIES,
    icon: Sword,
    description: createOffensiveCombatCardDescription(1, 1, 1),
    strikes: 1,
    targets: 1,
    modifier: 1,
    cost: 1,
  },
  stab: {
    id: "stab",
    name: "Stab",
    target: Target.ENEMIES,
    icon: Swords,
    description: createOffensiveCombatCardDescription(2, 1, 0.5),
    strikes: 2,
    targets: 1,
    modifier: 0.5,
    cost: 1,
  },
  defend: {
    id: "defend",
    name: "Defend",
    target: Target.ALLIES,
    icon: Shield,
    description: createDefensiveCombatCardDescription(1, 1),
    strikes: 0,
    targets: 1,
    modifier: 1,
    cost: 1,
  },
};

export const createCombatCard = (
  cardId: string,
  deckId: number
): CombatCard => {
  return {
    deckId: deckId,
    ...cardTable[cardId],
  };
};

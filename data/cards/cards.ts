import { Shield, Sword, Swords } from "lucide-react";
import { GameObject } from "../gameObject";

let createOffensiveCombatCardDescription = (
  strikes: number,
  targets: number,
  modifier: number
) => {
  let formattedModifier = modifier.toString();
  if (modifier === 0.5) {
    formattedModifier = "1/2";
  }
  
  return `Deals ${formattedModifier}xATK ${strikes} time(s) to `.concat(targets != -1 ? `${targets} target(s)` : `all enemies`);
};

let createDefensiveCombatCardDescription = (
  targets: number,
  modifier: number
) => {
  let formattedModifier = modifier.toString();
  if (modifier === 0.5) {
    formattedModifier = "1/2";
  }
  return `Protects ${formattedModifier}xDEF to `.concat(targets != -1 ? `${targets} allies(s)` : `all allies`);
};

export const slice: CombatCardTemplate = {
  id: "slice",
  name: "Slice",
  target: "enemy",
  icon: Sword,
  description: createOffensiveCombatCardDescription(1, 1, 1),
  strikes: 1,
  targets: 1,
  modifier: 1,
  cost: 1,
};
export const stab: CombatCardTemplate = {
  id: "stab",
  name: "Stab",
  target: "enemy",
  icon: Swords,
  description: createOffensiveCombatCardDescription(2, 1, 0.5),
  strikes: 2,
  targets: 1,
  modifier: 0.5,
  cost: 1,
};
export const defend: CombatCardTemplate = {
  id: "defend",
  name: "Defend",
  target: "ally",
  icon: Shield,
  description: createDefensiveCombatCardDescription(1, 1),
  strikes: 0,
  targets: 1,
  modifier: 1,
  cost: 1,
};

export const ALL_CARD_TEMPLATES: CombatCardTemplate[] = [slice, stab, defend];
export const CARD_TEMPLATE_BY_ID: { [cardId: string]: CombatCardTemplate } =
  Object.fromEntries(ALL_CARD_TEMPLATES.map((cardId) => [cardId.id, cardId]));

export const createCombatCard = (
  cardId: string,
  deckId: number
): CombatCard => {
  return {
    deckId: deckId,
    ...CARD_TEMPLATE_BY_ID[cardId],
  };
};

export type CombatCard = {
  deckId: number;
} & CombatCardTemplate;

export type CombatCardTemplate = {
  modifier: number;
  strikes: number;
  targets: number;
  target: "ally" | "enemy";
  cost: number;
} & GameObject;

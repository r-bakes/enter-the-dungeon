import {
  CombatCardId,
  CombatCardTarget,
  CombatCardType,
} from "@/data/combatCards/enums";
import { GameObject } from "@/types/gameObjects";

export type CombatCard = {
  cardInstanceId: number;
} & CombatCardTemplate;

export type CombatCardTemplate = {
  id: CombatCardId;
  modifier: number;
  strikes: number;
  targets: number;
  target: CombatCardTarget;
  cost: number;
  type: CombatCardType;
} & GameObject;

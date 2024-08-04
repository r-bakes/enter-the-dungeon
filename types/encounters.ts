import { Combatant } from "@/types/combatants";

export type Encounter = {
  id: string;
  difficulty: number;
  combatants: Combatant[];
  modifiers: Modifier[];
};
type Modifier = {};

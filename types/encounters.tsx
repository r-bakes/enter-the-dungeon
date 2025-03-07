import { EncounterId } from "@/data/encounters/enums";
import { Combatant, CombatantTemplate } from "./combatants";

export type EncounterCombatants = {
  [combatantInstanceId: string]: Combatant;
};
export type EncounterTemplate = {
  id: EncounterId;
  combatants: CombatantTemplate[];
  modifiers: Modifier[];
};
type Modifier = {};

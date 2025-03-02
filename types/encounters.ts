import { EncounterId } from "@/data/encounters/enums";
import { Combatant } from "@/types/combatants";

export type Encounter = {
  id: EncounterId;
  combatants: Combatant[];
  modifiers: Modifier[];
};
type Modifier = {};

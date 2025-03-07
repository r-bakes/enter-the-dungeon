import { goblinRunt } from "@/data/combatants/goblins";
import { EncounterTemplate } from "@/types/encounters";
import { EncounterId } from "./enums";

export const floor1a: EncounterTemplate = {
  id: EncounterId.A1,
  combatants: [goblinRunt, goblinRunt, goblinRunt],
  modifiers: [],
};

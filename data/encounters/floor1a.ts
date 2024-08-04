import { goblinRunt } from "@/data/combatants/goblins";
import { Encounter } from "@/types/encounters";
import { createCombatant } from "@/utils/encounterUtilities";

export const floor1a: Encounter = {
  id: "floor1a",
  difficulty: 1,
  combatants: [
    createCombatant(goblinRunt, 0),
    createCombatant(goblinRunt, 1),
    createCombatant(goblinRunt, 2),
  ],
  modifiers: [],
};

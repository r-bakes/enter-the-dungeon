import { createCombatant } from "../combatants/combatants";
import { goblinRunt } from "../combatants/goblins";
import { Encounter } from "./encounters";

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

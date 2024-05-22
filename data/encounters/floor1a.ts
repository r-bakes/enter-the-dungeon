import { goblinRunt } from "../combatants/goblins";
import { Encounter } from "./encounters";

export const floor1a: Encounter = {
    id: "floor1a",
    difficulty: 1,
    combatants: [goblinRunt, goblinRunt, goblinRunt],
    modifiers: []
}
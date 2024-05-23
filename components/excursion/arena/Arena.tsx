import { useEncounterContext } from "@/engine/encounterEngineContext";
import ArenaRow from "./arenaRow";
import DeckRow from "./deckRow";
import PlayerHudRow from "./playerHudRow";

export default function Arena({}) {
    const { encounter, alliedCombatants } = useEncounterContext();

    return (
        <div className="flex flex-col w-full h-full space-y-4">
            <ArenaRow combatants={encounter.combatants}></ArenaRow>
            <ArenaRow combatants={alliedCombatants} style="sm"></ArenaRow>
            <PlayerHudRow></PlayerHudRow>
            <DeckRow></DeckRow>
        </div>
    )

}
import { useEncounterContext } from "@/engine/encounterEngineContext";
import ArenaRow from "./arenaRow";
import DeckRow from "./deckRow";
import PlayerHudRow from "./playerHudRow";
import { useExcursionContext } from "@/engine/excursionEngineContext";

export default function Arena({}) {
  const { alliedCombatants, enemyCombatants } = useEncounterContext();
  const { characterCombatant } = useExcursionContext();

  return (
    <div className="flex flex-col w-full h-full space-y-4">
      <ArenaRow combatants={enemyCombatants}></ArenaRow>
      <ArenaRow
        combatants={alliedCombatants.concat(characterCombatant)}
        style="sm"
      ></ArenaRow>
      <PlayerHudRow></PlayerHudRow>
      <DeckRow></DeckRow>
    </div>
  );
}

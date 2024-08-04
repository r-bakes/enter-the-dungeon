import { useEncounterContext } from "engines/encounterEngineContext";
import ArenaRow from "./arenaRow";
import DeckRow from "./deckRow";
import PlayerHudRow from "./playerHudRow";
import { useExpeditionContext } from "engines/expeditionEngineContext";

export default function Arena({}) {
  const { alliedCombatants, enemyCombatants } = useEncounterContext();
  const { characterCombatant } = useExpeditionContext();

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

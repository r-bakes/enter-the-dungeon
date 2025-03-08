import { useEncounterContext } from "@/engines/encounterEngineContext";
import ArenaRow from "./arenaRow";
import DeckRow from "./deckRow";
import PlayerHudRow from "./playerHudRow";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";

export default function Arena() {
  const { alliedCombatants, enemyCombatants } = useEncounterContext();
  const { characterCombatant } = useExpeditionContext();

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <ArenaRow combatants={enemyCombatants}></ArenaRow>
      <ArenaRow
        combatants={{ ...alliedCombatants, ...{ "0": characterCombatant } }}
      ></ArenaRow>
      <PlayerHudRow></PlayerHudRow>
      <DeckRow></DeckRow>
    </div>
  );
}

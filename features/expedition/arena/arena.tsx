import { useEncounterContext } from "@/engines/encounterEngineContext";
import ArenaRow from "./arenaRow";
import DeckRow from "./deckRow";
import PlayerHudRow from "./playerHudRow";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import ArenaHeader from "./arenaHeader";

export default function Arena() {
  const { alliedCombatants, enemyCombatants } = useEncounterContext();
  const { characterCombatant } = useExpeditionContext();

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <ArenaHeader></ArenaHeader>
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

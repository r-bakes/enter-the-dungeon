import CharacterCombatantCard from "@/features/common/cards/characterCombatantCard";
import { Card, CardContent } from "@/components/ui/card";
import { useCombatCardEngineContext } from "@/engines/combatCardEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import { CharacterCombatant, Combatant } from "@/types/combatants";
import CombatantCard from "../combatantCards/components/combatantCard";
import { EncounterCombatants } from "@/types/encounters";
import { AnimatePresence } from "framer-motion";

export default function ArenaRow({
  combatants,
}: {
  combatants: EncounterCombatants;
}) {
  const { characterCombatant } = useExpeditionContext();
  const {
    selectedEnemyCombatants,
    selectedAlliedCombatants,
    addTarget,
    removeTarget,
  } = useCombatCardEngineContext();

  const isSelected = (combatant: Combatant) => {
    return selectedEnemyCombatants.includes(combatant) ||
      selectedAlliedCombatants.includes(combatant)
      ? true
      : false;
  };

  const onClick = (combatant: Combatant) => {
    selectedEnemyCombatants.includes(combatant) ||
    selectedAlliedCombatants.includes(combatant)
      ? removeTarget(combatant)
      : addTarget(combatant);
  };

  return (
    <Card className={"flex h-74 w-full min-w-full"}>
      <CardContent className="flex h-full w-full items-center justify-center space-x-6 p-3">
        <AnimatePresence>
          {Object.values(combatants).map((combatant) =>
            combatant === characterCombatant ? (
              <CharacterCombatantCard
                key={characterCombatant.id}
                combatant={combatant as CharacterCombatant}
                isSelected={isSelected(combatant)}
                onClick={() => onClick(combatant)}
              ></CharacterCombatantCard>
            ) : (
              <CombatantCard
                key={combatant.combatantInstanceId}
                combatant={combatant}
                onClick={() => onClick(combatant)}
                isSelected={isSelected(combatant)}
              ></CombatantCard>
            ),
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

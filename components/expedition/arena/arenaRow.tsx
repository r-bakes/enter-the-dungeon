import { Card, CardContent } from "@/components/ui/card";
import { CharacterCombatant, Combatant } from "@/data/combatants/combatants";
import CombatantCard from "../../cards/combatantCard/combatantCard";
import { useCombatCardEngineContext } from "@/engine/combatCardEngineContext";
import { useExpeditionContext } from "@/engine/expeditionEngineContext";
import CharacterCombatantCard from "@/components/cards/characterCombatantCard";
import { AnimatePresence } from "framer-motion";

export default function ArenaRow({
  combatants,
  style,
}: {
  combatants: Combatant[];
  style?: "sm" | "lg";
}) {
  let height = "h-80";
  if (style === "sm") {
    height = "h-64";
  }
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
    <Card className={"flex w-full min-w-full " + height}>
      <CardContent className="flex items-center p-3 space-x-6 justify-center w-full h-full">
          {combatants.map((combatant) =>
            combatant === characterCombatant ? (
              <CharacterCombatantCard
                key={combatant.combatantId}
                combatant={combatant as CharacterCombatant}
                isSelected={isSelected(combatant)}
                onClick={() => onClick(combatant)}
              ></CharacterCombatantCard>
            ) : (
              <CombatantCard
                key={combatant.combatantId}
                combatant={combatant}
                onClick={() => onClick(combatant)}
                isSelected={isSelected(combatant)}
              ></CombatantCard>
            )
          )}
      </CardContent>
    </Card>
  );
}

import CharacterCombatantCard from "@/features/common/cards/characterCombatantCard";
import { Card, CardContent } from "@/components/ui/card";
import { useCombatCardEngineContext } from "@/engines/combatCardEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import { CharacterCombatant, Combatant } from "@/types/combatants";
import CombatantCard from "../combatantCard/components/combatantCard";

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
      <CardContent className="flex h-full w-full items-center justify-center space-x-6 p-3">
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
          ),
        )}
      </CardContent>
    </Card>
  );
}

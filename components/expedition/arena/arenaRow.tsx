import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Combatant, CombatantTemplate } from "@/data/combatants/combatants";
import CombatantCard from "../../cards/combatantCard";
import { useCombatCardEngineContext } from "@/engine/combatCardEngineContext";

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
  const { selectedEnemyCombatants, selectedAlliedCombatants, addTarget, removeTarget } =
    useCombatCardEngineContext();

  return (
    <Card className={"flex w-full " + height}>
      <CardContent className="flex items-center p-0 space-x-6 justify-center w-full h-full">
        {combatants.map((combatant) => (
          <CombatantCard
            key={combatant.combatantId}
            combatant={combatant}
            onClick={() => {
              selectedEnemyCombatants.includes(combatant) || selectedAlliedCombatants.includes(combatant)
                ? removeTarget(combatant)
                : addTarget(combatant);
            }}
            isSelected={selectedEnemyCombatants.includes(combatant) ? true : false}
          ></CombatantCard>
        ))}
      </CardContent>
    </Card>
  );
}

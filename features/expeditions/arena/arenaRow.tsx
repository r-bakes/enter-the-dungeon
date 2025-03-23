import CharacterCombatantCard from "@/features/common/cards/characterCombatantCard";
import { Card, CardContent } from "@/components/ui/card";
import { useCombatCardEngineContext } from "@/engines/combatCardEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import { CharacterCombatant, Combatant } from "@/types/combatants";
import CombatantCard from "../combatantCards/components/combatantCard";
import { EncounterCombatants } from "@/types/encounters";
import { AnimatePresence, motion } from "framer-motion";

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
      <CardContent className="flex h-full w-full">
        <ul className="flex h-full w-full items-center justify-center gap-6">
          <AnimatePresence>
            {Object.values(combatants).map((combatant, combatantIndex) => {
              const isCharacter = combatant === characterCombatant;
              const key = isCharacter
                ? characterCombatant.id
                : combatant.combatantInstanceId;

              return (
                <motion.li
                  layout
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: isCharacter ? 0 : 3 },
                  }}
                  exit={{
                    opacity: 0,
                    y: -40,
                    transition: {
                      duration: 1.5,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {isCharacter ? (
                    <CharacterCombatantCard
                      combatant={combatant as CharacterCombatant}
                      isSelected={isSelected(combatant)}
                      onClick={() => onClick(combatant)}
                    />
                  ) : (
                    <CombatantCard
                      combatant={combatant}
                      isSelected={isSelected(combatant)}
                      onClick={() => onClick(combatant)}
                    />
                  )}
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </CardContent>
    </Card>
  );
}

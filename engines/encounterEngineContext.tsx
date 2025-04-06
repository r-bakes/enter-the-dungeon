import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EncounterPhase } from "@/data/encounters/enums";
import { floor1a } from "@/data/encounters/floor1a";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import { createCombatant } from "@/features/common/utils/encounterUtilities";
import { CombatCard } from "@/types/combatCards";
import { EncounterCombatants, EncounterTemplate } from "@/types/encounters";
import React from "react";

type EncounterContextContents = {
  encounter: EncounterTemplate;
  enemyCombatants: EncounterCombatants;
  setEnemyCombatants: React.Dispatch<React.SetStateAction<EncounterCombatants>>;
  alliedCombatants: EncounterCombatants;
  setAlliedCombatants: React.Dispatch<
    React.SetStateAction<EncounterCombatants>
  >;
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  stamina: number;
  drawPile: CombatCard[];
  setDrawPile: React.Dispatch<React.SetStateAction<CombatCard[]>>;
  hand: CombatCard[];
  setHand: React.Dispatch<React.SetStateAction<CombatCard[]>>;
  discardPile: CombatCard[];
  setDiscardPile: React.Dispatch<React.SetStateAction<CombatCard[]>>;
  setStamina: React.Dispatch<React.SetStateAction<number>>;
  setIsRoundDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  phase: EncounterPhase;
  setPhase: React.Dispatch<React.SetStateAction<EncounterPhase>>;
};

const EncounterEngineContext = React.createContext(
  {} as EncounterContextContents,
);

export const useEncounterContext = () =>
  React.useContext(EncounterEngineContext);

export default function EncounterEngineProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { characterCombatant, deck } = useExpeditionContext();

  const [round, setRound] = React.useState(0);
  const [stamina, setStamina] = React.useState(characterCombatant.stamina);
  const [encounter, setEncounter] = React.useState(floor1a);
  const [enemyCombatants, setEnemyCombatants] =
    React.useState<EncounterCombatants>(
      Object.fromEntries(
        encounter.combatants.map((combatantTemplate, id) => [
          id,
          createCombatant(id, combatantTemplate),
        ]),
      ),
    );
  const [alliedCombatants, setAlliedCombatants] = React.useState(
    {} as EncounterCombatants,
  );
  let encounterDeck = deck.map((x) => Object.assign({}, x));
  const [drawPile, setDrawPile] = React.useState<CombatCard[]>(encounterDeck);
  const [hand, setHand] = React.useState<CombatCard[]>([]);
  const [discardPile, setDiscardPile] = React.useState<CombatCard[]>([]);
  const [phase, setPhase] = React.useState(EncounterPhase.ENCOUNTER_START);
  const [isRoundDialogOpen, setIsRoundDialogOpen] = React.useState(false);

  // Remove dead enemies
  React.useEffect(() => {
    let initialLength = Object.keys(enemyCombatants).length;
    let filteredEnemyCombatants = Object.fromEntries(
      Object.entries(enemyCombatants).filter(
        ([_, combatant]) => combatant.hp > 0,
      ),
    );
    let newLength = Object.keys(filteredEnemyCombatants).length;

    if (newLength < initialLength) {
      setEnemyCombatants({ ...filteredEnemyCombatants });
    }
  }, [enemyCombatants]);

  // Remove dead allies
  React.useEffect(() => {
    let initialLength = Object.keys(alliedCombatants).length;
    let filteredAlliedCombatants = Object.fromEntries(
      Object.entries(alliedCombatants).filter(
        ([_, combatant]) => combatant.hp > 0,
      ),
    );
    let newLength = Object.keys(alliedCombatants).length;

    if (newLength < initialLength) {
      setAlliedCombatants({ ...alliedCombatants });
    }
  }, [alliedCombatants]);

  return (
    <EncounterEngineContext.Provider
      value={{
        encounter,
        enemyCombatants,
        setEnemyCombatants,
        alliedCombatants,
        setAlliedCombatants,
        round,
        setRound,
        stamina,
        setStamina,
        drawPile,
        setDrawPile,
        hand,
        setHand,
        discardPile,
        setDiscardPile,
        setIsRoundDialogOpen,
        phase,
        setPhase,
      }}
    >
      <div
        className={
          phase !== EncounterPhase.PLAYER_PHASE
            ? "pointer-events-none h-full w-full"
            : "h-full w-full"
        }
      >
        <Dialog open={isRoundDialogOpen} onOpenChange={() => {}}>
          <DialogContent className="min-h-16 min-w-full">
            <DialogHeader className="flex w-screen items-center justify-center">
              <DialogTitle className="text-2xl">Round {round}</DialogTitle>
              <DialogDescription className="text-lg">
                Player Phase
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {children}
      </div>
    </EncounterEngineContext.Provider>
  );
}

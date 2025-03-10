import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EncounterPhases } from "@/data/encounters/enums";
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
  phase: EncounterPhases;
  setPhase: React.Dispatch<React.SetStateAction<EncounterPhases>>;
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
  const { characterCombatant, setCharacterCombatant, deck } =
    useExpeditionContext();

  const [round, setRound] = React.useState(1);
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
  const [phase, setPhase] = React.useState(EncounterPhases.ENCOUNTER_START);
  const [isRoundDialogOpen, setIsRoundDialogOpen] = React.useState(false);

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
          phase !== EncounterPhases.PLAYER_PHASE
            ? "pointer-events-none h-full w-full"
            : "h-full w-full"
        }
      >
        <Dialog open={isRoundDialogOpen} onOpenChange={() => {}}>
          <DialogContent className="min-h-34 min-w-full">
            <DialogHeader className="flex w-screen items-center justify-center">
              <DialogTitle className="text-3xl">Round {round}</DialogTitle>
              <DialogDescription className="text-lg">
                Begin Player Phase
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {children}
      </div>
    </EncounterEngineContext.Provider>
  );
}

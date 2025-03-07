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
      }}
    >
      {children}
    </EncounterEngineContext.Provider>
  );
}

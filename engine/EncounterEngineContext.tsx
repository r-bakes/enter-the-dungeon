import React from "react";
import { Encounter } from "@/data/encounters/encounters";
import { floor1a } from "@/data/encounters/floor1a";
import { CombatCard } from "@/data/cards/cards";
import { useExcursionContext } from "./excursionEngineContext";
import { Combatant } from "@/data/combatants/combatants";

type EncounterContextContents = {
  encounter: Encounter;
  alliedCombatants: Combatant[];
  round: number;
  drawPile: CombatCard[];
  hand: CombatCard[];
  discardPile: CombatCard[];
};

const EncounterEngineContext = React.createContext(
  {} as EncounterContextContents
);

export const useEncounterContext = () =>
  React.useContext(EncounterEngineContext);

export default function EncounterEngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { characterCombatant, deck } = useExcursionContext();

  const [round, setRound] = React.useState(1);
  const [encounter, setEncounter] = React.useState(floor1a);
  const [alliedCombatants, setAlliedCombatants] = React.useState([
    characterCombatant,
  ]);
  const [drawPile, setDrawPile] = React.useState(deck);
  const [hand, setHand] = React.useState([]);
  const [discardPile, setDiscardPile] = React.useState([]);

  return (
    <EncounterEngineContext.Provider
      value={{
        encounter,
        alliedCombatants,
        round,
        drawPile,
        hand,
        discardPile,
      }}
    >
      {children}
    </EncounterEngineContext.Provider>
  );
}

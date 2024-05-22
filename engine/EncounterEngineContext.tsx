import React from "react";
import { useCharacterEngineContext } from "./CharacterEngineContext";

type EncounterContextContents = {};

const EncounterEngineContext = React.createContext(
  {} as EncounterContextContents
);

export const useExcursionContext = () =>
  React.useContext(EncounterEngineContext);

export default function EncounterEngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { character, getModifiers } = useCharacterEngineContext();
  const [round, setRound] = React.useState(1);
  const [drawPile, setDrawPile] = React.useState([]);
  const [discardPile, setDiscardPile] = React.useState([]);
  const [hand, setHand] = React.useState([]);

  return (
    <EncounterEngineContext.Provider value={{}}>
      {children}
    </EncounterEngineContext.Provider>
  );
}

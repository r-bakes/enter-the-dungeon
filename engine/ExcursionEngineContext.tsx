import React from "react";
import { useCharacterEngineContext } from "./CharacterEngineContext";

type ExcursionEngineContextContents = {};

const ExcursionEngineContext = React.createContext(
  {} as ExcursionEngineContextContents
);

export const useExcursionContext = () =>
  React.useContext(ExcursionEngineContext);

export default function ExcursionEngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { character, getModifiers } = useCharacterEngineContext();

  return (
    <ExcursionEngineContext.Provider value={{}}>
      {children}
    </ExcursionEngineContext.Provider>
  );
}

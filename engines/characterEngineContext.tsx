import { toast } from "sonner";

import React from "react";
import {
  getAgilityModifiers,
  getCombatModifiers,
} from "@/features/common/utils/characterStateUtilities";
import { Character } from "@/types/character";
import { testCharacter } from "@/data/character/character";

type CharacterEngineContextContents = {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  getModifiers: () => { hp: number; atk: number; def: number; stamina: number };
  save: () => void;
};

const CharacterEngineContext = React.createContext(
  {} as CharacterEngineContextContents,
);
export const useCharacterEngineContext = () =>
  React.useContext(CharacterEngineContext);

export default function CharacterEngineProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [character, setCharacter] = React.useState<Character>(testCharacter);

  const getModifiers = () => {
    return {
      ...getCombatModifiers(character),
      ...getAgilityModifiers(character.skills.ATHLETICS.level),
    };
  };

  const save = () => {};

  return (
    <CharacterEngineContext.Provider
      value={{
        character,
        setCharacter,
        getModifiers,
        save,
      }}
    >
      {children}
    </CharacterEngineContext.Provider>
  );
}

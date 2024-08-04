import React from "react";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { User } from "lucide-react";
import { createCombatCard } from "@/data/combatCards/combatCards";
import { CharacterCombatant } from "@/types/combatants";
import { CombatCard } from "@/types/combatCards";
import { Loot } from "@/types/loot";

type ExpeditionEngineContextContents = {
  characterCombatant: CharacterCombatant;
  deck: CombatCard[];
  loot: Loot;
  artifacts: string[];
  setCharacterCombatant: React.Dispatch<
    React.SetStateAction<CharacterCombatant>
  >;
};

const ExpeditionEngineContext = React.createContext(
  {} as ExpeditionEngineContextContents,
);

export const useExpeditionContext = () =>
  React.useContext(ExpeditionEngineContext);

export default function ExpeditionEngineProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { character, getModifiers } = useCharacterEngineContext();
  let initializeCharacterExcursionState = (): CharacterCombatant => {
    let characterModifiers = getModifiers();
    return {
      combatantId: 0,
      id: "spellSword",
      name: "The Spellsword",
      description: "A fearsome foe.",
      icon: User,
      baseHp: characterModifiers.hp,
      baseAtk: characterModifiers.atk,
      baseDef: characterModifiers.def,
      baseStamina: characterModifiers.stamina,
      ...characterModifiers,
      lootTable: {},
      loadout: character.loadout,
      modifiers: [],
    };
  };
  const [characterCombatant, setCharacterCombatant] = React.useState(
    initializeCharacterExcursionState(),
  );
  let initializedDeck: CombatCard[] = [
    ...character.deck.equippedMagic,
    ...character.deck.equppedMartial,
  ].map((cardId, deckId) => createCombatCard(cardId, deckId));
  const [deck, setDeck] = React.useState(initializedDeck);
  const [loot, setLoot] = React.useState<Loot>({});
  const [artifacts, setArtifacts] = React.useState([]);

  return (
    <ExpeditionEngineContext.Provider
      value={{
        characterCombatant,
        deck,
        loot,
        artifacts,
        setCharacterCombatant,
      }}
    >
      {children}
    </ExpeditionEngineContext.Provider>
  );
}

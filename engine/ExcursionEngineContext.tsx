import React from "react";
import { useCharacterEngineContext } from "./characterEngineContext";
import { Loot } from "./utils/lootUtilities";
import { Combatant, CombatantTemplate } from "@/data/combatants/combatants";
import { User } from "lucide-react";
import { Character } from "@/data/character/character";
import { CombatCard, createCombatCard } from "@/data/cards/cards";

type ExcursionEngineContextContents = {
  characterCombatant: Combatant;
  deck: CombatCard[];
  loot: Loot;
  artifacts: String[];
  setCharacterCombatant: React.Dispatch<React.SetStateAction<Combatant>>;
};

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
  let initializeCharacterExcursionState = (): Combatant => {
    let characterStats = getModifiers();
    return {
      combatantId: 0,
      id: "spellSword",
      name: "The Spellsword",
      description: "A fearsome foe.",
      icon: User,
      maxHp: characterStats.hp,
      ...characterStats,
      lootTable: {},
      modifiers: [],
    };
  };
  const [characterCombatant, setCharacterCombatant] = React.useState(
    initializeCharacterExcursionState()
  );
  let initializedDeck: CombatCard[] = [
    ...character.deck.equippedMagic,
    ...character.deck.equppedMartial,
  ].map((cardId, deckId) => createCombatCard(cardId, deckId));
  const [deck, setDeck] = React.useState(initializedDeck);
  const [loot, setLoot] = React.useState<Loot>({});
  const [artifacts, setArtifacts] = React.useState([]);

  return (
    <ExcursionEngineContext.Provider
      value={{
        characterCombatant,
        deck,
        loot,
        artifacts,
        setCharacterCombatant,
      }}
    >
      {children}
    </ExcursionEngineContext.Provider>
  );
}

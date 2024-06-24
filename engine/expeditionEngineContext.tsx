import React from "react";
import { useCharacterEngineContext } from "./characterEngineContext";
import { Loot } from "./utils/lootUtilities";
import { Combatant } from "@/data/combatants/combatants";
import { User } from "lucide-react";
import { CombatCard, createCombatCard } from "@/data/cards/cards";

type ExpeditionEngineContextContents = {
  characterCombatant: Combatant;
  deck: CombatCard[];
  loot: Loot;
  artifacts: String[];
  setCharacterCombatant: React.Dispatch<React.SetStateAction<Combatant>>;
};

const ExpeditionEngineContext = React.createContext(
  {} as ExpeditionEngineContextContents
);

export const useExpeditionContext = () =>
  React.useContext(ExpeditionEngineContext);

export default function ExpeditionEngineProvider({
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
      baseHp: characterStats.hp,
      baseAtk: characterStats.atk,
      baseDef: characterStats.def,
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

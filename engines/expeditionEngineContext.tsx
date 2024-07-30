import React from "react";
import { useCharacterEngineContext } from "./characterEngineContext";
import { Loot } from "./utils/lootUtilities";
import { CharacterCombatant, Combatant } from "@/data/combatants/combatants";
import { User } from "lucide-react";
import { CombatCard } from "@/data/combatCards/types";
import { createCombatCard } from "@/data/combatCards/combatCards";

type ExpeditionEngineContextContents = {
  characterCombatant: CharacterCombatant;
  deck: CombatCard[];
  loot: Loot;
  artifacts: String[];
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
}: {
  children: React.ReactNode;
}) {
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

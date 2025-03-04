import React from "react";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { User } from "lucide-react";
import { createCombatCard } from "@/data/combatCards/combatCards";
import { CharacterCombatant } from "@/types/combatants";
import { CombatCard } from "@/types/combatCards";
import { Loot } from "@/types/loot";
import { CombatantId } from "@/data/combatants/enums";

type ExpeditionEngineContextContents = {
  characterCombatant: CharacterCombatant;
  setCharacterCombatant: React.Dispatch<
    React.SetStateAction<CharacterCombatant>
  >;
  deck: CombatCard[];
  loot: Loot;
  setLoot: React.Dispatch<React.SetStateAction<Loot>>;
  artifacts: {};
  setArtifacts: React.Dispatch<React.SetStateAction<{}>>;
  supplies: {};
  setSupplies: React.Dispatch<React.SetStateAction<{}>>;
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

  let initializeCharacterCombatant = (): CharacterCombatant => {
    let characterModifiers = getModifiers();
    return {
      combatantInstanceId: 0,
      id: CombatantId.SPELL_SWORD,
      name: "The Spellsword",
      description: "A fearsome foe.",
      icon: User,
      iconStyle: {},
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

  let initializedCharacterCombatant = initializeCharacterCombatant();
  let initializedDeck: CombatCard[] = [
    ...character.deck.equippedMagic,
    ...character.deck.equppedMartial,
  ].map((cardId, deckId) => createCombatCard(cardId, deckId));

  const [deck, setDeck] = React.useState(initializedDeck);
  const [loot, setLoot] = React.useState<Loot>({});
  const [artifacts, setArtifacts] = React.useState({});
  const [supplies, setSupplies] = React.useState({});
  const [characterCombatant, setCharacterCombatant] = React.useState(
    initializedCharacterCombatant,
  );

  return (
    <ExpeditionEngineContext.Provider
      value={{
        characterCombatant,
        setCharacterCombatant,
        deck,
        loot,
        setLoot,
        artifacts,
        setArtifacts,
        supplies,
        setSupplies,
      }}
    >
      {children}
    </ExpeditionEngineContext.Provider>
  );
}

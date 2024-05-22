import React from "react";
import { useCharacterEngineContext } from "./characterEngineContext";
import { Loot } from "./utils/lootUtilities";
import { Combatant } from "@/data/combatants/combatants";
import { User } from "lucide-react";
import { Character, Deck } from "@/data/character/character";
import { CARD_BY_ID, CombatCard } from "@/data/cards/cards";

type ExcursionEngineContextContents = {
  character: Character;
  characterCombatant: Combatant;
  deck: CombatCard[];
  loot: Loot;
  artifacts: String[];
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
  let initializeCharacterCombatant = (): Combatant => {
    let characterStats = getModifiers();
    return {
      id: "spellSword",
      name: "The Spell Sword",
      description: "A fearsome foe.",
      icon: User,
      maxHp: characterStats.hp,
      ...characterStats,
      lootTable: {},
    };
  };
  const [characterCombatant, setCharacterCombatant] = React.useState(
    initializeCharacterCombatant()
  );
  const [deck, setDeck] = React.useState([
    ...character.deck.equippedMagic,
    ...character.deck.equppedMartial,
  ].map((cardId) => CARD_BY_ID[cardId]));
  const [loot, setLoot] = React.useState({} as Loot);
  const [artifacts, setArtifacts] = React.useState([]);

  return (
    <ExcursionEngineContext.Provider
      value={{ character, characterCombatant, deck, loot, artifacts }}
    >
      {children}
    </ExcursionEngineContext.Provider>
  );
}

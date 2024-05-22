import React from "react";
import { useCharacterEngineContext } from "./characterEngineContext";
import { Loot } from "./utils/lootUtilities";
import { Combatant } from "@/data/combatants/combatants";
import { User } from "lucide-react";
import { Character } from "@/data/character/character";

type ExcursionEngineContextContents = {
  character: Character;
  characterCombatant: Combatant;
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
  const [loot, setLoot] = React.useState({} as Loot);
  const [artifacts, setArtifacts] = React.useState([]);

  return (
    <ExcursionEngineContext.Provider
      value={{ character, characterCombatant, loot, artifacts }}
    >
      {children}
    </ExcursionEngineContext.Provider>
  );
}

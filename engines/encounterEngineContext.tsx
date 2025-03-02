import { DRAW_LIMIT } from "@/configurations/configurations";
import { floor1a } from "@/data/encounters/floor1a";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import { Combatant } from "@/types/combatants";
import { CombatCard } from "@/types/combatCards";
import { Encounter } from "@/types/encounters";
import React from "react";

type EncounterContextContents = {
  encounter: Encounter;
  enemyCombatants: Combatant[];
  alliedCombatants: Combatant[];
  round: number;
  stamina: number;
  drawPile: CombatCard[];
  hand: CombatCard[];
  discardPile: CombatCard[];
  setEnemyCombatants: React.Dispatch<React.SetStateAction<Combatant[]>>;
  setAlliedCombatants: React.Dispatch<React.SetStateAction<Combatant[]>>;
  setHand: React.Dispatch<React.SetStateAction<CombatCard[]>>;
  setDiscardPile: React.Dispatch<React.SetStateAction<CombatCard[]>>;
  setStamina: React.Dispatch<React.SetStateAction<number>>;
  finishTurn: () => void;
};

const EncounterEngineContext = React.createContext(
  {} as EncounterContextContents,
);

export const useEncounterContext = () =>
  React.useContext(EncounterEngineContext);

export default function EncounterEngineProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { characterCombatant, setCharacterCombatant, deck } =
    useExpeditionContext();

  const [round, setRound] = React.useState(0);
  const [stamina, setStamina] = React.useState(characterCombatant.stamina);
  const [encounter, setEncounter] = React.useState(floor1a);
  const [enemyCombatants, setEnemyCombatants] = React.useState<Combatant[]>([
    ...encounter.combatants,
  ]);
  const [alliedCombatants, setAlliedCombatants] = React.useState<Combatant[]>(
    [],
  );
  let encounterDeck = deck.map((x) => Object.assign({}, x));
  const [drawPile, setDrawPile] = React.useState());
  const [hand, setHand] = React.useState<CombatCard[]>([]);
  const [discardPile, setDiscardPile] = React.useState<CombatCard[]>([]);

  const newRound = () => {
    setStamina(characterCombatant.stamina);
    setRound(round + 1);
    draw();
  };

  const enemeyRound = () => {
    let damageTaken = 0;
    for (var combatant of enemyCombatants) {
      damageTaken += combatant.atk;
    }
    characterCombatant.hp -= Math.max(damageTaken - characterCombatant.def, 0);
    characterCombatant.def = characterCombatant.baseDef;
    characterCombatant.atk = characterCombatant.baseAtk;
    setCharacterCombatant({ ...characterCombatant });
  };

  const finishTurn = () => {
    setTimeout(() => {
      enemeyRound();
      newRound();
    }, 600);
  };

  React.useEffect(() => {
    if ((stamina == 0 || hand.length == 0) && round > 0) {
      finishTurn();
    }
  }, [stamina, hand]);

  React.useEffect(() => {
    newRound();
  }, []);

  return (
    <EncounterEngineContext.Provider
      value={{
        encounter,
        enemyCombatants,
        alliedCombatants,
        round,
        stamina,
        drawPile,
        hand,
        discardPile,
        setEnemyCombatants,
        setAlliedCombatants,
        setHand,
        setDiscardPile,
        setStamina,
        finishTurn,
      }}
    >
      {children}
    </EncounterEngineContext.Provider>
  );
}

import React from "react";
import { useEncounterContext } from "./encounterEngineContext";
import { Combatant } from "@/data/combatants/combatants";
import { CombatCard } from "@/data/cards/cards";
import { useExcursionContext } from "./excursionEngineContext";

type CombatCardEngineContextContents = {
  selectedCard: CombatCard | null;
  selectedEnemyCombatants: Combatant[];
  selectedAlliedCombatants: Combatant[];
  addTarget: (combatant: Combatant) => void;
  removeTarget: (combatant: Combatant) => void;
  selectCard: (card: CombatCard | null) => void;
};

const CombatCardEngineContext = React.createContext(
  {} as CombatCardEngineContextContents
);

export const useCombatCardEngineContext = () =>
  React.useContext(CombatCardEngineContext);

export default function CombatCardEngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { characterCombatant } = useExcursionContext();
  const {
    alliedCombatants,
    enemyCombatants,
    hand,
    discardPile,
    stamina,
    setDiscardPile,
    setEnemyCombatants,
    setHand,
    setStamina,
  } = useEncounterContext();
  const [selectedCard, setSelectedCard] = React.useState<CombatCard | null>(
    null
  );
  const [selectedEnemyCombatants, setSelectedEnemyCombatants] = React.useState<
    Combatant[]
  >([]);
  const [selectedAlliedCombatants, setSelectedAlliedCombatants] =
    React.useState<Combatant[]>([]);

  const addTarget = (combatant: Combatant) => {
    if (!selectedCard) {
      return;
    }

    if (
      selectedCard.target === "enemy" &&
      enemyCombatants.includes(combatant)
    ) {
      setSelectedEnemyCombatants([...selectedEnemyCombatants, combatant]);
    } else if (
      selectedCard.target === "ally" &&
      alliedCombatants.includes(combatant)
    ) {
      setSelectedAlliedCombatants([...selectedAlliedCombatants, combatant]);
    }
  };

  const removeTarget = (combatant: Combatant) => {
    if (!selectedCard) {
      return;
    }

    if (selectedCard.target === "enemy") {
      setSelectedEnemyCombatants([
        ...selectedEnemyCombatants.filter(
          (selectedCombatant) =>
            selectedCombatant.combatantId != combatant.combatantId
        ),
      ]);
    } else if (selectedCard.target === "ally") {
      setSelectedAlliedCombatants([
        ...selectedAlliedCombatants.filter(
          (selectedCombatant) =>
            selectedCombatant.combatantId != combatant.combatantId
        ),
      ]);
    }
  };
  const selectCard = (card: CombatCard | null) => {
    if (card && card.cost <= stamina) {
      setSelectedCard(card);
    } else {
      setSelectedCard(null);
    }
  };
  const executeCard = () => {
    if (!selectedCard) {
      return;
    }

    for (var combatant of selectedEnemyCombatants) {
      combatant.hp -=
        characterCombatant.atk * selectedCard.modifier * selectedCard.strikes -
        combatant.def;
    }

    setEnemyCombatants([
      ...enemyCombatants.filter((combatant) => combatant.hp > 0),
    ]);
    setHand([...hand.filter((card) => card.deckId != selectedCard.deckId)]);
    setDiscardPile([...discardPile, selectedCard]);
    setStamina(stamina - selectedCard.cost);
    resetState();
  };

  React.useEffect(() => {
    if (
      selectedCard &&
      selectedEnemyCombatants.length === selectedCard.targets
    ) {
      executeCard();
    }
  }, [selectedEnemyCombatants]);

  let resetState = () => {
    setSelectedCard(null);
    setSelectedEnemyCombatants([]);
    setSelectedAlliedCombatants([]);
  };

  return (
    <CombatCardEngineContext.Provider
      value={{
        selectedCard,
        selectedEnemyCombatants,
        selectedAlliedCombatants,
        addTarget,
        removeTarget,
        selectCard,
      }}
    >
      {children}
    </CombatCardEngineContext.Provider>
  );
}

import React from "react";
import { useEncounterContext } from "./encounterEngineContext";
import { Combatant } from "@/data/combatants/combatants";
import { CombatCard, Target } from "@/data/cards/cards";
import { useExpeditionContext } from "./expeditionEngineContext";

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
  const { characterCombatant, setCharacterCombatant } = useExpeditionContext();
  const {
    alliedCombatants,
    enemyCombatants,
    hand,
    discardPile,
    stamina,
    setDiscardPile,
    setEnemyCombatants,
    setAlliedCombatants,
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
    switch (selectedCard.target) {
      case Target.ENEMIES: {
        if (enemyCombatants.includes(combatant)) {
          setSelectedEnemyCombatants([...selectedEnemyCombatants, combatant]);
        }
        break;
      }
      case Target.ALLIES: {
        if (
          alliedCombatants.includes(combatant) ||
          combatant === characterCombatant
        ) {
          setSelectedAlliedCombatants([...selectedAlliedCombatants, combatant]);
        }
      }
    }
  };

  const removeTarget = (combatant: Combatant) => {
    if (!selectedCard) {
      return;
    }
    switch (selectedCard.target) {
      case Target.ENEMIES: {
        setSelectedEnemyCombatants([
          ...selectedEnemyCombatants.filter(
            (selectedCombatant) =>
              selectedCombatant.combatantId != combatant.combatantId
          ),
        ]);
        break;
      }
      case Target.ALLIES: {
        setSelectedAlliedCombatants([
          ...selectedAlliedCombatants.filter(
            (selectedCombatant) =>
              selectedCombatant.combatantId != combatant.combatantId
          ),
        ]);
        break;
      }
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

    switch (selectedCard.target) {
      case Target.ENEMIES: {
        executeOffensiveCard(selectedCard);
        break;
      }
      case Target.ALLIES: {
        executeDefensiveCard(selectedCard);
        break;
      }
    }

    setHand([...hand.filter((card) => card.deckId != selectedCard.deckId)]);
    setDiscardPile([...discardPile, selectedCard]);
    setStamina(stamina - selectedCard.cost);
    resetState();
  };

  const executeOffensiveCard = (selectedCard: CombatCard) => {
    for (var combatant of selectedEnemyCombatants) {
      combatant.hp -=
        characterCombatant.atk * selectedCard.modifier * selectedCard.strikes -
        combatant.def;
      combatant.def = combatant.baseDef;
    }

    setEnemyCombatants([
      ...enemyCombatants.filter((combatant) => combatant.hp > 0),
    ]);
  };

  const executeDefensiveCard = (selectedCard: CombatCard) => {
    for (var combatant of selectedAlliedCombatants) {
      combatant.def += characterCombatant.baseDef * selectedCard.modifier;
      alliedCombatants.filter(
        (ally) => ally.combatantId != combatant.combatantId
      );
    }

    setAlliedCombatants([
      ...alliedCombatants,
      ...selectedAlliedCombatants.filter(
        (combatant) => combatant.combatantId != characterCombatant.combatantId
      ),
    ]);
    setCharacterCombatant({ ...characterCombatant });
  };

  React.useEffect(() => {
    if (
      selectedCard &&
      ((selectedEnemyCombatants.length === selectedCard.targets &&
        selectedCard.target === Target.ENEMIES) ||
        (selectedAlliedCombatants.length === selectedCard.targets &&
          selectedCard.target === Target.ALLIES))
    ) {
      executeCard();
    }
  }, [selectedEnemyCombatants, selectedAlliedCombatants]);

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

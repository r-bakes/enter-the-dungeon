import React from "react";
import { useEncounterContext } from "@/engines/encounterEngineContext";
import { Combatant } from "@/types/combatants";
import { CombatCard } from "@/types/combatCards";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import { CombatCardTarget } from "@/data/combatCards/enums";

type CombatCardEngineContextContents = {
  selectedCard: CombatCard | null;
  selectedEnemyCombatants: Combatant[];
  selectedAlliedCombatants: Combatant[];
  addTarget: (combatant: Combatant) => void;
  removeTarget: (combatant: Combatant) => void;
  selectCard: (card: CombatCard | null) => void;
};

const CombatCardEngineContext = React.createContext(
  {} as CombatCardEngineContextContents,
);

export const useCombatCardEngineContext = () =>
  React.useContext(CombatCardEngineContext);

export default function CombatdEngineProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    null,
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
      case CombatCardTarget.ENEMIES: {
        if (Object.values(enemyCombatants).includes(combatant)) {
          setSelectedEnemyCombatants([...selectedEnemyCombatants, combatant]);
        }
        break;
      }
      case CombatCardTarget.ALLIES: {
        if (
          Object.values(alliedCombatants).includes(combatant) ||
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
      case CombatCardTarget.ENEMIES: {
        setSelectedEnemyCombatants([
          ...selectedEnemyCombatants.filter(
            (selectedCombatant) =>
              selectedCombatant.combatantInstanceId !=
              combatant.combatantInstanceId,
          ),
        ]);
        break;
      }
      case CombatCardTarget.ALLIES: {
        setSelectedAlliedCombatants([
          ...selectedAlliedCombatants.filter(
            (selectedCombatant) =>
              selectedCombatant.combatantInstanceId !=
              combatant.combatantInstanceId,
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
      case CombatCardTarget.ENEMIES: {
        executeOffensiveCard(selectedCard);
        break;
      }
      case CombatCardTarget.ALLIES: {
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

    setEnemyCombatants({ ...enemyCombatants });
  };

  const executeDefensiveCard = (selectedCard: CombatCard) => {
    for (var combatant of selectedAlliedCombatants) {
      combatant.def += characterCombatant.baseDef * selectedCard.modifier;
    }

    setAlliedCombatants({ ...alliedCombatants });
    setCharacterCombatant({ ...characterCombatant });
  };

  React.useEffect(() => {
    if (
      selectedCard &&
      ((selectedEnemyCombatants.length === selectedCard.targets &&
        selectedCard.target === CombatCardTarget.ENEMIES) ||
        (selectedAlliedCombatants.length === selectedCard.targets &&
          selectedCard.target === CombatCardTarget.ALLIES))
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

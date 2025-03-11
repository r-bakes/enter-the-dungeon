import { DRAW_LIMIT } from "@/configurations/configurations";
import { useEncounterContext } from "@/engines/encounterEngineContext";
import { CombatCard } from "@/types/combatCards";
import React from "react";

const enum DrawPhase {
  DRAW = "DRAW",
  SHUFFLE = "SHUFFLE",
  DISCARD = "DISCARD",
}

const useEncounterDeckActions = () => {
  const { drawPile, hand, discardPile, setDrawPile, setDiscardPile, setHand } =
    useEncounterContext();
  const [drawPhase, setDrawPhase] = React.useState<null | DrawPhase>(null);

  const shuffle = (cards: CombatCard[]): CombatCard[] => {
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  };

  React.useEffect(() => {
    switch (drawPhase) {
      case DrawPhase.DISCARD:
        let newDiscardPile = [...discardPile, ...hand];

        setDiscardPile(newDiscardPile);
        setHand([]);

        setTimeout(() => {
          if (drawPile.length < DRAW_LIMIT) {
            setDrawPhase(DrawPhase.SHUFFLE);
          } else {
            setDrawPhase(DrawPhase.DRAW);
          }
        }, 800);
        break;

      case DrawPhase.SHUFFLE:
        let newDrawPile = [...drawPile, ...shuffle(discardPile)];

        setDrawPile(newDrawPile);
        setDiscardPile([]);

        setTimeout(() => {
          setDrawPhase(DrawPhase.DRAW);
        }, 800);

        break;

      case DrawPhase.DRAW:
        let newHand: CombatCard[] = [];

        for (let i = 0; i < DRAW_LIMIT; i++) {
          newHand.push(drawPile.pop() as CombatCard);
        }

        newHand.sort((a, b) => a.name.localeCompare(b.name));
        setDrawPile([...drawPile]);
        setHand([...newHand]);
        setDrawPhase(null);

        break;
    }
  }, [drawPhase]);

  const draw = () => {
    setDrawPhase(DrawPhase.DISCARD);
  };

  return { draw, shuffle };
};
export default useEncounterDeckActions;

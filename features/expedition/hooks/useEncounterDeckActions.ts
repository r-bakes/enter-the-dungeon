import { DRAW_LIMIT } from "@/configurations/configurations";
import { useEncounterContext } from "@/engines/encounterEngineContext";
import { CombatCard } from "@/types/combatCards";

const useEncounterDeckActions = () => {
  const { drawPile, hand, discardPile, setDrawPile, setDiscardPile, setHand } =
    useEncounterContext();

  const shuffle = (cards: CombatCard[]): CombatCard[] => {
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  };

  const draw = () => {
    let newHand: CombatCard[] = [];
    let newDiscardPile = [
      ...discardPile,
      ...hand.map((x) => Object.assign({}, x)),
    ];
    let newDrawPile = drawPile.map((x) => Object.assign({}, x));

    for (let i = 0; i < DRAW_LIMIT; i++) {
      if (newDrawPile.length === 0 && newDiscardPile.length > 0) {
        newDrawPile = shuffle(newDiscardPile.map((x) => Object.assign({}, x)));
        newDiscardPile = [];
      }
      if (newDrawPile.length > 0) {
        newHand.push(newDrawPile.pop() as CombatCard);
      }
    }
    newHand.sort((a, b) => a.name.localeCompare(b.name));

    setDrawPile([...newDrawPile]);
    setDiscardPile(newDiscardPile);
    setHand([...newHand]);
  };

  return { draw };
};
export default useEncounterDeckActions;

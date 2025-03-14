import {
  MAGIC_DECK_LIMIT,
  MARTIAL_DECK_LIMIT,
} from "@/configurations/configurations";
import { combatCardTable } from "@/data/combatCards/combatCards";
import { CombatCardId, CombatCardType } from "@/data/combatCards/enums";
import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { CombatCardTemplate } from "@/types/combatCards";
import { Equipment } from "@/types/items";
import { toast } from "sonner";

const useDeckActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();

  const addCardsToDeckByItemId = (itemId: ItemId) => {
    let item = itemTable[itemId] as Equipment;

    item.cards.forEach((cardId) => {
      let card = combatCardTable[cardId];
      if (card.type === CombatCardType.MARTIAL) {
        character.deck.unequippedMartial.push(card.id);
      } else {
        character.deck.unequippedMagic.push(card.id);
      }
    });

    setCharacter({ ...character });
  };

  const removeCardsFromDeckByItemId = (itemId: ItemId) => {
    let item = itemTable[itemId] as Equipment;

    let cardId: CombatCardId;
    for (cardId of item.cards) {
      let card = combatCardTable[cardId];
      if (card.type === CombatCardType.MARTIAL) {
        if (character.deck.unequippedMartial.includes(card.id)) {
          character.deck.unequippedMartial.splice(
            character.deck.unequippedMartial.findIndex(
              (cardId) => cardId === card.id,
            ),
            1,
          );
        } else {
          character.deck.equppedMartial.splice(
            character.deck.equppedMartial.findIndex(
              (cardId) => cardId === card.id,
            ),
            1,
          );
        }
      } else {
        if (character.deck.unequippedMagic.includes(card.id)) {
          character.deck.unequippedMagic.splice(
            character.deck.unequippedMagic.findIndex(
              (cardId) => cardId === card.id,
            ),
            1,
          );
        } else {
          character.deck.equippedMagic.splice(
            character.deck.equippedMagic.findIndex(
              (cardId) => cardId === card.id,
            ),
          );
        }
      }
    }

    setCharacter({ ...character });
  };

  const equipCard = (cardId: CombatCardId) => {
    if (character.deck.unequippedMartial.includes(cardId)) {
      if (character.deck.equppedMartial.length == MARTIAL_DECK_LIMIT) {
        toast.error("Deck limit reached!", {
          dismissible: true,
          position: "top-center",
          description: "Unequip a card and try again.",
        });
        return;
      }

      character.deck.unequippedMartial.splice(
        character.deck.unequippedMartial.findIndex(
          (unequippedCardId) => unequippedCardId === cardId,
        ),
        1,
      );
      character.deck.equppedMartial.push(cardId);
      character.deck.equppedMartial.sort((a, b) => a.localeCompare(b));
    } else {
      if (character.deck.equippedMagic.length == MAGIC_DECK_LIMIT) {
        toast.error("Deck limit reached!", {
          dismissible: true,
          position: "top-center",
          description: "Unequip a card and try again.",
        });
        return;
      }

      character.deck.unequippedMagic.splice(
        character.deck.unequippedMagic.findIndex(
          (unequippedCardId) => unequippedCardId === cardId,
        ),
        1,
      );
      character.deck.equippedMagic.push(cardId);
      character.deck.equippedMagic.sort();
    }
    setCharacter({ ...character });
  };

  const unequipCard = (cardId: CombatCardId) => {
    if (character.deck.equppedMartial.includes(cardId)) {
      character.deck.equppedMartial.splice(
        character.deck.equppedMartial.findIndex(
          (equippedCardId) => equippedCardId === cardId,
        ),
        1,
      );
      character.deck.unequippedMartial.push(cardId);
      character.deck.unequippedMartial.sort();
    } else {
      character.deck.equippedMagic.splice(
        character.deck.equippedMagic.findIndex(
          (equippedCardId) => equippedCardId === cardId,
        ),
        1,
      );
      character.deck.unequippedMagic.push(cardId);
      character.deck.unequippedMagic.sort();
    }
    setCharacter({ ...character });
  };
  return {
    equipCard,
    unequipCard,
    addCardsToDeckByItemId,
    removeCardsFromDeckByItemId,
  };
};
export default useDeckActions;

import { Slot } from "@/data/character/enums";
import { CombatCardType } from "@/data/combatCards/enums";
import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Equipment } from "@/types/items";

const useDeckActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();

  const addCardsByItemId = (itemId: ItemId) => {
    let item = itemTable[itemId] as Equipment;

    item.cards.forEach((card) => {
      if (card.type === CombatCardType.MARTIAL) {
        character.deck.unequippedMartial.push(card.id);
      } else {
        character.deck.unequippedMagic.push(card.id);
      }
    });

    setCharacter({ ...character });
  };

  const removeCardsByItemId = (itemId: ItemId) => {
    let item = itemTable[itemId] as Equipment;

    item.cards.forEach((card) => {
      if (unequipped.includes(card.id)) {
        unequipped.splice(
          unequipped.findIndex((unequippedCard) => unequippedCard === card.id),
          1,
        );
      } else {
        equipped.splice(
          equipped.findIndex((equippedCard) => equippedCard === card.id),
          1,
        );
      }
    });
  };
  return {
    addCardsByItemId,
    removeCardsByItemId,
  };
};
export default useDeckActions;

import { Slot } from "@/data/character/enums";
import { ItemId } from "@/data/items/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";

const useEquipmentActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();
  const { addItem, removeItem } = useInventoryActions();

  const equipItem = (itemId: ItemId, slot: Slot): void => {
    removeItem(itemId, 1);

    if (character.loadout[slot] !== null) {
      unequipItem(slot);
    }
    character.loadout[slot] = itemId;

    addCardsByItemId(itemId);

    setCharacter({ ...character });
  };

  const unequipItem = (slot: Slot) => {
    if (character.loadout[slot] != null) {
      let itemId = character.loadout[slot];
      character.loadout[slot] = null;
      addItem(character.inventory, itemId, 1);
      removeCardsByItemId(
        itemId,
        character.deck.equppedMartial,
        character.deck.unequippedMartial,
      );
      setCharacter({ ...character });
    }
  };

  return {
    addItem,
    removeItem,
  };
};
export default useEquipmentActions;

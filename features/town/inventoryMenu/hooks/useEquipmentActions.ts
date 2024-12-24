import { Slot } from "@/data/character/enums";
import { ItemId } from "@/data/items/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";
import useDeckActions from "@/features/deck/hooks/useDeckActions";

const useEquipmentActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();
  const { addItem, removeItem } = useInventoryActions();
  const { addCardsToDeckByItemId, removeCardsFromDeckByItemId } =
    useDeckActions();

  const equipItem = (itemId: ItemId, slot: Slot): void => {
    removeItem(itemId, 1);

    if (character.loadout[slot] !== null) {
      unequipItem(slot);
    }

    character.loadout[slot] = itemId;

    addCardsToDeckByItemId(itemId);

    setCharacter({ ...character });
  };

  const unequipItem = (slot: Slot) => {
    if (character.loadout[slot] != null) {
      let itemId = character.loadout[slot];
      character.loadout[slot] = null;

      addItem(itemId, 1);

      removeCardsFromDeckByItemId(itemId);

      setCharacter({ ...character });
    }
  };

  return {
    equipItem,
    unequipItem,
  };
};
export default useEquipmentActions;

import { ItemId } from "@/data/items/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";

const useInventoryActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();

  const addItem = (itemId: ItemId, amount: number = 1) => {
    character.inventory[itemId] += amount;
    setCharacter({ ...character });
  };

  const removeItem = (itemId: ItemId, amount: number = 1) => {
    if (character.inventory[itemId] >= amount) {
      character.inventory[itemId] = character.inventory[itemId] - amount;
    }
  };

  return {
    addItem,
    removeItem,
  };
};
export default useInventoryActions;

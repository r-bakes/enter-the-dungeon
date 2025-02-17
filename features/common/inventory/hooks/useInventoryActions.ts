import { ItemId } from "@/data/items/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Loot } from "@/types/loot";
import { TaskRequires } from "@/types/tasks";

const useInventoryActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();

  const addLoot = (loot: Loot) => {
    Object.entries(loot).forEach(([itemId, amount]) => {
      addItem(itemId as ItemId, amount);
    });
  };

  const removeItems = (items: { [id in ItemId]?: number }) => {
    Object.entries(items).forEach(([itemId, amount]) =>
      removeItem(itemId as ItemId, amount),
    );
  };

  const addItem = (itemId: ItemId, amount: number = 1) => {
    character.inventory[itemId] += amount;
    setCharacter({ ...character });
  };

  const removeItem = (itemId: ItemId, amount: number = 1) => {
    if (character.inventory[itemId] >= amount) {
      character.inventory[itemId] = character.inventory[itemId] - amount;
    }
  };

  const hasItems = (
    requires: TaskRequires,
    requiresMultiplier: number = 1,
  ): boolean => {
    return Object.entries(requires).every(([id, requiredAmount]) => {
      return (
        (character.inventory[id as ItemId] || 0) * requiresMultiplier >=
        requiredAmount
      );
    });
  };

  return {
    addItem,
    addLoot,
    removeItems,
    removeItem,
    hasItems,
  };
};
export default useInventoryActions;

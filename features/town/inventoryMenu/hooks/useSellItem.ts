import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import {
  addItem,
  removeItem,
} from "@/features/common/utils/characterStateUtilities";
import { formatLargeQuantity } from "@/features/common/utils/formattingUtilities";
import { toast } from "sonner";

const useSellItem = () => {
  const { character, setCharacter } = useCharacterEngineContext();

  const sellItem = (itemId: ItemId, amount: number) => {
    // Validate if the character has enough items to sell
    const currentAmount = character.inventory[itemId] || 0;
    if (currentAmount < amount) {
      toast.error("Insufficient items to sell!", {
        dismissible: true,
        position: "top-center",
        description: `You only have ${currentAmount} ${itemTable[itemId].name}(s).`,
      });
      return;
    }

    // Remove the specified amount of the item from inventory
    removeItem(character.inventory, itemId, amount);

    // Add gold based on the item's value and the amount sold
    const goldEarned = itemTable[itemId].value * amount;
    addItem(character.inventory, ItemId.GOLD, goldEarned);

    // Update the character state
    setCharacter({ ...character });

    // Provide user feedback
    toast.success(
      `Sold ${amount} ${itemTable[itemId].name}(s) for ${formatLargeQuantity(goldEarned)} gold!`,
      {
        dismissible: true,
        position: "top-center",
      },
    );
  };

  return sellItem;
};

export default useSellItem;

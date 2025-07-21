import { itemTable } from "@/data/items/items";
import { Label } from "@radix-ui/react-label";
import { Backpack } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Character } from "@/types/character";
import { Loot } from "@/types/loot";
import {
  formatLargeQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { Item } from "@/types/items";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/tasks";
import { ItemId } from "@/data/items/enums";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import { taskToSkill } from "@/features/common/working/utils/workingUtils";
import { MenuId } from "@/data/menus/enums";

export default function TaskCompleteToast({
  task,
  loot,
  experience,
  character,
}: Readonly<{
  task: Task;
  loot: Loot;
  experience: number;
  character: Character;
}>) {
  const { setSelectedMenu } = useMenuEngineContext();

  const itemCard = (item: Item, amount: number) => {
    return (
      <div key={item.id} className="flex w-full items-center gap-1 py-0.5">
        {renderIcon(item.icon, 14, {
          ...item.iconStyle,
        })}
        <Label className="text-xs">+{amount}</Label>
        <Label className="text-muted-foreground flex-1 truncate text-xs font-normal">
          {item.name}
        </Label>
        <Label className="text-muted-foreground text-xs">
          ({formatLargeQuantity(character.inventory[item.id])})
        </Label>
      </div>
    );
  };

  // Show only first 4 items to keep toast compact
  const lootEntries = Object.entries(loot);
  const displayedLoot = lootEntries.slice(0, 4);
  const hasMoreItems = lootEntries.length > 4;

  return (
    <div
      className="flex h-full w-full max-w-sm flex-col"
      onClick={() => setSelectedMenu(taskToSkill[task.id] as unknown as MenuId)}
    >
      {/* Compact header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {renderIcon(task.icon, 20, {
            ...task.iconStyle,
          })}
          <Label className="truncate text-sm">{task.name}</Label>
        </div>
        <Label className="text-muted-foreground min-w-max text-xs">
          +{formatLargeQuantity(experience)} xp
        </Label>
      </div>

      {/* Compact loot display */}
      {displayedLoot.length > 0 && (
        <div className="mt-2 flex flex-col gap-0.5">
          {displayedLoot.map(([itemId, number]) =>
            itemCard(itemTable[itemId as ItemId], number),
          )}
          {hasMoreItems && (
            <Label className="text-muted-foreground py-1 text-center text-xs">
              +{lootEntries.length - 4} more items...
            </Label>
          )}
        </div>
      )}
    </div>
  );
}

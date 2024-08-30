import { itemTable } from "@/data/items/items";
import { Label } from "@radix-ui/react-label";
import { Backpack } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Character } from "@/types/character";
import { Task } from "@/types/skills";
import { Loot } from "@/types/loot";
import { formatLargeQuantity, renderIcon } from "@/utils/formattingUtilities";
import { Item } from "@/types/items";

export default function TaskComplete({
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
  const itemCard = (item: Item, amount: number) => {
    return (
      <Card key={item.id} className="flex h-min w-max items-center gap-2 p-2">
        {renderIcon(item.icon, 24, {
          ...item.iconStyle,
        })}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Label className="text-xs">+{amount}</Label>
            <Label className="text-xs font-normal text-muted-foreground">
              {item.name}
            </Label>
          </div>
          <div className="flex w-full items-center justify-end">
            <Label className="mr-1 text-xs text-muted-foreground">
              ({formatLargeQuantity(character.inventory[item.id])})
            </Label>
            <Backpack size={14} strokeWidth={1}></Backpack>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          {renderIcon(task.icon, 24, {
            ...task.iconStyle,
          })}
          <Label className="mr-1 text-sm font-semibold">{task.name}</Label>
        </div>
        <Label className="text-sm text-muted-foreground">
          +{formatLargeQuantity(experience)} xp
        </Label>
      </div>
      {Object.keys(loot).length > 0 ? (
        <div className="flex gap-2">
          {Object.entries(loot).map(([itemId, number]) =>
            itemCard(itemTable[itemId], number),
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

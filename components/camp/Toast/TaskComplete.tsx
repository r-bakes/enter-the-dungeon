import { Item } from "@/data/items/types";
import { Task } from "@/data/skills/skills";
import { Character } from "@/data/character/character";
import { itemTable } from "@/data/items/items";
import { Loot } from "@/engine/utils/lootUtilities";
import { Label } from "@radix-ui/react-label";
import { Backpack } from "lucide-react";
import { renderIcon } from "@/data/gameObject";
import { Card } from "@/components/ui/card";

export default function TaskComplete({
  task,
  loot,
  character,
}: {
  task: Task;
  loot: Loot;
  character: Character;
}) {
  const itemCard = (item: Item, amount: number) => {
    return (
      <Card key={item.id} className="flex h-min w-max items-center gap-2 p-2">
        {renderIcon(item.icon, 24, {
          ...item.iconStyle,
        })}
        <div className="flex flex-col">
          <Label className="text-sm text-muted-foreground">{item.name}</Label>
          <div className="flex items-center gap-1">
            <Label className="text-sm text-muted-foreground">
              + {amount} ({character.inventory[item.id]})
            </Label>
            <Backpack size={15} strokeWidth={1}></Backpack>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="flex h-full w-full flex-col space-y-3">
      <div className="flex items-end space-x-2">
        {renderIcon(task.icon, 24, {
          ...task.iconStyle,
        })}
        <Label className="text-sm font-semibold">{task.name}</Label>
        <Label className="text-sm text-muted-foreground">
          {" "}
          + {task.experience} xp
        </Label>
      </div>
      <div className="flex space-x-2">
        {Object.entries(loot).map(([itemId, number]) =>
          itemCard(itemTable[itemId], number),
        )}
      </div>
    </div>
  );
}

import { Item } from "@/data/items/types";
import { Character } from "@/data/character/character";
import { itemTable } from "@/data/items/items";
import { Label } from "@radix-ui/react-label";
import { Backpack } from "lucide-react";
import { renderIcon } from "@/data/gameObject";
import { Card } from "@/components/ui/card";
import { Task } from "@/data/skills/types";
import { Loot } from "@/engines/utils/lootUtilities";

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
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex items-end gap-2">
        {renderIcon(task.icon, 24, {
          ...task.iconStyle,
        })}
        <Label className="text-sm font-semibold">{task.name}</Label>
        <Label className="text-sm text-muted-foreground">
          {" "}
          + {experience} xp
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

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
      <Card key={item.id} className="flex w-full items-center gap-2 p-1">
        {renderIcon(item.icon, 16, {
          ...item.iconStyle,
        })}
        <div className="flex w-full justify-between">
          <div className="flex flex-row items-center gap-1">
            <Label className="text-xs">+{amount}</Label>
            <Label className="text-xs font-normal text-muted-foreground">
              {item.name}
            </Label>
          </div>
          <div className="flex items-center justify-end">
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
    <div
      className="flex h-full w-full flex-col"
      onClick={() => setSelectedMenu(taskToSkill[task.id] as MenuId)}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {renderIcon(task.icon, 24, {
            ...task.iconStyle,
          })}
          <Label>{task.name}</Label>
        </div>
        <Label className="min-w-max text-xs font-normal text-muted-foreground">
          +{formatLargeQuantity(experience)} xp
        </Label>
      </div>
      {Object.keys(loot).length > 0 ? (
        <div className="flex flex-col gap-1">
          <Separator className="mb-3 mt-2"></Separator>
          {Object.entries(loot).map(([itemId, number]) =>
            itemCard(itemTable[itemId as ItemId], number),
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

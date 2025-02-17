import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Backpack } from "lucide-react";
import { Item } from "@/types/items";
import {
  formatLargeQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { TaskRequires } from "@/types/tasks";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";
import { itemTable } from "@/data/items/items";
import { ItemId } from "@/data/items/enums";

export function TaskRequiresEntry({
  data,
  requiresMultiplier = 1,
}: Readonly<{
  data: TaskRequires;
  requiresMultiplier?: number;
}>) {
  const { character } = useCharacterEngineContext();
  const { hasItems } = useInventoryActions();

  if (Object.values(data).length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-1">
      <Label className="text-muted-foreground mb-1 text-xs font-light">
        Requires
      </Label>
      {Object.entries(data).map(([id, amount]) => {
        let cardFormat = hasItems(
          { [id as ItemId]: amount },
          requiresMultiplier,
        )
          ? ""
          : "border-red-300";
        let item = itemTable[id as ItemId];

        return (
          <Card
            key={id}
            className={
              "flex w-full items-center justify-between p-2 " + cardFormat
            }
          >
            <div className="flex h-full items-center gap-2">
              {renderIcon(item.icon, 24, {
                ...item.iconStyle,
              })}
              <div className="flex gap-1">
                <Label className="text-xs font-medium">
                  {amount * requiresMultiplier}
                </Label>
                <Label className="text-muted-foreground w-max text-xs font-normal">
                  {item.name}
                </Label>
              </div>
            </div>
            <div className="flex h-full items-center gap-1">
              <Label className="text-muted-foreground text-xs font-normal">
                {item.id in character.inventory
                  ? formatLargeQuantity(character.inventory[id as ItemId])
                  : 0}
              </Label>
              <Backpack size={15} strokeWidth={1}></Backpack>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

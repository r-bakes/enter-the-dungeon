import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Backpack } from "lucide-react";
import { Item } from "@/types/items";
import {
  formatLargeQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";

export function TaskRequiresEntry({
  data,
}: Readonly<{
  data: {
    item: Item;
    quantity: number;
    haveEnough: boolean;
  }[];
}>) {
  const { character } = useCharacterEngineContext();
  if (data.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-1">
      <Label className="mb-1 text-xs font-light text-muted-foreground">
        Requires
      </Label>
      {data.map((item) => {
        let cardFormat = item.haveEnough ? "" : "border-red-300";

        return (
          <Card
            key={item.item.id}
            className={
              "flex w-full items-center justify-between p-2 " + cardFormat
            }
          >
            <div className="flex h-full items-center gap-1">
              {renderIcon(item.item.icon, 24, {
                ...item.item.iconStyle,
              })}
              <Label className="text-xs font-medium">{item.quantity}</Label>
              <Label className="w-max text-xs font-normal text-muted-foreground">
                {item.item.name}
              </Label>
            </div>
            <div className="flex h-full items-center gap-1">
              <Label className="text-xs font-normal text-muted-foreground">
                {item.item.id in character.inventory
                  ? formatLargeQuantity(character.inventory[item.item.id])
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

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Item } from "@/types/items";
import { renderIcon } from "@/features/common/utils/formattingUtilities";

export default function TaskProducesEntry({
  data,
  multiplier,
}: Readonly<{
  data: {
    item: Item;
    minQuantity: number;
    maxQuantity: number;
    chance: number;
  }[][];
  multiplier: number | undefined;
}>) {
  if (data.length === 0) {
    return <></>;
  }
  if (!multiplier) {
    multiplier = 1;
  }

  return (
    <div className="flex flex-col gap-1">
      <Label className="mb-1 text-xs font-light text-muted-foreground">
        Produces
      </Label>
      {data.map((lootGroup) => (
        <Card
          key={lootGroup[0].item.id}
          className={
            "flex w-full flex-col " + (lootGroup.length > 1 ? "px-1" : "")
          }
        >
          <div className="h-full flex-col items-center">
            {lootGroup.map((data) => (
              <Card
                key={data.item.id}
                className={
                  "flex w-full items-center justify-between p-2 " +
                  (lootGroup.length == 1 ? "border-0 shadow-none" : "")
                }
              >
                <div className="flex h-full items-center gap-2">
                  {renderIcon(data.item.icon, 24, {
                    ...data.item.iconStyle,
                  })}
                  <div className="flex gap-1">
                    <Label className="text-xs">
                      {data.minQuantity === data.maxQuantity
                        ? data.minQuantity * multiplier
                        : data.minQuantity * multiplier +
                          " - " +
                          data.maxQuantity * multiplier}
                    </Label>
                    <Label className="w-max text-xs font-normal text-muted-foreground">
                      {data.item.name}
                    </Label>
                  </div>
                </div>
                <Label className="font-nornmal w-max text-xs text-muted-foreground">
                  {data.chance}%
                </Label>
              </Card>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

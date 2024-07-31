import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { renderIcon } from "@/data/gameObject";
import { Item } from "@/data/items/types";

export default function TaskProducesEntry({
  data,
  label,
  multiplier,
}: Readonly<{
  data: {
    item: Item;
    minQuantity: number;
    maxQuantity: number;
    chance: number;
  }[][];
  label: string;
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
        {label}
      </Label>
      {data.map((lootGroup) => (
        <Card
          key={lootGroup[0].item.id}
          className={
            "flex w-full flex-col " + (lootGroup.length > 1 ? "px-1" : "")
          }
        >
          <div className="h-full flex-col items-center gap-1">
            {lootGroup.map((data) => (
              <Card
                key={data.item.id}
                className={
                  "flex w-full items-center justify-between p-2 " +
                  (lootGroup.length == 1 ? "border-0 shadow-none" : "")
                }
              >
                <div className="flex h-full items-center gap-1">
                  {renderIcon(data.item.icon, 24, {
                    ...data.item.iconStyle,
                  })}
                  <Label className="text-xs">
                    {data.minQuantity === data.maxQuantity
                      ? data.minQuantity * multiplier
                      : data.minQuantity * multiplier + " - " + data.maxQuantity * multiplier}
                  </Label>
                  <Label className="w-max text-xs font-normal text-muted-foreground">
                    {data.item.name}
                  </Label>
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

import { Label } from "@/components/ui/label";
import { renderIcon } from "@/data/gameObject";
import { Item } from "@/data/items/types";

export default function TaskProducesEntry({
  data,
  label,
}: Readonly<{
  data: {
    item: Item;
    minQuantity: number;
    maxQuantity: number;
    chance: number;
  }[][];
  label: string;
}>) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="font-light text-muted-foreground mb-1">{label}</Label>
      {data.map((lootGroup) => (
        <div
          className={
            "flex flex-col w-full " +
            (lootGroup.length > 1 ? "border rounded-sm px-1" : "")
          }
          key={lootGroup[0].item.id}
        >
          <div className="flex-col h-full gap-1 items-center">
            {lootGroup.map((data) => (
              <div
                className="flex border w-full justify-between rounded-sm items-center p-2"
                key={data.item.id}
              >
                <div className="flex h-full gap-1 items-center">
                  {renderIcon(data.item.icon, {
                    ...data.item.iconStyle,
                    size: 24,
                    strokeWidth: 0.5,
                    strokeOpacity: 0.5,
                    fillOpacity: 0.5,
                  })}
                  <Label className="text-xs text-muted-foreground">
                    {data.minQuantity === data.maxQuantity
                      ? data.minQuantity
                      : data.minQuantity + "-" + data.maxQuantity}
                  </Label>
                  <Label className="text-xs font-extralight w-max text-muted-foreground">
                    {data.item.name}
                  </Label>
                </div>
                <Label className="text-xs text-muted-foreground">
                  {data.chance}%
                </Label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

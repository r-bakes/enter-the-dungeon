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
      <Label className="mb-1 text-xs font-extralight text-muted-foreground">
        {label}
      </Label>
      {data.map((lootGroup) => (
        <div
          className={
            "flex w-full flex-col " +
            (lootGroup.length > 1 ? "rounded-sm border px-1" : "")
          }
          key={lootGroup[0].item.id}
        >
          <div className="h-full flex-col items-center gap-1">
            {lootGroup.map((data) => (
              <div
                className="flex w-full items-center justify-between rounded-sm border p-2"
                key={data.item.id}
              >
                <div className="flex h-full items-center gap-1">
                  {renderIcon(data.item.icon, 24, {
                    ...data.item.iconStyle,
                  })}
                  <Label className="text-xs">
                    {data.minQuantity === data.maxQuantity
                      ? data.minQuantity
                      : data.minQuantity + " - " + data.maxQuantity}
                  </Label>
                  <Label className="w-max text-xs font-light text-muted-foreground">
                    {data.item.name}
                  </Label>
                </div>
                <Label className="w-max text-xs font-light text-muted-foreground">
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

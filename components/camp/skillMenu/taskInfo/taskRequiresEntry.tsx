import { Label } from "@/components/ui/label";
import { renderIcon } from "@/data/gameObject";
import { Item } from "@/data/items/types";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { Backpack } from "lucide-react";

export function TaskRequiresEntry({
  data,
  label,
}: Readonly<{
  data: {
    item: Item;
    quantity: number;
    haveEnough: boolean;
  }[];
  label: string;
}>) {
  const { character } = useCharacterEngineContext();
  if (data.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-1">
      <Label className="mb-1 text-xs font-extralight text-muted-foreground">
        {label}
      </Label>
      {data.map((item) => (
        <div
          className="flex w-full justify-between rounded-sm border p-2"
          key={item.item.id}
        >
          <div className="flex h-full items-center gap-1">
            {renderIcon(item.item.icon, 24, {
              ...item.item.iconStyle,
            })}
            <Label className="text-xs">{item.quantity}</Label>
            <Label className="w-max text-xs font-light text-muted-foreground">
              {item.item.name}
            </Label>
          </div>
          <div className="flex h-full items-center gap-1">
            <Label className="text-xs font-light text-muted-foreground">
              {item.item.id in character.inventory
                ? character.inventory[item.item.id]
                : 0}
            </Label>
            <Backpack size={15} strokeWidth={1}></Backpack>
          </div>
        </div>
      ))}
    </div>
  );
}

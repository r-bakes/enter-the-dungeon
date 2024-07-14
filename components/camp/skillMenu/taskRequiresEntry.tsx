import { Label } from "@/components/ui/label";
import { renderIcon } from "@/data/gameObject";
import { Item } from "@/data/items/types";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { Backpack } from "lucide-react";

export function TaskRequiresEntry({
  data,
  label,
}: {
  data:
    | {
        item: Item;
        quantity: number;
        haveEnough: boolean;
      }[]
    | null;
  label: string;
}) {
  const { character } = useCharacterEngineContext();
  if (!data) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-1">
      <Label className="font-light text-muted-foreground mb-1">requires</Label>
      {data.map((item) => (
        <div
          className="flex w-full border rounded-sm justify-between p-2"
          key={item.item.id}
        >
          <div className="flex h-full gap-1 items-center">
            {renderIcon(item.item.icon, {
              ...item.item.iconStyle,
              size: 24,
              strokeWidth: 0.5,
              strokeOpacity: 0.5,
              fillOpacity: 0.5,
            })}
            <Label className="text-xs text-muted-foreground">
              {item.quantity}
            </Label>
            <Label className="text-xs font-extralight w-max text-muted-foreground">
              {item.item.name}
            </Label>
          </div>
          <div className="flex h-full gap-1 items-center">
            <Label className="text-xs text-muted-foreground">
              (
              {item.item.id in character.inventory
                ? character.inventory[item.item.id]
                : 0}
              )
            </Label>
            <Backpack size={15} strokeWidth={1}></Backpack>
          </div>
        </div>
      ))}
    </div>
  );
}

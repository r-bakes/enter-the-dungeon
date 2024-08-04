import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Backpack } from "lucide-react";
import { Equipment, Item } from "@/types/items";
import { renderIcon } from "@/utils/formattingUtilities";
import { ItemType } from "@/data/items/enums";
import ItemSlotEquipment from "@/features/camp/inventoryMenu/itemSlotEquipment";

export default function ItemSlot({
  item,
  quantity,
}: Readonly<{
  item: Item;
  quantity: number;
}>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="h-[50px] w-16 text-center">
          <Button
            className="flex h-16 w-16 flex-col border p-2"
            variant="ghost"
          >
            {renderIcon(item.icon, 48, {
              ...item.iconStyle,
            })}
          </Button>
          <Label className="text-sm">{quantity}</Label>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-1 flex h-min w-min flex-col">
        <div className="flex h-min w-max flex-col items-start space-y-1 p-2 text-center">
          <div className="flex w-full space-x-2">
            <div className="flex h-full">
              {renderIcon(item.icon, 35, {
                ...item.iconStyle,
              })}
            </div>
            <div className="flex flex-col items-start text-left">
              <Label className="text-sm font-bold">{item.name}</Label>
              <Label className="text-xs font-light text-muted-foreground">
                {item.description}
              </Label>
            </div>
          </div>
          <div className="flex h-full w-full py-2">
            {item.type == ItemType.EQUIPEMENT ? (
              <ItemSlotEquipment item={item as Equipment}></ItemSlotEquipment>
            ) : (
              <></>
            )}
          </div>
          <div className="mt-3 flex w-full items-center justify-end space-x-1">
            <Label className="text-xs">{quantity}</Label>
            <Backpack size={20} strokeWidth={1}></Backpack>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

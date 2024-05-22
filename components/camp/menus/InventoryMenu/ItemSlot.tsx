import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Backpack } from "lucide-react";
import ItemSlotEquipment from "./ItemSlotEquipment";
import { Equipment, Item, ItemType } from "@/data/GameObject";

export default function ItemSlot({
  item,
  quantity,
}: {
  item: Item;
  quantity: number;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-16 h-[50px] text-center">
          <Button
            className="flex flex-col w-16 h-16 border rounded-md p-2"
            variant="ghost"
          >
            <item.icon size={48} strokeWidth={1}></item.icon>
          </Button>
          <Label className="text-sm">{quantity}</Label>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-1 flex flex-col h-min w-min">
        <div className="flex flex-col items-start p-2 h-min text-center space-y-1 w-max bg-white">
          <div className="flex w-full space-x-2">
            <div className="flex h-full">
              <item.icon size={35} strokeWidth={1}></item.icon>
            </div>
            <div className="flex flex-col items-start text-left">
              <Label className="text-sm font-bold">{item.name}</Label>
              <Label className="text-xs text-muted-foreground font-light">
                {item.description}
              </Label>
            </div>
          </div>
          <div className="flex py-2 w-full h-full">
            {item.type == ItemType.EQUIPEMENT ? (
              <ItemSlotEquipment item={item as Equipment}></ItemSlotEquipment>
            ) : (
              <></>
            )}
          </div>
          <div className="flex items-center justify-end mt-3 w-full space-x-1">
            <Label className="text-xs">{quantity}</Label>
            <Backpack size={20} strokeWidth={1}></Backpack>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

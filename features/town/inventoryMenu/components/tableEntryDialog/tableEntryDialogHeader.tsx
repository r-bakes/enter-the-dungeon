import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { itemTable } from "@/data/items/items";
import { Item } from "@/types/items";
import {
  formatCapitalCase,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { Backpack, CircleDollarSign } from "lucide-react";

export default function TableEntryDialogHeader({
  item,
  itemAmount,
}: Readonly<{
  item: Item;
  itemAmount: number;
}>) {
  return (
    <div>
      <DialogHeader className="flex flex-row items-center gap-2">
        {renderIcon(item.icon, 56, item.iconStyle)}
        <div className="mt-0 flex flex-col justify-center">
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>{item.description}</DialogDescription>
        </div>
      </DialogHeader>
      <div className="mt-4 flex w-full items-center">
        <Label className="font-normal text-muted-foreground">
          {formatCapitalCase(item.type)}
        </Label>
        <div className="mx-4 h-1 w-1 rounded-full bg-black"></div>
        <span className="flex items-center gap-1">
          <Label className="font-normal">{item.value}</Label>
          {renderIcon(CircleDollarSign, 16, {
            ...itemTable.GOLD.iconStyle,
          })}
        </span>
        <div className="mx-4 h-1 w-1 rounded-full bg-black"></div>
        <span className="flex items-center gap-1">
          <Label className="font-normal">{itemAmount}</Label>
          <Backpack size={16} strokeWidth={1}></Backpack>
        </span>
      </div>
      <Separator className="my-6"></Separator>
    </div>
  );
}

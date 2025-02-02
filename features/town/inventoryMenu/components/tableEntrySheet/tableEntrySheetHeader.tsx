import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { itemTable } from "@/data/items/items";
import { Item } from "@/types/items";
import {
  formatCapitalCase,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { Backpack, CircleDollarSign } from "lucide-react";

export default function TableEntrySheetHeader({
  item,
  itemAmount,
}: Readonly<{
  item: Item;
  itemAmount: number;
}>) {
  return (
    <div>
      <SheetHeader className="flex flex-row items-center gap-2">
        {renderIcon(item.icon, 56, item.iconStyle)}
        <div className="mt-0 flex flex-col justify-center">
          <SheetTitle>{item.name}</SheetTitle>
          <SheetDescription>{item.description}</SheetDescription>
        </div>
      </SheetHeader>
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

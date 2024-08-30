import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import TableEntryDialogSellEntry from "@/features/camp/inventoryMenu/tableEntryDialogSellEntry";
import { formatCapitalCase, renderIcon } from "@/utils/formattingUtilities";
import { Backpack, CircleDollarSign } from "lucide-react";
import React from "react";

export default function TableEntryDialog({
  open,
  itemId,
  setOpen,
}: {
  open: boolean;
  itemId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (itemId === null) {
    return <></>;
  }

  const { character } = useCharacterEngineContext();
  let item = itemTable[itemId];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex min-h-96 w-[450px] flex-col justify-between">
        <div>
          <SheetHeader className="flex flex-row items-center gap-2">
            {renderIcon(item.icon, 56, item.iconStyle)}
            <div className="mt-0 flex flex-col justify-center">
              <SheetTitle>{item.name}</SheetTitle>
              <SheetDescription>{item.description}</SheetDescription>
            </div>
          </SheetHeader>
          <Separator className="my-6"></Separator>
          <div className="mb-8 flex w-full items-center">
            <Label className="font-normal text-muted-foreground">
              {formatCapitalCase(item.type)}
            </Label>
            <div className="mx-4 h-1 w-1 rounded-full bg-black"></div>
            <span className="flex items-center gap-1">
              <Label>{item.value}</Label>
              {renderIcon(CircleDollarSign, 16, {
                ...itemTable["gold"].iconStyle,
              })}
            </span>
            <div className="mx-4 h-1 w-1 rounded-full bg-black"></div>
            <span className="flex items-center gap-1">
              <Label>{character.inventory[itemId]}</Label>
              <Backpack size={16} strokeWidth={1}></Backpack>
            </span>
          </div>
        </div>
        <TableEntryDialogSellEntry
          item={item}
          amountInInventory={character.inventory[itemId]}
          setOpen={setOpen}
        ></TableEntryDialogSellEntry>
      </SheetContent>
      <SheetFooter></SheetFooter>
    </Sheet>
  );
}

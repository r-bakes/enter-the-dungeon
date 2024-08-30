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
import { ItemType } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import TableEntryDialogEquipment from "@/features/town/inventoryMenu/tableEntryDialogEquipment";
import TableEntryDialogHeader from "@/features/town/inventoryMenu/tableEntryDialogHeader";
import TableEntryDialogSellEntry from "@/features/town/inventoryMenu/tableEntryDialogSellEntry";
import { Equipment } from "@/types/items";
import React from "react";

export default function TableEntryDialog({
  open,
  itemId,
  setOpen,
}: Readonly<{
  open: boolean;
  itemId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
  const { character } = useCharacterEngineContext();

  if (itemId === null) {
    return <></>;
  }
  let item = itemTable[itemId];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex min-h-96 w-[450px] flex-col justify-between">
        <TableEntryDialogHeader
          item={item}
          itemAmount={character.inventory[itemId]}
        ></TableEntryDialogHeader>
        {item.type === ItemType.EQUIPEMENT ? (
          <TableEntryDialogEquipment
            item={item as Equipment}
            setOpen={setOpen}
          ></TableEntryDialogEquipment>
        ) : null}
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

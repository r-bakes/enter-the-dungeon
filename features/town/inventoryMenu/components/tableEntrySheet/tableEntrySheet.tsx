import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { ItemId, ItemType } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import TableEntrySheetEquipment from "@/features/town/inventoryMenu/components/tableEntrySheet/tableEntrySheetEquipment";
import TableEntrySheetHeader from "@/features/town/inventoryMenu/components/tableEntrySheet/tableEntrySheetHeader";
import TableEntryDialogSellEntry from "@/features/town/inventoryMenu/components/tableEntrySheet/tableEntrySheetSellEntry";
import { Equipment } from "@/types/items";
import React from "react";

export default function TableEntrySheet({
  open,
  itemId,
  setOpen,
}: Readonly<{
  open: boolean;
  itemId: ItemId | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
  const { character } = useCharacterEngineContext();

  if (itemId === null) {
    return <></>;
  }
  let item = itemTable[itemId];
  let itemAmount = character.inventory[itemId];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex min-h-96 w-[450px] flex-col justify-between">
        <TableEntrySheetHeader
          item={item}
          itemAmount={itemAmount}
        ></TableEntrySheetHeader>
        {item.type === ItemType.EQUIPMENT ? (
          <TableEntrySheetEquipment
            item={item as Equipment}
            setOpen={setOpen}
          ></TableEntrySheetEquipment>
        ) : null}
        <TableEntryDialogSellEntry
          item={item}
          amountInInventory={itemAmount}
          setOpen={setOpen}
        ></TableEntryDialogSellEntry>
      </SheetContent>
      <SheetFooter></SheetFooter>
    </Sheet>
  );
}

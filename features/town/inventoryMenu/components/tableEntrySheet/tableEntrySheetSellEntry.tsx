import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { itemTable } from "@/data/items/items";
import { Item } from "@/types/items";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import { CircleDollarSign, Minus, Plus } from "lucide-react";
import React from "react";
import useSellItem from "../../hooks/useSellItem";

export default function TableEntrySheetSellEntry({
  item,
  amountInInventory,
  setOpen,
}: Readonly<{
  item: Item;
  amountInInventory: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
  const [amountSelected, setAmountSelected] = React.useState(1);
  const sellItem = useSellItem();
  const sell = () => {
    sellItem(item.id, amountSelected);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-1">
      <Separator className="my-6"></Separator>
      <Card>
        <CardHeader className="flex h-full flex-row items-center justify-between p-2">
          <span className="flex h-full items-center gap-1">
            <Label className="w-8 text-xs font-normal text-muted-foreground">
              Sell
            </Label>
            <Label className="items-center text-lg">{amountSelected}</Label>
          </span>
          <div className="flex flex-row gap-1">
            <Minus size={22} strokeWidth={1}></Minus>
            {renderIcon(item.icon, 22, item.iconStyle)}
          </div>
        </CardHeader>
      </Card>
      <Card className="mb-2">
        <CardHeader className="flex h-full flex-row items-center justify-between p-2">
          <span className="flex h-full items-center gap-1">
            <Label className="w-8 text-xs font-normal text-muted-foreground">
              For
            </Label>
            <Label className="items-center text-lg text-green-500">
              {amountSelected * item.value}
            </Label>
          </span>
          <div className="flex flex-row gap-1">
            <Plus size={22} strokeWidth={1}></Plus>
            {renderIcon(CircleDollarSign, 22, {
              ...itemTable.GOLD.iconStyle,
            })}
          </div>
        </CardHeader>
      </Card>
      <div className="mb-2 flex w-full flex-row">
        <Button
          size="sm"
          className="w-1/3 text-xs"
          onClick={() => setAmountSelected(1)}
        >
          One
        </Button>
        <Button
          size="sm"
          className="w-1/3 text-xs"
          onClick={() => setAmountSelected(Math.ceil(amountInInventory / 2))}
        >
          Half
        </Button>
        <Button
          size="sm"
          className="w-1/3 text-xs"
          onClick={() => setAmountSelected(amountInInventory)}
        >
          All
        </Button>
      </div>
      <Slider
        value={[amountSelected]}
        onValueChange={(value) => setAmountSelected(value[0])}
        max={amountInInventory}
        min={1}
        step={1}
      ></Slider>
      <div className="mt-6">
        <Button
          size="sm"
          className="w-full text-xs"
          variant={"destructive"}
          onClick={() => sell()}
        >
          Sell
        </Button>
      </div>
    </div>
  );
}

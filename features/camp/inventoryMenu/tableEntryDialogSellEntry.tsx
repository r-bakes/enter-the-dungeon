import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Item } from "@/types/items";
import { renderIcon } from "@/utils/formattingUtilities";
import { CircleDollarSign, Minus, Plus } from "lucide-react";
import React from "react";

export default function TableEntryDialogSellEntry({
  item,
  amountInInventory,
  setOpen,
}: {
  item: Item;
  amountInInventory: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [amountSelected, setAmountSelected] = React.useState(1);
  const { sellItem } = useCharacterEngineContext();

  const sell = () => {
    sellItem(item.id, amountSelected);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-1">
      <Card>
        <CardHeader className="flex h-full flex-row items-center justify-between p-2">
          <span className="flex h-full items-center gap-1">
            <Label className="w-8 text-xs font-normal text-muted-foreground">
              Sell
            </Label>
            <Label className="items-center text-lg">{amountSelected}</Label>
          </span>
          <div className="flex flex-row">
            <Minus size={18}></Minus>
            {renderIcon(item.icon, 18, item.iconStyle)}
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
          <div className="flex flex-row">
            <Plus size={18}></Plus>
            {renderIcon(CircleDollarSign, 18, {
              ...itemTable["gold"].iconStyle,
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

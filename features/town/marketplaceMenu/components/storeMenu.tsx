import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";
import {
  formatLargeQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { Item } from "@/types/items";
import clsx from "clsx";
import { Backpack, CircleDollarSign, Minus, Plus } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export default function StoreMenu({ items }: { items: Item[] }) {
  const { character } = useCharacterEngineContext();
  const { removeItem, addItem } = useInventoryActions();

  const [amountSelected, setAmountSelected] = React.useState(1);

  const canAfford = (item: Item, overideAmountSelected?: number): boolean => {
    const money = character.inventory[ItemId.GOLD];
    const totalCost = item.value * amountSelected;

    return totalCost <= money;
  };
  const buy = (item: Item): void => {
    removeItem(ItemId.GOLD, item.value * amountSelected);
    addItem(item.id, amountSelected);
    toast.success(
      `Purchased ${formatLargeQuantity(amountSelected)} ${item.name}(s).`,
      { position: "top-center" },
    );
  };

  return (
    <div className="flex h-full w-full flex-col gap-2">
      {items.map((item) => (
        <Card
          key={item.id}
          className={"flex h-min w-full flex-row items-center justify-between"}
        >
          <CardHeader className="flex flex-row gap-3">
            {renderIcon(item.icon, 44, item.iconStyle)}
            <div className="flex flex-col gap-1">
              <CardTitle className="text-base">{item.name}</CardTitle>
              <CardDescription className="text-xs">
                {item.description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardHeader className="flex flex-row items-center gap-12">
            <Card
              className={clsx(
                "flex flex-row items-center gap-3 px-4 py-2",
                !canAfford(item, 1) ? "border-red-300" : "",
              )}
            >
              {renderIcon(itemTable.GOLD.icon, 32, itemTable.GOLD.iconStyle)}
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1">
                  <CardTitle className="text-xs">
                    {formatLargeQuantity(item.value)}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {itemTable.GOLD.name.toLowerCase()}
                  </CardDescription>
                </div>
                <div className="flex w-full items-center justify-end">
                  <CardDescription className="text-muted-foreground mr-1 text-xs font-normal">
                    ({formatLargeQuantity(character.inventory[ItemId.GOLD])})
                  </CardDescription>
                  <Backpack size={14} strokeWidth={1}></Backpack>
                </div>
              </div>
            </Card>
            <Dialog onOpenChange={() => setAmountSelected(1)}>
              <DialogTrigger asChild>
                <Button disabled={!canAfford(item, 1)}>Buy</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Buy</DialogTitle>
                <DialogDescription>how much?</DialogDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {renderIcon(CircleDollarSign, 16, {
                      ...itemTable.GOLD.iconStyle,
                    })}
                    <Label className="font-light">
                      {formatLargeQuantity(item.value)}
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      {renderIcon(CircleDollarSign, 16, {
                        ...itemTable.GOLD.iconStyle,
                      })}
                      <Label className="font-light">
                        {formatLargeQuantity(character.inventory.GOLD)}
                      </Label>
                      <Backpack size={16} strokeWidth={1}></Backpack>
                    </div>
                    <div className="mx-6 h-1 w-1 rounded-full bg-black"></div>
                    <div className="flex items-center gap-2">
                      {renderIcon(item.icon, 16, {
                        ...item.iconStyle,
                      })}
                      <Label className="font-light">
                        {formatLargeQuantity(character.inventory[item.id] || 0)}
                      </Label>
                      <Backpack size={16} strokeWidth={1}></Backpack>
                    </div>
                  </div>
                </div>
                <Separator className="my-2"></Separator>
                <div className="flex flex-col gap-1">
                  <Card>
                    <CardHeader className="flex h-full flex-row items-center justify-between p-2">
                      <span className="flex h-full items-center gap-1">
                        <Label className="text-muted-foreground w-8 text-xs font-normal">
                          Buy
                        </Label>
                        <Label className="text-lg">
                          {formatLargeQuantity(amountSelected)}
                        </Label>
                        <Label className="text-muted-foreground ml-2 text-xs font-normal">
                          {item.name.toLowerCase()}(s)
                        </Label>
                      </span>
                      <div className="flex flex-row gap-1">
                        <Plus size={22} strokeWidth={1}></Plus>
                        {renderIcon(item.icon, 22, item.iconStyle)}
                      </div>
                    </CardHeader>
                  </Card>
                  <Card className="mb-2">
                    <CardHeader className="flex h-full flex-row items-center justify-between p-2">
                      <span className="flex h-full items-center gap-1">
                        <Label className="text-muted-foreground w-8 text-xs font-normal">
                          For
                        </Label>
                        <Label className="items-center text-lg">
                          {formatLargeQuantity(amountSelected * item.value)}
                        </Label>
                        <Label className="text-muted-foreground ml-2 text-xs font-normal">
                          gold
                        </Label>
                      </span>
                      <div className="flex flex-row gap-1">
                        <Minus size={22} strokeWidth={1}></Minus>
                        {renderIcon(CircleDollarSign, 22, {
                          ...itemTable.GOLD.iconStyle,
                        })}
                      </div>
                    </CardHeader>
                  </Card>
                  <div className="mb-2 flex w-full flex-row">
                    <Button
                      size="sm"
                      className="grow text-xs"
                      onClick={() => setAmountSelected(1)}
                    >
                      1
                    </Button>
                    <Button
                      size="sm"
                      className="grow text-xs"
                      onClick={() => setAmountSelected(10)}
                    >
                      10
                    </Button>
                    <Button
                      size="sm"
                      className="grow text-xs"
                      onClick={() => setAmountSelected(100)}
                    >
                      100
                    </Button>
                    <Button
                      size="sm"
                      className="grow text-xs"
                      onClick={() => setAmountSelected(1_000)}
                    >
                      1,000
                    </Button>
                    <Button
                      size="sm"
                      className="grow text-xs"
                      onClick={() => setAmountSelected(10_000)}
                    >
                      10,000
                    </Button>
                    <Button
                      size="sm"
                      className="grow text-xs"
                      onClick={() => setAmountSelected(100_000)}
                    >
                      100,000
                    </Button>
                    <Button
                      size="sm"
                      className="grow text-xs"
                      onClick={() => setAmountSelected(100_000_000)}
                    >
                      100,000,000
                    </Button>
                  </div>
                  <div className="mt-6">
                    <DialogClose asChild>
                      <Button
                        disabled={!canAfford(item)}
                        className="w-full"
                        onClick={() => buy(item)}
                      >
                        Buy
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

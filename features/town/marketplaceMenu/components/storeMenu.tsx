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
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";
import {
  formatLargeQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { Item } from "@/types/items";
import { Backpack } from "lucide-react";

export default function StoreMenu({ items }: { items: Item[] }) {
  const { character } = useCharacterEngineContext();
  const { removeItem, addItem } = useInventoryActions();

  return (
    <div className="flex h-full w-full">
      {items.map((item) => (
        <Card
          key={item.id}
          className="flex h-min w-full flex-row items-center justify-between"
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
            <Card className="flex flex-row items-center gap-3 px-4 py-2">
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
            <Dialog>
              <DialogTrigger>
                <Button>Buy</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Buy</DialogTitle>
                <DialogDescription>how much?</DialogDescription>
              </DialogContent>
            </Dialog>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

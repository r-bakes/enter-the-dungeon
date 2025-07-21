import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import {
  formatCapitalCase,
  formatLargeQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { Backpack } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Upgrade } from "@/types/upgrades";
import { ItemId } from "@/data/items/enums";
import { formatModifier } from "../../modifiers/utils/modifier";
import useInventoryActions from "@/features/common/inventory/hooks/useInventoryActions";
import useUpgradeActions from "../../upgrades/hooks/useUpgradeActions";
import { toast } from "sonner";

export default function UpgradesStoreMenu({
  upgrades,
}: Readonly<{
  upgrades: Upgrade[];
}>) {
  const { character } = useCharacterEngineContext();
  const { addUpgrade } = useUpgradeActions();
  const { removeItem } = useInventoryActions();

  const buy = (upgrade: Upgrade): void => {
    Object.entries(upgrade.requiresItems).forEach(([itemId, amount]) =>
      removeItem(itemId as ItemId, amount),
    );

    addUpgrade(upgrade.id);

    toast.success(`Purchased the '${upgrade.name}' upgrade.`, {
      position: "top-center",
    });
  };

  const canPurchase = (upgrade: Upgrade): boolean => {
    for (const [itemId, amount] of Object.entries(upgrade.requiresItems)) {
      if (!haveEnough(itemId as ItemId, amount)) {
        return false;
      }
    }
    return true;
  };

  const haveEnough = (itemId: ItemId, amount: number): boolean => {
    return character.inventory[itemId] >= amount;
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {upgrades.map((upgrade) => (
        <Card
          className="mx-auto flex h-auto min-h-max w-full items-center p-3 lg:mx-0 lg:h-16 lg:px-4 lg:py-3"
          key={upgrade.id}
        >
          <CardHeader className="flex h-full w-full flex-col items-center gap-3 p-0 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="flex w-full items-center justify-center gap-2 lg:w-80 lg:shrink-0 lg:justify-start lg:gap-3">
              <div className="flex items-start gap-3">
                {renderIcon(upgrade.icon, 32, { ...upgrade.iconStyle })}
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 text-left lg:flex-none lg:text-left">
                  <CardTitle className="text-sm leading-tight break-words lg:text-sm line-clamp-2">{upgrade.name}</CardTitle>
                  <CardDescription className="p-0 text-xs leading-tight break-words line-clamp-2">
                    {upgrade.description}
                  </CardDescription>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:w-48 lg:shrink-0 lg:flex-col lg:items-end lg:gap-1">
              {Object.entries(upgrade.modifier.values).map(([type, value]) => (
                <div
                  key={type}
                  className="flex items-center gap-1 whitespace-nowrap"
                >
                  <Label className="text-xs font-medium">
                    {formatModifier(value, type)}
                  </Label>
                  <Label className="text-muted-foreground text-xs font-normal">
                    {formatCapitalCase(type)}
                  </Label>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-2 lg:w-auto lg:shrink-0 lg:flex-row lg:items-center lg:gap-12">
              <div className="flex flex-wrap justify-center gap-2 lg:flex-row">
                {Object.entries(upgrade.requiresItems).map(
                  ([itemId, quantity]) => {
                    let item = itemTable[itemId as ItemId];
                    let cardFormat = haveEnough(itemId as ItemId, quantity)
                      ? ""
                      : "border-red-300";
                    return (
                      <Card
                        key={itemId}
                        className={
                          "flex w-auto items-center gap-2 px-3 py-2 " +
                          cardFormat
                        }
                      >
                        {renderIcon(item.icon, 20, { ...item.iconStyle })}
                        <div className="flex items-center gap-1">
                          <CardTitle className="text-xs">
                            {formatLargeQuantity(quantity)}
                          </CardTitle>
                          <CardDescription className="text-xs">
                            {item.name.toLowerCase()}
                          </CardDescription>
                          <Label className="text-muted-foreground text-xs font-normal">
                            ({formatLargeQuantity(character.inventory[itemId as ItemId])})
                          </Label>
                          <Backpack size={12} strokeWidth={1}></Backpack>
                        </div>
                      </Card>
                    );
                  },
                )}
              </div>
              <Button
                onClick={() => buy(upgrade)}
                disabled={!canPurchase(upgrade)}
              >
                Buy
              </Button>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
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
    <div className="flex w-full flex-col gap-2 overflow-y-scroll">
      {upgrades.map((upgrade) => (
        <Card
          className="flex h-20 min-h-max w-full min-w-max items-center justify-between px-4 py-4"
          key={upgrade.id}
        >
          <div className="flex h-full min-w-max items-center gap-4">
            <div className="flex h-full w-60 items-center gap-4">
              {renderIcon(upgrade.icon, 44, { ...upgrade.iconStyle })}
              <div className="flex h-full min-w-max flex-col justify-center text-left">
                <CardTitle className="text-base">{upgrade.name}</CardTitle>
                <CardDescription className="p-0 text-left text-xs">
                  {upgrade.description}
                </CardDescription>
              </div>
            </div>
            <div className="mx-6 flex h-full max-w-[500px] gap-2 overflow-x-scroll py-2">
              {/* {upgrade.modifier.targets.map( */}
              {/*   (taskIds) => ( */}
              {/*     <SkillImpactedPopup */}
              {/*       key={skillId} */}
              {/*       skill={skillTable[skillId as SkillId]} */}
              {/*       taskIds={taskIds} */}
              {/*       upgrade={upgrade} */}
              {/*     ></SkillImpactedPopup> */}
              {/*   ), */}
              {/* )} */}
            </div>
            <div className="flex h-full flex-col items-start gap-1 px-6">
              {Object.entries(upgrade.modifier.values).map(([type, value]) => (
                <div
                  key={type}
                  className="flex h-full items-center justify-center gap-1"
                >
                  <Label className="text-xs">
                    {formatModifier(value, type)}
                  </Label>
                  <Label className="text-xs font-normal text-muted-foreground">
                    {formatCapitalCase(type)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-full flex-row items-center gap-12">
            <div className="flex flex-row gap-2">
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
                        "flex w-36 items-center justify-between gap-2 px-4 py-2 " +
                        cardFormat
                      }
                    >
                      {renderIcon(item.icon, 32, { ...item.iconStyle })}
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-1">
                          <CardDescription className="text-xs font-black text-foreground">
                            {formatLargeQuantity(quantity)}
                          </CardDescription>
                          <CardDescription className="text-xs">
                            {item.name.toLowerCase()}
                          </CardDescription>
                        </div>
                        <div className="flex w-full items-center justify-end">
                          <Label className="mr-1 text-xs font-normal text-muted-foreground">
                            (
                            {formatLargeQuantity(
                              character.inventory[itemId as ItemId],
                            )}
                            )
                          </Label>
                          <Backpack size={14} strokeWidth={1}></Backpack>
                        </div>
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
        </Card>
      ))}
    </div>
  );
}

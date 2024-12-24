import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { itemTable } from "@/data/items/items";
import { skillTable } from "@/data/skills/skills";
import { useTownEngineContext } from "@/engines/townEngineContext";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import {
  addUpgrade,
  removeItem,
} from "@/features/common/utils/characterStateUtilities";
import {
  formatCapitalCase,
  formatLargeQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { SkillImpactedPopup } from "../../common/components/skillImpactedPopup";
import { Backpack } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Upgrade } from "@/types/upgrades";
import { Character } from "@/types/character";
import { SkillModifierTable } from "@/types/modifiers";
import { ItemId } from "@/data/items/enums";
import { SkillId } from "@/data/skills/enums";
import { formatModifiers } from "../../modifiers/services/modifier";

export default function UpgradesStoreMenu({
  upgrades,
}: Readonly<{
  upgrades: Upgrade[];
}>) {
  const { character, setCharacter } = useCharacterEngineContext();
  const { modifierTable, setModifierTable } = useTownEngineContext();

  const buy = (
    upgrade: Upgrade,
    modifierTable: SkillModifierTable,
    character: Character,
  ): void => {
    Object.entries(upgrade.requiresItems).forEach(([itemId, amount]) =>
      removeItem(character.inventory, itemId as ItemId, amount),
    );

    addUpgrade(upgrade, modifierTable, character);

    setCharacter({ ...character });
    setModifierTable({ ...modifierTable });
  };

  const canPurchase = (upgrade: Upgrade, character: Character): boolean => {
    for (const [itemId, amount] of Object.entries(upgrade.requiresItems)) {
      if (!haveEnough(itemId as ItemId, amount, character)) {
        return false;
      }
    }
    return true;
  };

  const haveEnough = (
    itemId: ItemId,
    amount: number,
    character: Character,
  ): boolean => {
    return character.inventory[itemId] >= amount;
  };

  return (
    <div className="flex w-full flex-col gap-2 overflow-y-scroll">
      {upgrades.map((upgrade) => (
        <Card
          className="flex w-full min-w-max items-center justify-between px-4 py-2"
          key={upgrade.id}
        >
          <div className="flex h-full min-w-max items-center gap-2">
            <div className="flex h-full w-60 items-center gap-4">
              {renderIcon(upgrade.icon, 40, { ...upgrade.iconStyle })}
              <div className="flex h-full flex-col justify-center text-left">
                <CardTitle className="text-base">{upgrade.name}</CardTitle>
                <CardDescription className="p-0 text-left text-xs">
                  {upgrade.description}
                </CardDescription>
              </div>
            </div>
            <div className="mx-6 flex h-full max-w-[500px] gap-2 overflow-x-scroll py-2">
              {Object.entries(upgrade.modifier.targets).map(
                ([skillId, taskIds]) => (
                  <SkillImpactedPopup
                    key={skillId}
                    skill={skillTable[skillId as SkillId]}
                    taskIds={taskIds}
                    upgrade={upgrade}
                  ></SkillImpactedPopup>
                ),
              )}
            </div>
            <div className="flex h-full px-6">
              {Object.entries(upgrade.modifier.values).map(([type, value]) => (
                <div key={type} className="flex h-full flex-col justify-center">
                  <CardTitle className="text-base">
                    {formatModifiers(value, type)}
                  </CardTitle>
                  <CardDescription className="max-w-min p-0 text-center text-xs">
                    {formatCapitalCase(type)}
                  </CardDescription>
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-full flex-row items-center gap-12">
            <div className="flex flex-row gap-2">
              {Object.entries(upgrade.requiresItems).map(
                ([itemId, quantity]) => {
                  let item = itemTable[itemId as ItemId];
                  let cardFormat = haveEnough(
                    itemId as ItemId,
                    quantity,
                    character,
                  )
                    ? ""
                    : "border-red-300";
                  return (
                    <Card
                      key={itemId}
                      className={
                        "flex items-center justify-center gap-2 px-4 py-2 " +
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
                            {item.name}
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
              onClick={() => buy(upgrade, modifierTable, character)}
              disabled={!canPurchase(upgrade, character)}
            >
              Buy
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

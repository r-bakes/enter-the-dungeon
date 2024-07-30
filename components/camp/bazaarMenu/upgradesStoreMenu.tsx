import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Character } from "@/data/character/character";
import { renderIcon } from "@/data/gameObject";
import { itemTable } from "@/data/items/items";
import { formatModifiers } from "@/data/modifiers/skillModifiers";
import { SkillModifierTable, Upgrade } from "@/data/modifiers/types";
import { skillTable } from "@/data/skills/skills";
import { useCampEngineContext } from "@/engines/campEngineContext";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { addUpgrade, removeItem } from "@/engines/utils/charaterStateUtilities";
import {
  formatCapitalCase,
  formatQuantity,
} from "@/engines/utils/formattingUtilities";
import { SkillImpactedPopup } from "../common/skillImpactedPopup";

export default function UpgradesStoreMenu({
  upgrades,
}: {
  upgrades: Upgrade[];
}) {
  const { character, setCharacter } = useCharacterEngineContext();
  const { modifierTable, setModifierTable } = useCampEngineContext();

  const buy = (
    upgrade: Upgrade,
    modifierTable: SkillModifierTable,
    character: Character,
  ): void => {
    Object.entries(upgrade.requiresItems).forEach(([itemId, amount]) =>
      removeItem(character.inventory, itemId, amount),
    );

    addUpgrade(upgrade, modifierTable, character);

    setCharacter({ ...character });
    setModifierTable({ ...modifierTable });
  };

  const canPurchase = (upgrade: Upgrade, character: Character): boolean => {
    for (const [itemId, amount] of Object.entries(upgrade.requiresItems)) {
      if (
        !(character.inventory[itemId] && character.inventory[itemId] >= amount)
      ) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="flex w-full flex-col gap-2 overflow-y-scroll">
      {upgrades.map((upgrade) => (
        <Card
          className="flex w-full min-w-max items-center justify-between p-4"
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
            {Object.entries(upgrade.modifier.targets).map(
              ([skillId, taskIds]) => (
                <SkillImpactedPopup
                  skill={skillTable[skillId]}
                  taskIds={taskIds}
                  upgrade={upgrade}
                ></SkillImpactedPopup>
              ),
            )}
          </div>
          <div className="flex h-full flex-row items-center gap-12">
            <div className="flex h-full flex-row gap-2">
              {Object.entries(upgrade.requiresItems).map(
                ([itemId, quantity]) => {
                  let item = itemTable[itemId];
                  return (
                    <Card className="flex h-full flex-row justify-center gap-2 px-4 py-2">
                      {renderIcon(item.icon, 32, { ...item.iconStyle })}
                      <div className="flex flex-col">
                        <CardDescription className="text-xs font-black text-foreground">
                          {formatQuantity(quantity)}
                        </CardDescription>
                        <CardDescription className="text-xs">
                          {item.name}
                        </CardDescription>
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

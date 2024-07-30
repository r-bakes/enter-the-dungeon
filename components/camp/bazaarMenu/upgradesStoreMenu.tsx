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
              <div className="flex h-full flex-col justify-center">
                <CardTitle className="text-base">{upgrade.name}</CardTitle>
                <CardDescription className="p-0 text-left text-xs">
                  {upgrade.description}
                </CardDescription>
              </div>
            </div>
            {Object.entries(upgrade.modifier.targets).map(
              ([skillId, taskIds]) => {
                let skill = skillTable[skillId];

                return (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Card className="flex h-full p-0">
                        <Button
                          variant="ghost"
                          className="flex h-full flex-row gap-2 px-4 py-2"
                        >
                          {renderIcon(skill.icon, 32, { ...skill.iconStyle })}
                          <div className="flex h-full flex-col text-left">
                            <CardDescription className="text-xs font-black">
                              {skill.name}
                            </CardDescription>
                            <CardDescription className="text-xs">
                              impacted
                            </CardDescription>
                          </div>
                        </Button>
                      </Card>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="flex h-full w-full flex-col gap-4">
                        <div className="flex h-full w-full flex-col gap-2">
                          <Label className="text-xs font-normal text-muted-foreground">
                            Production Modifiers
                          </Label>
                          <div className="flex flex-col">
                            {Object.entries(upgrade.modifier.values).map(
                              ([type, value]) => {
                                return (
                                  <Card className="flex flex-row items-center justify-center gap-1 p-2">
                                    <Label className="text-xs font-medium">
                                      {formatModifiers(value, type)}
                                    </Label>
                                    <Label className="text-xs font-normal text-muted-foreground">
                                      {formatCapitalCase(type)}
                                    </Label>
                                  </Card>
                                );
                              },
                            )}
                          </div>
                        </div>
                        <div className="flex h-full w-full flex-col gap-2">
                          <Label className="text-xs font-normal text-muted-foreground">
                            Tasks Impacted
                          </Label>
                          <div className="flex flex-col gap-1 overflow-y-scroll">
                            {taskIds.length <
                            Object.keys(skill.tasks).length ? (
                              taskIds.map((taskId) => {
                                let task = skill.tasks[taskId];
                                return (
                                  <Card className="flex flex-row items-center gap-2 p-2">
                                    {renderIcon(task.icon, 24, task.iconStyle)}
                                    <Label className="text-xs font-normal text-muted-foreground">
                                      {formatCapitalCase(task.name)}
                                    </Label>
                                  </Card>
                                );
                              })
                            ) : (
                              <div className="w-full justify-center text-center">
                                <Label>All tasks impacted</Label>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              },
            )}
          </div>
          <div className="flex h-full flex-row items-center gap-12">
            <div className="flex h-full flex-row gap-2">
              {Object.entries(upgrade.requiresItems).map(
                ([itemId, quantity]) => {
                  let item = itemTable[itemId];
                  return (
                    <Card className="flex h-full flex-row justify-center gap-1 px-4 py-2">
                      {renderIcon(item.icon, 32, { ...item.iconStyle })}
                      <div className="flex flex-col">
                        <CardDescription className="text-xs font-black">
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

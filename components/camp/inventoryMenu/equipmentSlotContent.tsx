import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Equipment } from "@/data/items/types";
import { Slot } from "@/data/character/character";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { renderIcon } from "@/data/gameObject";

export default function EquipmentSlotContent({
  item,
  slot,
}: {
  item: Equipment;
  slot: Slot;
}) {
  let { unequip } = useCharacterEngineContext();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="h-14 w-14">
          <Button
            className={"flex h-full w-full flex-col rounded-none p-2"}
            variant="ghost"
          >
            {renderIcon(item.icon, 48, {
              ...item.iconStyle,
            })}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-1 flex h-min w-min flex-col">
        <div className="flex h-min w-max flex-col items-start gap-1 p-2 text-center">
          <div className="flex w-full space-x-2">
            <div className="flex h-full">
              {renderIcon(item.icon, 35, {
                ...item.iconStyle,
              })}
            </div>
            <div className="flex flex-col items-start text-left">
              <Label className="text-sm font-bold">{item.name}</Label>
              <Label className="text-xs font-light text-muted-foreground">
                {item.description}
              </Label>
            </div>
          </div>
          <div className="flex h-full w-full py-2">
            <div className="flex h-full w-full flex-col">
              {item.attackBonus > 0 ? (
                <div className="flex gap-1">
                  <Label className="text-xs">{item.attackBonus}</Label>
                  <Label className="text-xs font-light text-muted-foreground">
                    attack
                  </Label>
                </div>
              ) : (
                <></>
              )}
              {item.defenseBonus > 0 ? (
                <div className="flex gap-1">
                  <Label className="text-xs">{item.defenseBonus}</Label>
                  <Label className="text-xs font-light text-muted-foreground">
                    defense
                  </Label>
                </div>
              ) : (
                <></>
              )}
              {item.healthBonus > 0 ? (
                <div className="flex gap-1">
                  <Label className="text-xs">{item.healthBonus}</Label>
                  <Label className="text-xs font-light text-muted-foreground">
                    health
                  </Label>
                </div>
              ) : (
                <></>
              )}
              <Button
                onClick={() => unequip(slot)}
                className="mt-4 h-6 text-xs"
              >
                Unequip
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Equipment } from "@/game/data/items/items";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LoadoutSlots } from "@/game/data/character/Loadout";
import { useEngineContext } from "@/game/engine/EngineContext";

export default function EquipmentSlotContent({
  item,
  slot,
  rounded,
}: {
  item: Equipment;
  slot: LoadoutSlots;
  rounded?:
    | "rounded-tl-md"
    | "rounded-br-md"
    | "rounded-tr-md"
    | "rounded-bl-md";
}) {
  let { unequip } = useEngineContext();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-14 h-14">
          <Button
            className={"flex flex-col w-full h-full p-2 rounded-none " + rounded}
            variant="ghost"
          >
            <item.icon size={56} strokeWidth={1} className="p-1"></item.icon>
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-1 flex flex-col h-min w-min">
        <div className="flex flex-col items-start p-2 h-min text-center rounded-md space-y-1 w-max bg-white">
          <div className="flex w-full space-x-2">
            <div className="flex h-full">
              <item.icon size={35} strokeWidth={1}></item.icon>
            </div>
            <div className="flex flex-col items-start text-left">
              <Label className="text-sm font-bold">{item.name}</Label>
              <Label className="text-xs text-muted-foreground font-light">
                {item.description}
              </Label>
            </div>
          </div>
          <div className="flex py-2 w-full h-full">
            <div className="flex flex-col w-full h-full">
              {item.attackBonus > 0 ? (
                <div className="flex justify-between">
                  <Label className="text-xs">{item.attackBonus}</Label>
                  <Label className="text-xs font-light text-muted-foreground">
                    attack
                  </Label>
                </div>
              ) : (
                <></>
              )}
              {item.defenseBonus > 0 ? (
                <div className="flex justify-between">
                  <Label className="text-xs">{item.defenseBonus}</Label>
                  <Label className="text-xs font-light text-muted-foreground">
                    defense
                  </Label>
                </div>
              ) : (
                <></>
              )}
              {item.healthBonus > 0 ? (
                <div className="flex justify-between">
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
                className="text-xs rounded-l-sm rounded-r-none mt-4 h-6"
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

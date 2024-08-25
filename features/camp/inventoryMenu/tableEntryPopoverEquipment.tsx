import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slot } from "@/data/character/character";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Equipment } from "@/types/items";

export default function TableEntryPopoverEquipment({
  item,
}: Readonly<{ item: Equipment }>) {
  const { equipItem: equip } = useCharacterEngineContext();
  return (
    <div className="flex h-full w-full flex-col">
      {item.attackBonus > 0 ? (
        <div className="flex justify-between">
          <Label className="text-xs">{item.attackBonus}</Label>
          <Label className="text-xs font-normal text-muted-foreground">
            attack
          </Label>
        </div>
      ) : (
        <></>
      )}
      {item.defenseBonus > 0 ? (
        <div className="flex justify-between">
          <Label className="text-xs">{item.defenseBonus}</Label>
          <Label className="text-xs font-normal text-muted-foreground">
            defense
          </Label>
        </div>
      ) : (
        <></>
      )}
      {item.healthBonus > 0 ? (
        <div className="flex justify-between">
          <Label className="text-xs">{item.healthBonus}</Label>
          <Label className="text-xs font-normal text-muted-foreground">
            health
          </Label>
        </div>
      ) : (
        <></>
      )}
      {item.slots.includes(Slot.LEFTHAND) &&
      item.slots.includes(Slot.RIGHTHAND) ? (
        <div className="mt-4 flex w-full items-center">
          <Button
            onClick={() => equip(item.id, Slot.LEFTHAND)}
            className="h-6 text-xs"
          >
            Equip - L
          </Button>
          <Button
            onClick={() => equip(item.id, Slot.RIGHTHAND)}
            className="h-6 text-xs"
          >
            Equip - R
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => equip(item.id, item.slots[0])}
          className="mt-4 h-6 text-xs"
        >
          Equip
        </Button>
      )}
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Equipment } from "@/data/items/types";
import { Slot } from "@/data/character/character";
import { useCampEngineContext } from "@/engine/campEngineContext";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";

export default function ItemSlotEquipment({ item }: { item: Equipment }) {
  const { equipItem: equip } = useCharacterEngineContext();
  return (
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
      {item.slots.includes(Slot.LEFTHAND) && item.slots.includes(Slot.RIGHTHAND) ?
        <div className="flex mt-4 w-full items-center ">
          <Button onClick={() => equip(item.id, Slot.LEFTHAND)} className="text-xs rounded-l-sm rounded-r-none h-6">Equip - L</Button>
          <Button onClick={() => equip(item.id, Slot.RIGHTHAND)} className="text-xs rounded-r-sm rounded-l-none h-6">Equip - R</Button>
        </div> :
          <Button onClick={() => equip(item.id, item.slots[0])} className="text-xs rounded-sm mt-4 h-6">Equip</Button>
      }
    </div>
  );
}

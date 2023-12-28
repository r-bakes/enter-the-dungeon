import { Label } from "@/components/ui/label";
import { Equipment } from "@/game/data/items/items";

export default function ItemSlotEquipment({ item }: { item: Equipment }) {
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
    </div>
  );
}

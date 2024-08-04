import EquipmentSlotContent from "./equipmentSlotContent";
import { Label } from "@/components/ui/label";
import { itemTable } from "@/data/items/items";
import { Slot } from "@/data/character/character";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Equipment } from "@/types/items";

export default function EquipmentSlot({
  slot,
  slotName,
}: Readonly<{
  slot: Slot;
  slotName: string;
}>) {
  const { character } = useCharacterEngineContext();

  return (
    <div className={"h-14 w-14 border text-center"}>
      {character.loadout[slot] != null ? (
        <EquipmentSlotContent
          item={itemTable[character.loadout[slot] as string] as Equipment}
          slot={slot}
        ></EquipmentSlotContent>
      ) : (
        <Label className="text-xs font-light text-muted-foreground">
          {slotName}
        </Label>
      )}
    </div>
  );
}

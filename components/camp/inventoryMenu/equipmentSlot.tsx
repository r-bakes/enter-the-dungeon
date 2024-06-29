import { useCampEngineContext } from "@/engine/campEngineContext";
import EquipmentSlotContent from "./equipmentSlotContent";
import { Label } from "@/components/ui/label";
import { itemTable } from "@/data/items/items";
import { Slot } from "@/data/character/character";
import { Equipment } from "@/data/items/types";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";

export default function EquipmentSlot({
  slot,
  slotName,
  rounded,
}: {
  slot: Slot;
  slotName: string;
  rounded?:
    | "rounded-tl-md"
    | "rounded-br-md"
    | "rounded-tr-md"
    | "rounded-bl-md";
}) {
  const { character } = useCharacterEngineContext();

  return (
    <div className={"h-14 w-14 border text-center " + rounded}>
      {character.loadout[slot] != null ? (
        <EquipmentSlotContent
          item={itemTable[character.loadout[slot] as string] as Equipment}
          slot={slot}
          rounded={rounded}
        ></EquipmentSlotContent>
      ) : (
        <Label className="text-muted-foreground text-xs font-light">
          {slotName}
        </Label>
      )}
    </div>
  );
}

import { useCampEngineContext } from "@/engine/CampEngineContext";
import EquipmentSlotContent from "./EquipmentSlotContent";
import { Label } from "@/components/ui/label";
import { ITEM_BY_ID } from "@/data/items/items";
import { Slot } from "@/data/character/Character";
import { Equipment } from "@/data/GameObject";
import { useCharacterEngineContext } from "@/engine/CharacterEngineContext";

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
          item={ITEM_BY_ID[character.loadout[slot] as string] as Equipment}
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

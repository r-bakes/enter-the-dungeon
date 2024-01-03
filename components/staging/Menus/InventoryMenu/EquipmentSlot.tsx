import { useEngineContext } from "@/game/engine/EngineContext";
import EquipmentSlotContent from "./EquipmentSlotContent";
import { Equipment, items } from "@/game/data/items/items";
import { Label } from "@/components/ui/label";
import { LoadoutSlots } from "@/game/data/character/Loadout";

export default function EquipmentSlot({
  slot,
  slotName,
  rounded,
}: {
  slot: LoadoutSlots;
  slotName: string;
  rounded?:
    | "rounded-tl-md"
    | "rounded-br-md"
    | "rounded-tr-md"
    | "rounded-bl-md";
}) {
  const { character } = useEngineContext();

  return (
    <div className={"h-14 w-14 border text-center " + rounded}>
      {character.loadout.loadout[slot] ? (
        <EquipmentSlotContent
          item={
            items.get(character.loadout.loadout[slot] as string) as Equipment
          }
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

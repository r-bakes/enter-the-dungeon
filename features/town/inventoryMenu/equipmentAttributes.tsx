import { Label } from "@/components/ui/label";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Heart, Shield, Sword } from "lucide-react";

export default function EquipmentAttributes() {
  const { getModifiers } = useCharacterEngineContext();
  let { atk, def, hp } = getModifiers();
  return (
    <div className="flex flex-col items-center">
      <Label className="mb-2 text-xs font-light text-muted-foreground">
        Attributes
      </Label>
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Sword size={28} strokeWidth={1}></Sword>
            <Label className="text-xl">{atk}</Label>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={28} strokeWidth={1}></Shield>
            <Label className="text-xl">{def}</Label>
          </div>
          <div className="flex items-center gap-2">
            <Heart size={28} strokeWidth={1}></Heart>
            <Label className="text-xl">{hp}</Label>
          </div>
        </div>
      </div>
    </div>
  );
}

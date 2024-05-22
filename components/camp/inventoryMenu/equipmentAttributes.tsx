import { Label } from "@/components/ui/label";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { Heart, Shield, Sword } from "lucide-react";

export default function EquipmentAttributes({}: {}) {
  const { getModifiers } = useCharacterEngineContext();
  let { atk, def, hp } = getModifiers();
  return (
    <div className="text-center">
      <Label className="text-muted-foreground font-light text-xs">
        Attributes
      </Label>
      <div className="flex w-full items-center justify-center space-x-2">
        <div className="w-10 h-10 items-center justify-center">
          <Sword size={40} className="p-1" strokeWidth={1}></Sword>
        </div>
        <Label className="text-lg w-10">{atk}</Label>
      </div>
      <div className="flex w-full items-center justify-center space-x-2">
        <div className="w-10 h-10 items-center justify-center">
          <Shield size={40} className="p-1" strokeWidth={1}></Shield>
        </div>
        <Label className="text-lg w-10">{def}</Label>
      </div>
      <div className="flex w-full items-center justify-center space-x-2">
        <div className="w-10 h-10 items-center justify-center">
          <Heart size={40} className="p-1" strokeWidth={1}></Heart>
        </div>
        <Label className="text-lg w-10">{hp}</Label>
      </div>
    </div>
  );
}

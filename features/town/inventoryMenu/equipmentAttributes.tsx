import { Label } from "@/components/ui/label";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Heart, Shield, Sword } from "lucide-react";

export default function EquipmentAttributes() {
  const { getModifiers } = useCharacterEngineContext();
  let { atk, def, hp } = getModifiers();
  return (
    <div className="text-center">
      <Label className="text-xs font-light text-muted-foreground">
        Attributes
      </Label>
      <div className="flex w-full items-center justify-center space-x-2">
        <div className="h-10 w-10 items-center justify-center">
          <Sword size={40} className="p-1" strokeWidth={1}></Sword>
        </div>
        <Label className="w-10 text-lg">{atk}</Label>
      </div>
      <div className="flex w-full items-center justify-center space-x-2">
        <div className="h-10 w-10 items-center justify-center">
          <Shield size={40} className="p-1" strokeWidth={1}></Shield>
        </div>
        <Label className="w-10 text-lg">{def}</Label>
      </div>
      <div className="flex w-full items-center justify-center space-x-2">
        <div className="h-10 w-10 items-center justify-center">
          <Heart size={40} className="p-1" strokeWidth={1}></Heart>
        </div>
        <Label className="w-10 text-lg">{hp}</Label>
      </div>
    </div>
  );
}

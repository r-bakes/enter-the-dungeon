import { Label } from "@/components/ui/label";
import { HardHat } from "lucide-react";


export default function EquipmentSlots({} : {}) {
    return (
        <div className="flex flex-col w-full border rounded-md space-y-4">
            <div className="flex w-full h-full">
                <div className="flex-col w-14 grow">
                    <div className="h-14 w-14 border rounded-tl-md text-center"><Label className="text-muted-foreground text-xs font-light">Head</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Neck</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Shoulder</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Cloak</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Chest</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Waist</Label></div>
                    <div className="h-14 w-14 border rounded-bl-md text-center"><Label className="text-muted-foreground text-xs font-light">Leg</Label></div>
                </div>
                <div className="flex-col w-full grow">

                </div>
                <div className="flex-col w-14 grow">
                    <div className="h-14 w-14 border rounded-tr-md text-center"><Label className="text-muted-foreground text-xs font-light">Wrist</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Glove</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Feet</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Ring</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Ring</Label></div>
                    <div className="h-14 w-14 border rounded-br-md text-center"><Label className="text-muted-foreground text-xs font-light">Trinket</Label></div>
                    <div className="h-14 w-14 border rounded-br-md text-center"><Label className="text-muted-foreground text-xs font-light">Trinket</Label></div>
                </div>
            </div>
            <div className="flex w-full justify-between">
                <div className="flex">
                    <div className="h-14 w-14 border rounded-bl-md text-center"><Label className="text-muted-foreground text-xs font-light">Left Hand</Label></div>
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Right Hand</Label></div>
                </div>
                <div className="flex">
                    <div className="h-14 w-14 border text-center"><Label className="text-muted-foreground text-xs font-light">Flask</Label></div>
                    <div className="h-14 w-14 border rounded-br-md text-center"><Label className="text-muted-foreground text-xs font-light">Flask</Label></div>
                </div>
            </div>
            
        </div>
    )
}
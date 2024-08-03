import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCampEngineContext } from "@/engines/campEngineContext";
import { Label } from "@radix-ui/react-label";
import { CircleDollarSign } from "lucide-react";
import { TabsContent } from "@radix-ui/react-tabs";
import { itemTable } from "@/data/items/items";
import { ItemType } from "@/data/items/types";
import EquipmentSlots from "./equipmentSlots";
import InventorySlots from "./inventorySlots";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import InventoryTable from "./inventoryTable";

export default function InventoryMenu({}: {}) {
  const { character } = useCharacterEngineContext();
  let inventory = Object.entries(character.inventory)
    .filter((item) => item[1] > 0)
    .map(([itemId, quantity]) => ({
      item: itemTable[itemId],
      quantity: quantity,
    }));

  return (
    <div className="flex h-full grow gap-6 px-8">
      <Card className="flex w-80 flex-col space-y-1">
        <CardHeader className="flex flex-col">
          <div className="rows flex items-center gap-2">
            <CircleDollarSign size={24} strokeWidth={1.5}></CircleDollarSign>
            <Label className="h-full text-xl font-light">
              {character.inventory.gold}
            </Label>
          </div>
        </CardHeader>
        <CardHeader>
          <Label className="text-sm text-muted-foreground">Equipment</Label>
          <EquipmentSlots></EquipmentSlots>
        </CardHeader>
      </Card>
      <InventoryTable></InventoryTable>
      <div className="w-0 border-4 shadow-sm"></div>
    </div>
  );
}

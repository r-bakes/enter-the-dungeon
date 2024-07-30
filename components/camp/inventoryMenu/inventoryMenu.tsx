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
      <Tabs defaultValue="equipment" className="flex h-full grow flex-col">
        <TabsList className="grid grow grid-cols-4">
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="supplies">Supplies</TabsTrigger>
          <TabsTrigger value="trade-goods">Trade Goods</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
        </TabsList>
        <TabsContent className="h-full" value="equipment">
          <InventorySlots
            inventory={inventory.filter(
              (data) => data.item.type == ItemType.EQUIPEMENT,
            )}
          ></InventorySlots>
        </TabsContent>
        <TabsContent className="h-full" value="supplies">
          <InventorySlots
            inventory={inventory.filter(
              (data) => data.item.type == ItemType.SUPPLIES,
            )}
          ></InventorySlots>
        </TabsContent>
        <TabsContent className="h-full" value="trade-goods">
          <InventorySlots
            inventory={inventory.filter(
              (data) => data.item.type == ItemType.TRADEGOODS,
            )}
          ></InventorySlots>
        </TabsContent>
        <TabsContent className="h-full" value="materials">
          <InventorySlots
            inventory={inventory.filter(
              (data) => data.item.type == ItemType.MATERIALS,
            )}
          ></InventorySlots>
        </TabsContent>
      </Tabs>
      <div className="w-0 border-4 shadow-sm"></div>
    </div>
  );
}

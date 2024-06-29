import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCampEngineContext } from "@/engine/campEngineContext";
import { Label } from "@radix-ui/react-label";
import { CircleDollarSign } from "lucide-react";
import { TabsContent } from "@radix-ui/react-tabs";
import { itemTable } from "@/data/items/items";
import { ItemType } from "@/data/items/types";
import EquipmentSlots from "./equipmentSlots";
import InventorySlots from "./inventorySlots";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";

export default function InventoryMenu({}: {}) {
  const { character } = useCharacterEngineContext();
  let inventory = Object.entries(character.inventory)
    .filter((item) => item[1] > 0)
    .map(([itemId, quantity]) => ({
      item: itemTable[itemId],
      quantity: quantity,
    }));

  return (
    <div className="flex px-8 h-full grow min-w-[800px] space-x-2">
      <Card className="flex flex-col w-80 space-y-1">
        <CardHeader className="flex flex-col">
          <div className="flex rows space-x-2 items-center">
            <CircleDollarSign size={24} strokeWidth={1.5}></CircleDollarSign>
            <Label className="text-xl h-full font-light">
              {character.inventory.gold}
            </Label>
          </div>
        </CardHeader>
        <CardHeader>
          <Label className="text-sm text-muted-foreground">Equipment</Label>
          <EquipmentSlots></EquipmentSlots>
        </CardHeader>
      </Card>
      <Tabs
        defaultValue="equipment"
        className="flex flex-col grow h-full space-y-2 "
      >
        <TabsList className="grid grow grid-cols-4">
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="supplies">Supplies</TabsTrigger>
          <TabsTrigger value="trade-goods">Trade Goods</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
        </TabsList>
        <TabsContent className="h-full" value="equipment">
          <InventorySlots
            inventory={inventory.filter(
              (data) => data.item.type == ItemType.EQUIPEMENT
            )}
          ></InventorySlots>
        </TabsContent>
        <TabsContent className="h-full" value="supplies">
          <InventorySlots
            inventory={inventory.filter(
              (data) => data.item.type == ItemType.SUPPLIES
            )}
          ></InventorySlots>
        </TabsContent>
        <TabsContent className="h-full" value="trade-goods">
          <InventorySlots
            inventory={inventory.filter(
              (data) => data.item.type == ItemType.TRADEGOODS
            )}
          ></InventorySlots>
        </TabsContent>
        <TabsContent className="h-full" value="materials">
          <InventorySlots
            inventory={inventory.filter(
              (data) => data.item.type == ItemType.MATERIALS
            )}
          ></InventorySlots>
        </TabsContent>
      </Tabs>
    </div>
  );
}

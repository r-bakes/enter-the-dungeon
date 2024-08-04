import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { inventory } from "@/data/menus/inventory";
import React from "react";
import { itemTable } from "@/data/items/items";
import { formatQuantity, renderIcon } from "@/utils/formattingUtilities";
import { Label } from "@/components/ui/label";
import EquipmentSlots from "@/features/camp/inventoryMenu/equipmentSlots";
import InventoryTable from "@/features/camp/inventoryMenu/inventoryTable";

export default function InventoryMenu() {
  const { character } = useCharacterEngineContext();

  return (
    <div className="flex h-full grow flex-col gap-6 px-8">
      <Card className="w-full items-center">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex h-full flex-row">
            {renderIcon(inventory.icon, 44, inventory.iconStyle)}
            <div className="flex flex-col pl-4">
              <CardTitle>{inventory.name}</CardTitle>
              <CardDescription>{inventory.description}</CardDescription>
            </div>
          </div>
          <div className="flex flex-col">
            <Card className="flex items-center gap-1 p-2">
              {renderIcon(CircleDollarSign, 24, {
                ...itemTable["gold"].iconStyle,
              })}
              <Label className="text-sxl h-full font-normal text-green-500">
                {formatQuantity(character.inventory.gold)}
              </Label>
            </Card>
          </div>
        </CardHeader>
      </Card>
      <div className="flex w-full grow gap-6">
        <Card className="flex w-80 flex-col space-y-1">
          <CardHeader>
            <Label className="text-sm text-muted-foreground">Equipment</Label>
            <EquipmentSlots></EquipmentSlots>
          </CardHeader>
        </Card>
        <InventoryTable></InventoryTable>
        <div className="w-0 border-4 shadow-sm"></div>
      </div>
    </div>
  );
}

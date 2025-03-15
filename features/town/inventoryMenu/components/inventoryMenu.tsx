import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleDollarSign, Ghost } from "lucide-react";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { inventory } from "@/data/menus/inventory";
import React from "react";
import { itemTable } from "@/data/items/items";
import {
  formatLargeQuantity,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { Label } from "@/components/ui/label";
import EquipmentSlots from "@/features/town/inventoryMenu/components/equipmentSlots";
import InventoryTable from "@/features/town/inventoryMenu/components/inventoryTable";

export default function InventoryMenu() {
  const { character } = useCharacterEngineContext();

  return (
    <div className="flex h-full grow flex-col gap-6 px-8">
      <Card className="w-full items-center">
        <CardHeader className="flex flex-row items-center">
          <div className="flex h-full flex-row">
            {renderIcon(inventory.icon, 44, inventory.iconStyle)}
            <div className="m-0 flex flex-col pl-4">
              <CardTitle>{inventory.name}</CardTitle>
              <CardDescription>{inventory.description}</CardDescription>
            </div>
          </div>
          <div className="flex flex-col"></div>
        </CardHeader>
      </Card>
      <div className="flex min-h-0 w-full grow gap-6">
        <Card className="flex w-72 shrink-0 flex-col gap-3 p-6">
          <div className="space-y-1">
            <Label className="text-muted-foreground text-xs font-normal">
              Currency
            </Label>
            <Card className="flex items-center gap-1 p-2">
              {renderIcon(CircleDollarSign, 24, {
                ...itemTable.GOLD.iconStyle,
              })}
              <Label className="font-normal text-green-500">
                {formatLargeQuantity(character.inventory.GOLD)}
              </Label>
              <Label className="text-muted-foreground text-xs font-normal">
                gold
              </Label>
            </Card>
            <Card className="flex items-center gap-1 p-2">
              {renderIcon(Ghost, 24, { strokeWidth: 1, fill: "none" })}
              <Label className="font-normal text-green-500">0</Label>
              <Label className="text-muted-foreground text-xs font-normal">
                souls
              </Label>
            </Card>
          </div>
          <div className="space-y-1">
            <Label className="text-muted-foreground text-xs font-normal">
              Equipment
            </Label>
            <EquipmentSlots></EquipmentSlots>
          </div>
        </Card>
        <InventoryTable></InventoryTable>
        <div className="w-0 border-4 shadow-xs"></div>
      </div>
    </div>
  );
}

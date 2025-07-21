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
    <div className="flex h-full w-full flex-col gap-4 px-4 lg:gap-6 lg:px-8">
      {/* Header Card */}
      <Card className="w-full items-center">
        <CardHeader className="flex flex-row items-center">
          <div className="lg:hidden">
            {renderIcon(inventory.icon, 32, inventory.iconStyle)}
          </div>
          <div className="hidden lg:block">
            {renderIcon(inventory.icon, 44, inventory.iconStyle)}
          </div>
          <div className="m-0 flex flex-col pl-3 lg:pl-4">
            <CardTitle className="text-sm lg:text-base">{inventory.name}</CardTitle>
            <CardDescription className="text-sm lg:text-sm">{inventory.description}</CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content */}
      <div className="flex h-full w-full flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="hidden w-0 border-4 shadow-xs lg:block"></div>
        
        {/* Sidebar - Currency and Equipment */}
        <div className="flex w-full flex-col gap-4 lg:w-80 lg:shrink-0">
          <Card className="flex flex-col gap-3 p-4 lg:p-6">
            <div className="space-y-2">
              <Label className="text-muted-foreground text-xs font-normal lg:text-sm">
                Currency
              </Label>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-1">
                <Card className="flex items-center gap-2 p-2">
                  {renderIcon(CircleDollarSign, 20, {
                    ...itemTable.GOLD.iconStyle,
                  })}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
                    <Label className="font-normal text-green-500 text-sm">
                      {formatLargeQuantity(character.inventory.GOLD)}
                    </Label>
                    <Label className="text-muted-foreground text-xs font-normal">
                      gold
                    </Label>
                  </div>
                </Card>
                <Card className="flex items-center gap-2 p-2">
                  {renderIcon(Ghost, 20, { strokeWidth: 1, fill: "none" })}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
                    <Label className="font-normal text-green-500 text-sm">0</Label>
                    <Label className="text-muted-foreground text-xs font-normal">
                      souls
                    </Label>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-muted-foreground text-xs font-normal lg:text-sm">
                Equipment
              </Label>
              <EquipmentSlots></EquipmentSlots>
            </div>
          </Card>
        </div>

        {/* Main Inventory Table */}
        <div className="flex w-full flex-1 lg:h-full lg:min-h-0 min-h-screen">
          <InventoryTable></InventoryTable>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Item } from "@/game/data/items/items";
import ItemSlot from "./ItemSlot";

export default function InventorySlots({
  inventory,
}: {
  inventory: { item: Item; quantity: number }[];
}) {
  return (
    <Card className="flex w-full h-full">
      <CardContent className="flex space-x-2 p-5 flex-wrap">
        {inventory.map((data) => (
          <ItemSlot
            item={data.item}
            quantity={data.quantity}
            key={data.item.id}
          ></ItemSlot>
        ))}
      </CardContent>
    </Card>
  );
}

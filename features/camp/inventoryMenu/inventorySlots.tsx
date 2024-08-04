import { Card, CardContent } from "@/components/ui/card";
import ItemSlot from "@/features/camp/inventoryMenu/itemSlot";
import { Item } from "@/types/items";

export default function InventorySlots({
  inventory,
}: Readonly<{
  inventory: { item: Item; quantity: number }[];
}>) {
  return (
    <Card className="flex h-full w-full">
      <CardContent className="flex flex-wrap space-x-2 p-5">
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

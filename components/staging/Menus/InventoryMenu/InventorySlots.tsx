import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover } from "@/components/ui/popover"
import { Item } from "@/game/data/items/items"
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Backpack } from "lucide-react"
export default function InventorySlots({
    inventory
} : {
    inventory: {item: Item, quantity: number}[]
}) {

    return (
        <Card className="flex w-full h-full">
            <CardContent className="flex space-x-2 p-5 flex-wrap">
                {inventory.map((data) => <ItemSlot item={data.item} quantity={data.quantity}></ItemSlot>)}
            </CardContent>
        </Card>
    )
}

function ItemSlot({item, quantity} : {item: Item, quantity: number}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="w-16 h-[50px] text-center">
                    <Button className="flex flex-col w-16 h-16 border rounded-md p-2" variant="ghost">
                            <item.icon size={48} strokeWidth={1}></item.icon>    
                    </Button>
                    <Label className="text-sm">{quantity}</Label>
                </div>
            </PopoverTrigger>
            <PopoverContent className="mt-1 flex flex-col h-min w-min">
                <div className="flex flex-col items-start p-4 h-min text-center rounded-md border space-y-1 w-max bg-white">
                    <div className="flex w-full space-x-2">
                        <div className="flex h-full">
                            <item.icon size={35} strokeWidth={1}></item.icon>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <Label className="text-sm font-bold">{formatItemName(item.name)}</Label>
                            <Label className="text-xs text-muted-foreground font-light">{item.description}</Label>
                            <div className="flex items-center justify-end mt-3 w-full space-x-1">
                                <Label className="text-xs">{quantity}</Label>
                                <Backpack size={20} strokeWidth={1}></Backpack>
                            </div>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

function formatItemName(name: string) {
    let words = name.split(" ")
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return words.join(" ")
}
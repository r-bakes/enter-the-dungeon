import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEngineContext } from "@/game/engine/EngineContext";
import { Label } from "@radix-ui/react-label";
import { CircleDollarSign } from "lucide-react"
import EquipmentSlots from "./EquipmentSlots";
import { TabsContent } from "@radix-ui/react-tabs";
import InventorySlots from "./InventorySlots";
import { items } from "@/game/data/items/items";
import { Item } from "@/game/data/items/items";


export default function InventoryMenu({} : {}) {
    const { character } = useEngineContext()
    let inventory = Object.entries(character.inventory.items).map(([itemId, quantity]) => ({item: items.get(itemId), quantity: quantity}))

    return ( 
        <div className="flex px-8 h-full grow min-w-[800px] space-x-2">
            <Card className="flex flex-col w-80 space-y-2">
                <CardHeader className="flex flex-col space-x-2 justify-start items-start text-left">
                    <Label className="text-sm text-muted-foreground">Gold</Label>
                    <div className="flex rows space-x-2 align-middle">
                        <CircleDollarSign size={24} strokeWidth={1.5}></CircleDollarSign>
                        <Label className="text-xl">{character.inventory.gold}</Label>
                    </div>
                </CardHeader>
                <CardHeader>
                    <Label className="text-sm text-muted-foreground">Equipment</Label>
                    <EquipmentSlots></EquipmentSlots>
                </CardHeader>
            </Card>
            <Tabs defaultValue="equipment" className="flex flex-col grow h-full space-y-2 ">
                <TabsList className="grid grow grid-cols-4">
                    <TabsTrigger value="equipment">Equipment</TabsTrigger>
                    <TabsTrigger value="supplies">Supplies</TabsTrigger>
                    <TabsTrigger value="trade-goods">Trade Goods</TabsTrigger>
                    <TabsTrigger value="materials">Materials</TabsTrigger>
                </TabsList>
                <TabsContent className="h-full" value="equipment">
                    <InventorySlots inventory={inventory.filter((data) => data.item.type == "equipment")}></InventorySlots>
                </TabsContent>
                <TabsContent className="h-full" value="supplies">
                    <InventorySlots inventory={inventory.filter((data) => data.item.type == "supply")}></InventorySlots>
                </TabsContent>
                <TabsContent className="h-full" value="trade-goods">
                    <InventorySlots inventory={inventory.filter((data) => data.item.type == "trade-good")}></InventorySlots>
                </TabsContent>
                <TabsContent className="h-full" value="materials">
                    <InventorySlots inventory={inventory.filter((data) => data.item.type == "material")}></InventorySlots>
                </TabsContent>
            </Tabs>
            
        </div>
    )
}
import { Slot } from "@/data/character/character";
import { Card } from "@/components/ui/card";
import EquipmentSlot from "@/features/town/inventoryMenu/equipmentSlot";
import EquipmentAttributes from "@/features/town/inventoryMenu/equipmentAttributes";

export default function EquipmentSlots() {
  return (
    <Card className="flex w-full flex-col gap-4 border">
      <div className="flex h-full w-full">
        <div className="w-14 grow flex-col">
          <EquipmentSlot slot={Slot.HEAD} slotName="Head"></EquipmentSlot>
          <EquipmentSlot slot={Slot.NECK} slotName="Neck"></EquipmentSlot>
          <EquipmentSlot
            slot={Slot.SHOULDER}
            slotName="Shoulder"
          ></EquipmentSlot>
          <EquipmentSlot slot={Slot.CLOAK} slotName="Cloak"></EquipmentSlot>
          <EquipmentSlot slot={Slot.CHEST} slotName="Chest"></EquipmentSlot>
          <EquipmentSlot slot={Slot.WAIST} slotName="Waist"></EquipmentSlot>
          <EquipmentSlot slot={Slot.LEG} slotName="Leg"></EquipmentSlot>
        </div>
        <div className="h-full w-full flex-col items-center justify-center pt-10">
          <EquipmentAttributes></EquipmentAttributes>
        </div>
        <div className="w-14 grow flex-col">
          <EquipmentSlot slot={Slot.WRIST} slotName="Wrist"></EquipmentSlot>
          <EquipmentSlot slot={Slot.GLOVE} slotName="Glove"></EquipmentSlot>
          <EquipmentSlot slot={Slot.FEET} slotName="Feet"></EquipmentSlot>
          <EquipmentSlot slot={Slot.RING1} slotName="Ring"></EquipmentSlot>
          <EquipmentSlot slot={Slot.RING2} slotName="Ring"></EquipmentSlot>
          <EquipmentSlot
            slot={Slot.TRINKET1}
            slotName="Trinket"
          ></EquipmentSlot>
          <EquipmentSlot
            slot={Slot.TRINKET2}
            slotName="Trinket"
          ></EquipmentSlot>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex">
          <EquipmentSlot
            slot={Slot.LEFTHAND}
            slotName="Left Hand"
          ></EquipmentSlot>
          <EquipmentSlot
            slot={Slot.RIGHTHAND}
            slotName="Right Hand"
          ></EquipmentSlot>
        </div>
        <div className="flex">
          <EquipmentSlot slot={Slot.FLASK1} slotName="Flask"></EquipmentSlot>
          <EquipmentSlot slot={Slot.FLASK2} slotName="Flask"></EquipmentSlot>
        </div>
      </div>
    </Card>
  );
}

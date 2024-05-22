import EquipmentSlot from "./EquipmentSlot";
import EquipmentAttributes from "./EquipmentAttributes";
import { Slot } from "@/data/character/Character";

export default function EquipmentSlots({}: {}) {
  return (
    <div className="flex flex-col w-full border rounded-md space-y-4">
      <div className="flex w-full h-full">
        <div className="flex-col w-14 grow">
          <EquipmentSlot
            slot={Slot.HEAD}
            slotName="Head"
            rounded="rounded-tl-md"
          ></EquipmentSlot>
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
        <div className="flex-col w-full h-full items-center justify-center pt-10">
          <EquipmentAttributes></EquipmentAttributes>
        </div>
        <div className="flex-col w-14 grow">
          <EquipmentSlot
            slot={Slot.WRIST}
            slotName="Wrist"
            rounded="rounded-tr-md"
          ></EquipmentSlot>
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
            rounded="rounded-bl-md"
          ></EquipmentSlot>
          <EquipmentSlot
            slot={Slot.RIGHTHAND}
            slotName="Right Hand"
          ></EquipmentSlot>
        </div>
        <div className="flex">
          <EquipmentSlot slot={Slot.FLASK1} slotName="Flask"></EquipmentSlot>
          <EquipmentSlot
            slot={Slot.FLASK2}
            slotName="Flask"
            rounded="rounded-br-md"
          ></EquipmentSlot>
        </div>
      </div>
    </div>
  );
}

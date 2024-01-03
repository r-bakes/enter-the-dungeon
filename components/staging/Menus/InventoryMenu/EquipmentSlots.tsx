import EquipmentSlot from "./EquipmentSlot";
import EquipmentAttributes from "./EquipmentAttributes";

export default function EquipmentSlots({}: {}) {

  return (
    <div className="flex flex-col w-full border rounded-md space-y-4">
      <div className="flex w-full h-full">
        <div className="flex-col w-14 grow">
          <EquipmentSlot
            slot="head"
            slotName="Head"
            rounded="rounded-tl-md"
          ></EquipmentSlot>
          <EquipmentSlot slot="neck" slotName="Neck"></EquipmentSlot>
          <EquipmentSlot slot="shoulder" slotName="Shoulder"></EquipmentSlot>
          <EquipmentSlot slot="cloak" slotName="Cloak"></EquipmentSlot>
          <EquipmentSlot slot="chest" slotName="Chest"></EquipmentSlot>
          <EquipmentSlot slot="waist" slotName="Waist"></EquipmentSlot>
          <EquipmentSlot slot="leg" slotName="Leg"></EquipmentSlot>
        </div>
        <div className="flex-col w-full h-full items-center justify-center pt-10">
          <EquipmentAttributes></EquipmentAttributes>
        </div>
        <div className="flex-col w-14 grow">
          <EquipmentSlot
            slot="wrist"
            slotName="Wrist"
            rounded="rounded-tr-md"
          ></EquipmentSlot>
          <EquipmentSlot slot="glove" slotName="Glove"></EquipmentSlot>
          <EquipmentSlot slot="feet" slotName="Feet"></EquipmentSlot>
          <EquipmentSlot slot="ring1" slotName="Ring"></EquipmentSlot>
          <EquipmentSlot slot="ring2" slotName="Ring"></EquipmentSlot>
          <EquipmentSlot slot="trinket1" slotName="Trinket"></EquipmentSlot>
          <EquipmentSlot slot="trinket2" slotName="Trinket"></EquipmentSlot>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex">
          <EquipmentSlot
            slot="leftHand"
            slotName="Left Hand"
            rounded="rounded-bl-md"
          ></EquipmentSlot>
          <EquipmentSlot slot="rightHand" slotName="Right Hand"></EquipmentSlot>
        </div>
        <div className="flex">
          <EquipmentSlot slot="flask1" slotName="Flask"></EquipmentSlot>
          <EquipmentSlot
            slot="flask2"
            slotName="Flask"
            rounded="rounded-br-md"
          ></EquipmentSlot>
        </div>
      </div>
    </div>
  );
}

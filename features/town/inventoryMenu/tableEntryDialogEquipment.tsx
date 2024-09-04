import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slot } from "@/data/character/character";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { Equipment } from "@/types/items";
import { formatCapitalCase, renderIcon } from "@/utils/formattingUtilities";
import { Heart, Shield, Sword, Zap } from "lucide-react";

export default function TableEntryDialogEquipment({
  item,
  setOpen,
}: Readonly<{
  item: Equipment;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
  const { equipItem } = useCharacterEngineContext();

  const equip = (itemId: string, slot: Slot) => {
    equipItem(itemId, slot);
    setOpen(false);
  };

  return (
    <div className="flex h-full w-full flex-col gap-1">
      <Card className="flex h-[195px] shrink-0 gap-6 p-4">
        <div className="flex flex-col gap-2">
          <Label className="mb-2 font-light text-muted-foreground">
            Attributes
          </Label>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Sword size={28} strokeWidth={1}></Sword>
              <Label className="text-xl">{item.attackBonus}</Label>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={28} strokeWidth={1}></Shield>
              <Label className="text-xl">{item.defenseBonus}</Label>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={28} strokeWidth={1}></Heart>
              <Label className="text-xl">{item.healthBonus}</Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="mb-2 font-light text-muted-foreground">Slot</Label>
          <div className="flex flex-col gap-2">
            {item.slots.map((slot) => (
              <Label key={slot} className="font-normal">
                {formatCapitalCase(slot)}
              </Label>
            ))}
          </div>
        </div>
        <div className="flex grow flex-col gap-2">
          <Label className="mb-2 font-light text-muted-foreground">Cards</Label>
          <div className="flex flex-col gap-1 overflow-y-scroll">
            {item.cards.length > 0 ? (
              item.cards.map((card) => (
                <Card className="flex grow justify-between p-2" key={card.id}>
                  <div className="flex items-center gap-2">
                    {renderIcon(card.icon, 22, card.iconStyle)}
                    <Label className="font-normal">{card.name}</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="font-normal text-muted-foreground">
                      {card.cost}
                    </Label>
                    <Zap size="16" strokeWidth={1}></Zap>
                  </div>
                </Card>
              ))
            ) : (
              <Label className="font-normal text-muted-foreground">None</Label>
            )}
          </div>
        </div>
      </Card>
      {item.slots.includes(Slot.LEFTHAND) &&
      item.slots.includes(Slot.RIGHTHAND) ? (
        <div className="mt-2 flex w-full items-center">
          <Button
            size="sm"
            onClick={() => equip(item.id, Slot.LEFTHAND)}
            className="w-1/2 text-xs"
          >
            Equip - L
          </Button>
          <Button
            size="sm"
            onClick={() => equip(item.id, Slot.RIGHTHAND)}
            className="w-1/2 text-xs"
          >
            Equip - R
          </Button>
        </div>
      ) : (
        <Button
          size="sm"
          onClick={() => equip(item.id, item.slots[0])}
          className="w-full text-xs"
        >
          Equip
        </Button>
      )}
    </div>
  );
}

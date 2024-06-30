import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CharacterCombatant } from "@/data/combatants/combatants";
import { itemTable } from "@/data/items/items";
import { Heart, Shield, Sword } from "lucide-react";
import StatBlock from "./combatantCard/statBlock";

export default function CharacterCombatantCard({
  combatant,
  isSelected,
  onClick,
}: {
  combatant: CharacterCombatant;
  isSelected: boolean;
  onClick: React.Dispatch<React.SetStateAction<any>>;
}) {
  let selectedStyle = isSelected ? "bg-accent" : "";
  let leftHand = combatant.loadout.leftHand
    ? itemTable[combatant.loadout.leftHand]
    : undefined;
  let rightHand = combatant.loadout.rightHand
    ? itemTable[combatant.loadout.rightHand]
    : undefined;

  return (
    <div className="flex flex-col text-center gap-1">
      <Label className="text-muted-foreground font-extralight">
        {combatant.name}
      </Label>
      <Card className={"flex w-44 h-52 justify-center" + selectedStyle}>
        <Button
          onClick={onClick}
          className="relative flex-col h-full w-full p-0"
          variant="ghost"
        >
          <CardHeader className="items-center justify-center p-0 h-3/5">
            <combatant.icon size={80}></combatant.icon>
          </CardHeader>
          {leftHand ? (
            <Card className="absolute shadow-md right-36">
              <CardHeader className="p-2">
                <leftHand.icon size={60} strokeWidth={1}></leftHand.icon>
              </CardHeader>
            </Card>
          ) : (
            <></>
          )}
          {rightHand ? (
            <Card className="absolute shadow-md left-36">
              <CardHeader className="p-2">
                <rightHand.icon size={60} strokeWidth={1}></rightHand.icon>
              </CardHeader>
            </Card>
          ) : (
            <></>
          )}
          <CardContent className="flex items-start justify-center gap-3 py-0 h-2/5">
            <StatBlock
              icon={Sword}
              baseValue={combatant.baseAtk}
              value={combatant.atk}
            ></StatBlock>
            <StatBlock
              icon={Shield}
              baseValue={combatant.baseDef}
              value={combatant.def}
            ></StatBlock>
            <StatBlock
              icon={Heart}
              baseValue={combatant.hp}
              value={0}
            ></StatBlock>
          </CardContent>
        </Button>
      </Card>
    </div>
  );
}

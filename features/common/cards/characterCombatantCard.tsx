import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { itemTable } from "@/data/items/items";
import { Heart, Shield, Sword } from "lucide-react";
import StatBlock from "./combatantCard/statBlock";
import { CharacterCombatant } from "@/types/combatants";
import { renderIcon } from "@/features/common/utils/formattingUtilities";

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
    <div className="flex flex-col gap-1 text-center">
      <Label className="font-extralight text-muted-foreground">
        {combatant.name}
      </Label>
      <Card className={"flex h-52 w-44 justify-center" + selectedStyle}>
        <Button
          onClick={onClick}
          className="relative h-full w-full flex-col p-0"
          variant="ghost"
        >
          <CardHeader className="h-3/5 items-center justify-center p-0">
            {renderIcon(combatant.icon, 80, {
              ...combatant.iconStyle,
            })}
          </CardHeader>
          {leftHand ? (
            <Card className="absolute right-36 shadow-md">
              <CardHeader className="p-2">
                {renderIcon(leftHand.icon, 80, {
                  ...leftHand.iconStyle,
                })}
              </CardHeader>
            </Card>
          ) : (
            <></>
          )}
          {rightHand ? (
            <Card className="absolute left-36 shadow-md">
              <CardHeader className="p-2">
                {renderIcon(rightHand.icon, 80, {
                  ...rightHand.iconStyle,
                })}
              </CardHeader>
            </Card>
          ) : (
            <></>
          )}
          <CardContent className="flex h-2/5 items-start justify-center gap-3 py-0">
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

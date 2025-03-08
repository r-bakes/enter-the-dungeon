import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { itemTable } from "@/data/items/items";
import { Heart, Shield, Sword } from "lucide-react";
import StatBlock from "../../expeditions/combatantCards/components/statBlock";
import { CharacterCombatant } from "@/types/combatants";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import { useCombatCardEngineContext } from "@/engines/combatCardEngineContext";
import { CombatCardTarget, CombatCardType } from "@/data/combatCards/enums";

export default function CharacterCombatantCard({
  combatant,
  isSelected,
  onClick,
}: {
  combatant: CharacterCombatant;
  isSelected: boolean;
  onClick: React.Dispatch<React.SetStateAction<any>>;
}) {
  let { selectedCard } = useCombatCardEngineContext();
  let selectedStyle = isSelected ? "bg-accent" : "";
  let leftHand = combatant.loadout.LEFT_HAND
    ? itemTable[combatant.loadout.LEFT_HAND]
    : undefined;
  let rightHand = combatant.loadout.RIGHT_HAND
    ? itemTable[combatant.loadout.RIGHT_HAND]
    : undefined;

  return (
    <div className="flex flex-col gap-1 text-center">
      <Label className="text-muted-foreground font-extralight">
        {combatant.name}
      </Label>
      <Card className={"flex h-62 w-48 " + selectedStyle}>
        <Button
          onClick={onClick}
          disabled={
            selectedCard?.target === CombatCardTarget.ENEMIES ? true : false
          }
          className="relative h-full w-full flex-col"
          variant="ghost"
        >
          <CardHeader className="items-center justify-center">
            {renderIcon(combatant.icon, 80, {
              ...combatant.iconStyle,
            })}
          </CardHeader>
          {leftHand ? (
            <Card className="absolute right-44 shadow-md">
              <CardHeader className="p-2">
                {renderIcon(leftHand.icon, 72, {
                  ...leftHand.iconStyle,
                })}
              </CardHeader>
            </Card>
          ) : (
            <></>
          )}
          {rightHand ? (
            <Card className="absolute left-44 shadow-md">
              <CardHeader className="p-2">
                {renderIcon(rightHand.icon, 72, {
                  ...rightHand.iconStyle,
                })}
              </CardHeader>
            </Card>
          ) : (
            <></>
          )}
          <CardContent className="flex w-full grow items-start justify-between">
            <StatBlock
              icon={Sword}
              baseValue={combatant.baseAtk}
              value={combatant.atk}
            ></StatBlock>
            <StatBlock
              icon={Shield}
              updateVariant="def"
              baseValue={combatant.baseDef}
              value={combatant.def}
            ></StatBlock>
            <StatBlock
              icon={Heart}
              updateVariant="hp"
              baseValue={combatant.baseHp}
              value={combatant.hp}
            ></StatBlock>
          </CardContent>
        </Button>
      </Card>
    </div>
  );
}

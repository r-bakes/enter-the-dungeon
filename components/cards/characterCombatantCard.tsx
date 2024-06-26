import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CharacterCombatant } from "@/data/combatants/combatants";
import { ITEM_BY_ID } from "@/data/items/items";
import { Heart, Shield, Sword } from "lucide-react";

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
    ? ITEM_BY_ID[combatant.loadout.leftHand]
    : undefined;
  let rightHand = combatant.loadout.rightHand
    ? ITEM_BY_ID[combatant.loadout.rightHand]
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
            <div className="flex flex-col gap-1">
              <Sword strokeWidth={1}></Sword>
              <Label className="text-muted-foreground">{combatant.atk}</Label>
              {combatant.atk > combatant.baseAtk ? (
                <Label className="text-muted-foreground">
                  +{combatant.atk - combatant.baseAtk}
                </Label>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Shield strokeWidth={1}></Shield>
              <Label className="text-muted-foreground">
                {combatant.baseDef}
              </Label>
              {combatant.def > combatant.baseDef ? (
                <Label className="text-muted-foreground">
                  +{combatant.def - combatant.baseDef}
                </Label>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Heart strokeWidth={1}></Heart>
              <Label className="text-muted-foreground">{combatant.hp}</Label>
            </div>
          </CardContent>
        </Button>
      </Card>
    </div>
  );
}

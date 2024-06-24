import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Combatant } from "@/data/combatants/combatants";
import { Heart, Shield, Sword } from "lucide-react";

export default function CombatantCard({
  combatant,
  isSelected,
  onClick,
}: {
  combatant: Combatant;
  isSelected: boolean;
  onClick: React.Dispatch<React.SetStateAction<any>>;
}) {
  let selectedStyle = isSelected ? "bg-accent" : "";

  return (
    <div className="flex flex-col text-center space-y-1">
      <Label className="text-muted-foreground font-extralight">
        {combatant.name}
      </Label>
      <Card className={"w-40 h-48 justify-center" + selectedStyle}>
        <Button
          onClick={onClick}
          className="flex flex-col h-full w-full p-0"
          variant="ghost"
        >
          <CardHeader className="items-center justify-center p-0 h-3/5">
            <combatant.icon size={80}></combatant.icon>
          </CardHeader>
          <CardContent className="flex items-start justify-center space-x-3 py-0 h-2/5">
            <div className="flex flex-col space-y-1">
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
            <div className="flex flex-col space-y-1">
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
            <div className="flex flex-col space-y-1">
              <Heart strokeWidth={1}></Heart>
              <Label className="text-muted-foreground">{combatant.hp}</Label>
            </div>
          </CardContent>
        </Button>
      </Card>
    </div>
  );
}
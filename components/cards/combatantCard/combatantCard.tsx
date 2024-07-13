import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Combatant } from "@/data/combatants/combatants";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Shield, Sword } from "lucide-react";
import StatBlock from "./statBlock";
import { renderIcon } from "@/data/gameObject";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: [null, 0], rotate: [null, 360], opacity: [null, 0.1] }}
      transition={{
        duration: 1,
      }}
    >
      <div className="flex flex-col text-center gap-1">
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
              {renderIcon(combatant.icon, {
                ...combatant.iconStyle,
                size: 80,
                strokeWidth: 0.5,
                strokeOpacity: 0.5,
                fillOpacity: 0.5,
              })}
            </CardHeader>
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
    </motion.div>
  );
}

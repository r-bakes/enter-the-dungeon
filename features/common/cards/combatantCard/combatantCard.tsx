import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Shield, Sword } from "lucide-react";
import StatBlock from "./statBlock";
import { Combatant } from "@/types/combatants";
import { renderIcon } from "@/features/common/utils/formattingUtilities";

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
      <div className="flex flex-col gap-1 text-center">
        <Label className="font-extralight text-muted-foreground">
          {combatant.name}
        </Label>
        <Card className={"h-48 w-40 justify-center" + selectedStyle}>
          <Button
            onClick={onClick}
            className="flex h-full w-full flex-col p-0"
            variant="ghost"
          >
            <CardHeader className="h-3/5 items-center justify-center p-0">
              {renderIcon(combatant.icon, 80, {
                ...combatant.iconStyle,
              })}
            </CardHeader>
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
    </motion.div>
  );
}

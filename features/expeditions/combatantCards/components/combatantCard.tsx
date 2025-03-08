import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Shield, Sword } from "lucide-react";
import StatBlock from "./statBlock";
import { Combatant } from "@/types/combatants";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import { useState } from "react";
import { useCombatCardEngineContext } from "@/engines/combatCardEngineContext";
import { CombatCardTarget } from "@/data/combatCards/enums";

const cardVariants = {
  idle: {
    scale: 1,
    rotate: 0,
  },
  attacked: {
    scale: 0.6,
    y: -40,
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
    },
  },
  attacking: {
    scale: 1.4,
    y: 40,
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
    },
  },
};

export default function CombatantCard({
  combatant,
  isSelected,
  animation,
  onClick,
}: {
  combatant: Combatant;
  isSelected: boolean;
  animation?: "attacked";
  onClick: React.Dispatch<React.SetStateAction<any>>;
}) {
  const selectedStyle = isSelected ? "bg-accent" : "";
  const { selectedCard } = useCombatCardEngineContext();
  const [animationState, setAnimationState] = useState<
    keyof typeof cardVariants
  >(animation ? animation : "idle");

  return (
    <motion.div variants={cardVariants} animate={animationState}>
      <div className="flex flex-col gap-1 text-center">
        <Label className="text-muted-foreground font-extralight">
          {combatant.name}
        </Label>
        <Card className={"h-54 w-48 justify-center " + selectedStyle}>
          <Button
            onClick={onClick}
            disabled={
              selectedCard?.target === CombatCardTarget.ALLIES ? true : false
            }
            className="flex h-full w-full flex-col"
            variant="ghost"
          >
            <CardHeader className="items-center justify-center">
              {renderIcon(combatant.icon, 80, combatant.iconStyle)}
            </CardHeader>
            <CardContent className="flex w-full grow items-start justify-between">
              <StatBlock
                icon={Sword}
                baseValue={combatant.baseAtk}
                value={combatant.atk}
              />
              <StatBlock
                icon={Shield}
                updateVariant="def"
                baseValue={combatant.baseDef}
                value={combatant.def}
              />
              <StatBlock
                icon={Heart}
                updateVariant="hp"
                baseValue={combatant.baseHp}
                value={combatant.hp}
              />
            </CardContent>
          </Button>
        </Card>
      </div>
    </motion.div>
  );
}

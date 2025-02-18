import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Shield, Sword } from "lucide-react";
import StatBlock from "./statBlock";
import { Combatant } from "@/types/combatants";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import { useState } from "react";

const cardVariants = {
  idle: {
    scale: 1,
    rotate: 0,
  },
  growShakeShrink: {
    // Keyframe arrays for scale and rotate
    scale: [1, 1.3, 1, 1.3, 1],
    rotate: [0, 5, -5, 5, -5, 0],
    transition: {
      duration: 0.8,
      // 'ease' can be "easeInOut" or custom; you can also define times for each keyframe
      ease: "easeInOut",
    },
  },
  quickShrink: {
    scale: 0.5,
    transition: {
      duration: 0.3,
    },
  },
};

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
  const [animationState, setAnimationState] =
    useState<keyof typeof cardVariants>("idle");

  return (
    <motion.div
      variants={cardVariants}
      animate={animationState}
      onAnimationComplete={() => {
        // Optionally revert back to idle or do something else
        setAnimationState("idle");
      }}
      // You can keep your initial, exit, or other props as needed
    >
      <div className="flex flex-col gap-1 text-center">
        <Label className="text-muted-foreground font-extralight">
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

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Target } from "@/data/combatCards/enums";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { CombatCardTemplate } from "@/types/combatCards";
import { renderIcon } from "@/utils/formattingUtilities";

export default function CombatDeckCard({
  card,
  isSelected = false,
  hoverTranslateDirection,
  onClick,
}: Readonly<{
  card: CombatCardTemplate;
  isSelected?: boolean;
  hoverTranslateDirection?: "u" | "d" | "l" | "r";
  onClick: React.Dispatch<React.SetStateAction<any>>;
}>) {
  let formattedHoverTranslateDirection = {};
  switch (hoverTranslateDirection) {
    case "u": {
      formattedHoverTranslateDirection = { y: -20 };
      break;
    }
    case "d": {
      formattedHoverTranslateDirection = { y: 20 };
      break;
    }
    case "l": {
      formattedHoverTranslateDirection = { x: 20 };
      break;
    }
    case "r": {
      formattedHoverTranslateDirection = { x: -20 };
      break;
    }
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        ...formattedHoverTranslateDirection,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      <Card className="flex h-44 w-36">
        <Button
          onClick={onClick}
          className={
            "flex h-full w-full flex-col items-start justify-start px-2 py-3"
          }
          variant="ghost"
        >
          <CardHeader className="mb-1 w-full items-center p-0">
            {renderIcon(card.icon, 32, {
              ...card.iconStyle,
            })}
            <CardTitle className="text-sm">{card.name}</CardTitle>
            <span className="mb-1 flex w-full justify-center">
              {[...Array(card.cost)].map((_, i) => (
                <Zap key={i} size={12}></Zap>
              ))}
            </span>
          </CardHeader>
          {formatCardContent(card)}
        </Button>
      </Card>
    </motion.div>
  );
}

const formatCardContent = (card: CombatCardTemplate) => {
  let content = null;
  if (card.target === Target.ENEMIES) {
    content = (
      <div className="flex flex-col gap-1">
        <span className="flex justify-center gap-1">
          <Label className="text-xs font-normal text-muted-foreground">
            Deals
          </Label>
          <Label className="text-xs font-medium">{card.modifier} x ATK</Label>
        </span>
        <span className="flex justify-center gap-1">
          <Label className="text-xs font-medium">{card.strikes}</Label>
          <Label className="text-xs font-normal text-muted-foreground">
            {card.strikes > 1 ? "times" : "time"}
          </Label>
        </span>
        <span className="flex justify-center gap-1">
          <Label className="text-xs font-normal text-muted-foreground">
            to
          </Label>
          <Label className="text-xs font-medium">{card.targets}</Label>
          <Label className="text-xs font-normal text-muted-foreground">
            {card.targets > 1 ? "targets" : "target"}
          </Label>
        </span>
        <span></span>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col gap-1">
        <span className="flex justify-center gap-1">
          <Label className="text-xs font-normal text-muted-foreground">
            Adds
          </Label>
          <Label className="text-xs font-medium">{card.modifier} x DEF</Label>
        </span>
        <span className="flex justify-center gap-1">
          <Label className="text-xs font-normal text-muted-foreground">
            to
          </Label>
          <Label className="text-xs font-medium">{card.targets}</Label>
          <Label className="text-xs font-normal text-muted-foreground">
            {card.targets > 1 ? "allies" : "ally"}
          </Label>
        </span>
        <span></span>
      </div>
    );
  }
  return (
    <CardContent className="flex w-full flex-col p-0">{content}</CardContent>
  );
};

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { renderIcon } from "@/data/gameObject";
import { motion } from "framer-motion";
import { Label } from "../ui/label";
import { CombatCard, CombatCardTemplate, Target } from "@/data/cards/types";
import { Zap } from "lucide-react";

export default function CombatDeckCard({
  card,
  isSelected = false,
  hoverTranslateDirection,
  onClick,
}: {
  card: CombatCardTemplate;
  isSelected?: boolean;
  hoverTranslateDirection?: "u" | "d" | "l" | "r";
  onClick: React.Dispatch<React.SetStateAction<any>>;
}) {
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
            "flex h-full w-full flex-col items-start justify-start p-0"
          }
          variant="ghost"
        >
          <CardHeader className="w-full items-center p-2">
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
  }
  return (
    <CardContent className="flex w-full flex-col p-2">{content}</CardContent>
  );
};

import { CombatCard, CombatCardTemplate } from "@/data/cards/cards";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { renderIcon } from "@/data/gameObject";
import { motion } from "framer-motion";

export default function CombatDeckCard({
  card,
  isSelected = false,
  hoverTranslateDirection,
  onClick,
}: {
  card: CombatCard | CombatCardTemplate;
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
      <Card className={"flex h-44 w-36"}>
        <Button
          onClick={onClick}
          className={"flex h-full w-full items-start justify-start p-0"}
          variant="ghost"
        >
          <CardHeader className="w-full items-center">
            {renderIcon(card.icon, 32, {
              ...card.iconStyle,
            })}
            <CardTitle className="text-sm">{card.name}</CardTitle>
            <CardDescription className="text-xs font-normal">
              {card.description}
            </CardDescription>
          </CardHeader>
        </Button>
      </Card>
    </motion.div>
  );
}

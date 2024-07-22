import { CombatCard, CombatCardTemplate } from "@/data/cards/cards";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { renderIcon } from "@/data/gameObject";

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
  let selectedStyle = isSelected ? "-translate-y-6 bg-accent" : "";
  let formattedHoverTranslateDirection = "";
  switch (hoverTranslateDirection) {
    case "u": {
      formattedHoverTranslateDirection = "hover:-translate-y-6 ";
      break;
    }
    case "d": {
      formattedHoverTranslateDirection = "hover:translate-y-6 ";
      break;
    }
    case "l": {
      formattedHoverTranslateDirection = "hover:-translate-x-6 ";
      break;
    }
    case "r": {
      formattedHoverTranslateDirection = "hover:translate-x-6 ";
      break;
    }
  }

  return (
    <Card
      className={
        "flex h-44 w-36 shrink-0 transition duration-300 ease-in-out " +
        formattedHoverTranslateDirection +
        selectedStyle
      }
    >
      <Button
        onClick={onClick}
        className={"flex h-full w-full items-start justify-start p-0"}
        variant="ghost"
      >
        <CardHeader className="w-full items-center">
          {renderIcon(card.icon, 32, {
            ...card.iconStyle,
          })}
          <CardTitle className="text-lg">{card.name}</CardTitle>
          <CardDescription className="text-sm font-light">
            {card.description}
          </CardDescription>
        </CardHeader>
      </Button>
    </Card>
  );
}

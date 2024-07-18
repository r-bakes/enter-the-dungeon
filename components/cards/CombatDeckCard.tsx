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
  let selectedStyle = isSelected ? "-translate-y-4 bg-accent" : "";
  let formattedHoverTranslateDirection = "";
  switch (hoverTranslateDirection) {
    case "u": {
      formattedHoverTranslateDirection = "hover:-translate-y-4 ";
      break;
    }
    case "d": {
      formattedHoverTranslateDirection = "hover:translate-y-4 ";
      break;
    }
    case "l": {
      formattedHoverTranslateDirection = "hover:-translate-x-4 ";
      break;
    }
    case "r": {
      formattedHoverTranslateDirection = "hover:translate-x-4 ";
      break;
    }
  }

  return (
    <Card
      className={
        "flex w-36 h-44 shrink-0 transition ease-in-out duration-300 " +
        formattedHoverTranslateDirection +
        selectedStyle
      }
    >
      <Button
        onClick={onClick}
        className={"flex w-full h-full items-start justify-start p-0"}
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

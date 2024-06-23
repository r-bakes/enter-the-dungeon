import { CombatCard } from "@/data/cards/cards";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function CombatDeckCard({
  card,
  isSelected,
  onClick,
}: {
  card: CombatCard;
  isSelected: boolean,
  onClick: React.Dispatch<React.SetStateAction<any>>;
}) {

    let selectedStyle = isSelected ? "-translate-y-4 bg-accent" : ""

    return (
    <Card className={"flex w-36 h-44 shrink-0 transition ease-in-out hover:-translate-y-4 duration-300 " + selectedStyle}>
      <Button
        onClick={onClick}
        className={"flex w-full h-full items-start justify-start p-0"}
        variant="ghost"
      >
        <CardHeader className="w-full items-center">
          <card.icon size={32}></card.icon>
          <CardTitle className="text-lg">{card.name}</CardTitle>
          <CardDescription className="text-sm font-light">
            {card.description}
          </CardDescription>
        </CardHeader>
      </Button>
    </Card>
  );
}

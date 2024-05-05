import { CombatCard } from "@/game/data/GameObject";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function CombatDeckCard({card, onClick}: {card: CombatCard, onClick: React.Dispatch<React.SetStateAction<any>>}) {

    return (
        <Card className="flex w-36 h-42 shrink-0">
            <Button onClick={onClick} className="flex w-full h-full items-start justify-start p-0" variant="ghost">
                <CardHeader className="w-full items-center select-none">
                    <card.icon size={32}></card.icon>
                    <CardTitle className="text-lg">{card.name}</CardTitle>
                    <CardDescription className="text-sm font-light">{card.description}</CardDescription>
                </CardHeader>
            </Button>
        </Card>
    )

}
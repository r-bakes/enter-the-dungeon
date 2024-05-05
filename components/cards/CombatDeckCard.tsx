import { CombatCard } from "@/game/data/GameObject";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function CombatDeckCard({card}: {card: CombatCard}) {

    return (
        <Card className="flex w-36 h-42 p-1">
            <Button className="flex w-full h-full items-start justify-start p-0" variant="ghost">
                <CardHeader className="w-full items-center">
                    <card.icon size={32}></card.icon>
                    <CardTitle className="text-lg">{card.name}</CardTitle>
                    <CardDescription className="text-sm font-light">{card.description}</CardDescription>
                </CardHeader>
            </Button>
        </Card>
    )

}
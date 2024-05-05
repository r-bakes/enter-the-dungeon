import CombatDeckCard from "@/components/cards/CombatDeckCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CARD_BY_ID } from "@/game/data/cards/cards";
import { useEngineContext } from "@/game/engine/EngineContext";

export default function MartialMenu({}:{}) {
    const { character } = useEngineContext();
    
    let equipped = character.deck.equpped.map(cardId => <CombatDeckCard card={CARD_BY_ID[cardId]}></CombatDeckCard>)
    let unequipped = character.deck.unequipped.map(cardId => <CombatDeckCard card={CARD_BY_ID[cardId]}></CombatDeckCard>)
    
    return (
        <div className="flex flex-col px-8 h-full w-full min-w-[800px]">
            <Label className="pb-2 text-lg">Equipped</Label>
            <Card className="flex w-full h-1/2">
                <CardContent className="flex flex-row items-center"> 
                    {equipped}        
                </CardContent>
            </Card>
            <Label className="pb-2 text-lg">Available</Label>
            <Card className="flex w-full h-1/2">
                <CardContent>
                    {unequipped}
                </CardContent>
            </Card>
        </div>
    )
}
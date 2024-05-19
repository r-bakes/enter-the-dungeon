import CombatDeckCard from "@/components/cards/CombatDeckCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MAGIC_DECK_LIMIT, MARTIAL_DECK_LIMIT } from "@/game/data/Configurations";
import { CARD_BY_ID } from "@/game/data/cards/cards";
import { useEngineContext } from "@/game/engine/EngineContext";

export default function DeckMenu({isMartial}:{isMartial: boolean}) {
    const { character, equipCard, unequipCard } = useEngineContext();
    let equipped = null;
    let unequipped = null;
    let limit = null

    if (isMartial) {
        equipped = character.deck.equppedMartial.map(cardId => <CombatDeckCard onClick={() => unequipCard(cardId)} card={CARD_BY_ID[cardId]}></CombatDeckCard>)
        unequipped = character.deck.unequippedMartial.map(cardId => <CombatDeckCard onClick={() => equipCard(cardId)} card={CARD_BY_ID[cardId]}></CombatDeckCard>)
        limit = MARTIAL_DECK_LIMIT;
    } else {
        equipped = character.deck.equippedMagic.map(cardId => <CombatDeckCard onClick={() => unequipCard(cardId)} card={CARD_BY_ID[cardId]}></CombatDeckCard>)
        unequipped = character.deck.unequippedMagic.map(cardId => <CombatDeckCard onClick={() => equipCard(cardId)} card={CARD_BY_ID[cardId]}></CombatDeckCard>)
        limit = MAGIC_DECK_LIMIT
    }
    
    return (
        <div className="flex flex-col px-8 h-full w-full min-w-[800px]">
            <Label className="text-xl pb-2">{equipped.length} / {limit}</Label>
            <Label className="text-xl text-muted-foreground font-extralight pb-2">Equipped</Label>
            <Card className="flex w-full h-56 shrink-0">
                <ScrollArea className="flex w-full h-full">
                    <CardContent className="flex h-full w-max p-4 gap-2"> 
                        {equipped}
                    </CardContent>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </Card>
            <Label className="text-xl text-muted-foreground font-extralight pb-2 mt-4">Available</Label>
            <Card className="flex w-full h-full grow">
                <ScrollArea className="flex w-full h-full">
                    <CardContent className="flex flex-wrap h-max w-full items-start justify-start p-6 gap-2">
                        {unequipped}
                    </CardContent>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>

            </Card>
        </div>
    )
}
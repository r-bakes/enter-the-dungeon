import CardBack from "@/components/cards/cardBack";
import CombatDeckCard from "@/components/cards/combatDeckCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useEncounterContext } from "@/engine/encounterEngineContext";

export default function DeckRow({}: {}) {
  const { drawPile, hand, discardPile } = useEncounterContext();

  return (
    <Card className="flex w-full h-56">
      <CardContent className="flex items-center justify-center w-full h-full px-4 py-2 space-x-4">
        <div className="flex flex-col h-full text-left space-y-2 min-w-[160px]">
          <Label className="text-muted-foreground font-extralight">
            Deck ({drawPile.length})
          </Label>
          {drawPile.length > 0 ? (
            <CardBack onClick={null}></CardBack>
          ) : (
            <div></div>
          )}
        </div>
        <div className="border-r h-5/6 "></div>
        <div className="flex grow h-full text-left">
          {hand.map((card) => (
            <CombatDeckCard card={card} onClick={null}></CombatDeckCard>
          ))}
        </div>
        <div className="border-r h-5/6 "></div>

        <div className="flex flex-col h-full text-right space-y-2 min-w-[160px]">
          <Label className="text-muted-foreground font-extralight">
            Discard ({discardPile.length})
          </Label>
          {discardPile.length > 0 ? (
            <CardBack onClick={null}></CardBack>
          ) : (
            <div></div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

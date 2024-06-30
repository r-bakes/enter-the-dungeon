import CardBack from "@/components/cards/cardBack";
import CombatDeckCard from "@/components/cards/combatDeckCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCombatCardEngineContext } from "@/engine/combatCardEngineContext";
import { useEncounterContext } from "@/engine/encounterEngineContext";
import { motion } from "framer-motion";

export default function DeckRow() {
  const { drawPile, hand, discardPile, round } = useEncounterContext();
  const { selectCard, selectedCard } = useCombatCardEngineContext();

  return (
    <Card className="flex w-full min-w-max h-56">
      <CardContent className="flex w-full h-full px-4 py-2 space-x-4">
        <div className="flex flex-col h-full text-left space-y-2 min-w-[160px]">
          <Label className="text-muted-foreground font-extralight">
            Deck ({drawPile.length})
          </Label>
          {drawPile.length > 0 ? (
            <CardBack onClick={() => {}}></CardBack>
          ) : (
            <div></div>
          )}
        </div>
        <div className="border-r h-5/6 "></div>
        <div className="flex grow h-full text-left space-x-2 justify-center items-center">
          {hand.map((card) => (
            <motion.div
              key={card.deckId + round * 20}
              className="flex"
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 500 }}
              transition={{
                duration: 2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <CombatDeckCard
                card={card}
                onClick={() => {
                  selectedCard?.deckId === card.deckId
                    ? selectCard(null)
                    : selectCard(card);
                }}
                hoverTranslateDirection="u"
                isSelected={
                  selectedCard ? selectedCard.deckId === card.deckId : false
                }
              ></CombatDeckCard>
            </motion.div>
          ))}
        </div>
        <div className="border-r h-5/6 "></div>

        <div className="flex flex-col h-full text-right space-y-2 min-w-[160px]">
          <Label className="text-muted-foreground font-extralight">
            Discard ({discardPile.length})
          </Label>
          {discardPile.length > 0 ? (
            <CardBack onClick={() => {}}></CardBack>
          ) : (
            <div></div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

import CardBack from "@/components/common/cards/cardBack";
import CombatDeckCard from "@/components/common/cards/combatDeckCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCombatCardEngineContext } from "@/engines/combatCardEngineContext";
import { useEncounterContext } from "@/engines/encounterEngineContext";
import { motion } from "framer-motion";

export default function DeckRow() {
  const { drawPile, hand, discardPile, round } = useEncounterContext();
  const { selectCard, selectedCard } = useCombatCardEngineContext();

  return (
    <Card className="flex h-56 w-full min-w-max">
      <CardContent className="flex h-full w-full space-x-4 px-4 py-2">
        <div className="flex h-full min-w-[160px] flex-col space-y-2 text-left">
          <Label className="font-extralight text-muted-foreground">
            Deck ({drawPile.length})
          </Label>
          {drawPile.length > 0 ? (
            <CardBack onClick={() => {}}></CardBack>
          ) : (
            <div></div>
          )}
        </div>
        <div className="h-5/6 border-r"></div>
        <div className="flex h-full grow items-center justify-center space-x-2 text-left">
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
        <div className="h-5/6 border-r"></div>

        <div className="flex h-full min-w-[160px] flex-col space-y-2 text-right">
          <Label className="font-extralight text-muted-foreground">
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

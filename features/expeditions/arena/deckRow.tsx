import CardBack from "@/features/common/cards/cardBack";
import CombatDeckCard from "@/features/common/cards/combatDeckCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCombatCardEngineContext } from "@/engines/combatCardEngineContext";
import { useEncounterContext } from "@/engines/encounterEngineContext";
import { AnimatePresence, motion } from "framer-motion";

export default function DeckRow() {
  const { drawPile, hand, discardPile, round } = useEncounterContext();
  const { selectCard, selectedCard } = useCombatCardEngineContext();

  return (
    <div className="flex w-full min-w-max flex-col gap-2">
      <div className="flex justify-between">
        <Label className="text-muted-foreground font-extralight">
          Deck ({drawPile.length})
        </Label>
        <Label className="text-muted-foreground font-extralight">
          Discard ({discardPile.length})
        </Label>
      </div>
      <Card className="flex h-56 grow">
        <CardContent className="flex h-full w-full items-center space-x-4 px-4 py-2">
          <div className="flex h-full min-w-[160px] flex-col justify-center gap-2">
            {drawPile.length > 0 ? (
              <CardBack onClick={() => {}}></CardBack>
            ) : (
              <div></div>
            )}
          </div>
          <div className="h-5/6 border-r"></div>
          <ul className="flex h-full grow items-center justify-center gap-3">
            <AnimatePresence mode="popLayout">
              {hand.map((card) => (
                <motion.li
                  layout
                  key={card.cardInstanceId}
                  className="flex"
                  initial={{ opacity: 0, x: -500 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                  exit={{
                    opacity: 0,
                    y: 0,
                    x: 600,
                    scale: 0.5,
                    transition: { duration: 0.8 },
                  }}
                >
                  <CombatDeckCard
                    card={card}
                    onClick={() => {
                      selectedCard?.cardInstanceId === card.cardInstanceId
                        ? selectCard(null)
                        : selectCard(card);
                    }}
                    hoverTranslateDirection="u"
                    isSelected={
                      selectedCard?.cardInstanceId === card.cardInstanceId
                        ? true
                        : false
                    }
                  ></CombatDeckCard>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <div className="h-5/6 border-r"></div>

          <div className="flex h-full min-w-[160px] flex-col justify-center">
            <AnimatePresence>
              {discardPile.length > 0 ? (
                <motion.div
                  key={"deck"}
                  exit={{
                    x: -1400,
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.8 },
                  }}
                >
                  <CardBack onClick={() => {}}></CardBack>
                </motion.div>
              ) : (
                <div></div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

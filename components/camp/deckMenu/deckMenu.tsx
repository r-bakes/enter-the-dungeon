import CombatDeckCard from "@/components/cards/combatDeckCard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MAGIC_DECK_LIMIT, MARTIAL_DECK_LIMIT } from "@/data/configurations";
import { CARD_TEMPLATE_BY_ID } from "@/data/cards/cards";
import { useCampEngineContext } from "@/engine/campEngineContext";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { ArrowRightLeft } from "lucide-react";

export default function DeckMenu({}: {}) {
  const { character, equipCard, unequipCard } = useCharacterEngineContext();
  let martialEquipped = character.deck.equppedMartial.map((cardId, id) => (
    <CombatDeckCard
      key={id + "equipped"}
      onClick={() => unequipCard(cardId)}
      card={CARD_TEMPLATE_BY_ID[cardId]}
      hoverTranslateDirection="l"
    ></CombatDeckCard>
  ));
  let martialUnequipped = character.deck.unequippedMartial.map((cardId, id) => (
    <CombatDeckCard
      key={id + "unequipped"}
      onClick={() => equipCard(cardId)}
      card={CARD_TEMPLATE_BY_ID[cardId]}
      hoverTranslateDirection="r"
    ></CombatDeckCard>
  ));

  let magicEquipped = character.deck.equippedMagic.map((cardId, id) => (
    <CombatDeckCard
      key={id + "equipped"}
      onClick={() => unequipCard(cardId)}
      card={CARD_TEMPLATE_BY_ID[cardId]}
      hoverTranslateDirection="l"
    ></CombatDeckCard>
  ));
  let magicUnequipped = character.deck.unequippedMagic.map((cardId, id) => (
    <CombatDeckCard
      key={id + "unequipped"}
      onClick={() => equipCard(cardId)}
      card={CARD_TEMPLATE_BY_ID[cardId]}
      hoverTranslateDirection="r"
    ></CombatDeckCard>
  ));

  return (
    <div className="flex px-8 h-full w-full min-w-max items-center gap-2">
      <div className="flex h-full flex-col w-1/2 text-center">
        <Label className="text-xl font-extrabold pb-2">Martial</Label>
        <div className="flex w-full h-full justify-center gap-2">
          <div className="flex flex-col h-[860px]">
            <Label className="text-lg text-muted-foreground font-extralight pb-2">
              Available
            </Label>
            <Card className="flex flex-col w-56 py-6 h-full">
              <ScrollArea className="flex flex-col w-full h-full">
                <div className="flex flex-col w-56 gap-3 items-center">
                  {martialUnequipped}
                </div>
                <ScrollBar />
              </ScrollArea>
            </Card>
          </div>
          <div className="flex h-full items-center">
            <ArrowRightLeft size={45} strokeWidth={1} />
          </div>
          <div className="flex flex-col h-[860px]">
            <Label className="text-lg text-muted-foreground font-extralight pb-2">
              {`Equipped ( ${martialEquipped.length}  / ${MARTIAL_DECK_LIMIT})`}
            </Label>
            <Card className="flex flex-col w-56 py-6 h-full">
              <ScrollArea className="flex flex-col w-full h-full">
                <div className="flex flex-col w-56 gap-3 items-center">
                  {martialEquipped}
                </div>
                <ScrollBar />
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col w-1/2 text-center">
        <Label className="text-xl font-extrabold pb-2">Magic</Label>
        <div className="flex w-full h-full justify-center gap-2">
          <div className="flex flex-col h-[860px]">
            <Label className="text-lg text-muted-foreground font-extralight pb-2">
              {`Available`}
            </Label>
            <Card className="flex flex-col w-56 py-6 h-full">
              <ScrollArea className="flex flex-col w-full h-full">
                <div className="flex flex-col w-56 gap-3 items-center">
                  {magicUnequipped}
                </div>
                <ScrollBar />
              </ScrollArea>
            </Card>
          </div>
          <div className="flex h-full items-center">
            <ArrowRightLeft size={45} strokeWidth={1} />
          </div>
          <div className="flex flex-col h-[860px]">
            <Label className="text-lg text-muted-foreground font-extralight pb-2">
              {`Equipped ( ${magicEquipped.length}  / ${MAGIC_DECK_LIMIT})`}
            </Label>
            <Card className="flex flex-col w-56 py-6 h-full">
              <ScrollArea className="flex flex-col w-full h-full">
                <div className="flex flex-col w-56 gap-3 items-center">
                  {magicEquipped}
                </div>
                <ScrollBar />
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>

      {/* <Card className="flex w-full h-56 shrink-0">
        <ScrollArea className="flex w-full h-full overflow-x-auto ">
          <div className="flex w-full h-56 px-2 space-x-2 items-center">
            {equipped}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Card>
   
      <Card className="flex w-full h-full">
        <ScrollArea className="flex w-full h-full">
          {unequipped}
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </Card> */}
    </div>
  );
}

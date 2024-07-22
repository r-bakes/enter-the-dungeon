import CombatDeckCard from "@/components/cards/combatDeckCard";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MAGIC_DECK_LIMIT, MARTIAL_DECK_LIMIT } from "@/data/configurations";
import { cardTable } from "@/data/cards/cards";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { ArrowDownUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function DeckMenu({}: {}) {
  const { character, equipCard, unequipCard } = useCharacterEngineContext();
  let martialEquipped = character.deck.equppedMartial.map((cardId, id) => (
    <CombatDeckCard
      key={id + "equipped"}
      onClick={() => unequipCard(cardId)}
      card={cardTable[cardId]}
      hoverTranslateDirection="u"
    ></CombatDeckCard>
  ));
  let martialUnequipped = character.deck.unequippedMartial.map((cardId, id) => (
    <CombatDeckCard
      key={id + "unequipped"}
      onClick={() => equipCard(cardId)}
      card={cardTable[cardId]}
      hoverTranslateDirection="d"
    ></CombatDeckCard>
  ));

  let magicEquipped = character.deck.equippedMagic.map((cardId, id) => (
    <CombatDeckCard
      key={id + "equipped"}
      onClick={() => unequipCard(cardId)}
      card={cardTable[cardId]}
      hoverTranslateDirection="l"
    ></CombatDeckCard>
  ));
  let magicUnequipped = character.deck.unequippedMagic.map((cardId, id) => (
    <CombatDeckCard
      key={id + "unequipped"}
      onClick={() => equipCard(cardId)}
      card={cardTable[cardId]}
      hoverTranslateDirection="r"
    ></CombatDeckCard>
  ));

  return (
    <div className="flex h-full w-full flex-row gap-6 px-8">
      <div className="flex h-full w-[calc(100%-4px)] flex-col gap-6 overflow-y-scroll">
        <div className="flex w-full flex-row gap-6">
          <div className="w-0 border-4 shadow-sm"></div>
          <div className="flex grow flex-col gap-1">
            <Label className="pb-2 text-xl font-medium">Martial</Label>
            <Label className="text-lg font-medium text-muted-foreground">
              Available
            </Label>
            <Card className="flex h-[200px] w-full flex-row px-6">
              <div className="flex h-full w-full flex-row items-center gap-3">
                {martialUnequipped}
              </div>
            </Card>
            <div className="flex w-1/2 items-end justify-between">
              <Label className="text-lg font-medium text-muted-foreground">
                {`Equipped (${martialEquipped.length}  / ${MARTIAL_DECK_LIMIT})`}
              </Label>
              <ArrowDownUp size={45} strokeWidth={1} />
            </div>
            <Card className="flex h-[200px] w-full flex-row items-center px-6">
              <div className="flex h-full w-full flex-row items-center gap-3">
                {martialEquipped}
              </div>
            </Card>
          </div>
        </div>
        <div className="flex w-full flex-row px-7">
          <Separator></Separator>
        </div>
        <div className="flex w-full flex-row gap-6">
          <div className="w-0 border-4 shadow-sm"></div>
          <div className="flex w-full flex-col gap-1">
            <Label className="pb-2 text-xl font-medium">Magic</Label>
            <Label className="text-lg font-medium text-muted-foreground">
              Available
            </Label>
            <Card className="flex h-[200px] w-full flex-row px-6">
              <div className="flex h-full w-full flex-row items-center gap-3">
                {magicUnequipped}
              </div>
            </Card>
            <div className="flex w-1/2 items-end justify-between">
              <Label className="text-lg font-medium text-muted-foreground">
                {`Equipped (${magicEquipped.length}  / ${MAGIC_DECK_LIMIT})`}
              </Label>
              <ArrowDownUp size={45} strokeWidth={1} />
            </div>
            <Card className="flex h-[200px] w-full flex-row items-center px-6">
              <div className="flex h-full w-full flex-row items-center gap-3">
                {magicEquipped}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

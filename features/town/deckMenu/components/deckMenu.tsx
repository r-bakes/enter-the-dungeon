import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { ArrowDownUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { combatCardTable } from "@/data/combatCards/combatCards";
import CombatDeckCard from "@/features/common/cards/combatDeckCard";
import {
  MAGIC_DECK_LIMIT,
  MARTIAL_DECK_LIMIT,
} from "@/configurations/configurations";
import useDeckActions from "@/features/common/deck/hooks/useDeckActions";
import { CombatCardId } from "@/data/combatCards/enums";

export default function DeckMenu({}: {}) {
  const { equipCard, unequipCard } = useDeckActions();
  const { character } = useCharacterEngineContext();

  let martialEquipped = character.deck.equppedMartial.map((cardId, id) => (
    <CombatDeckCard
      key={id + "equipped"}
      onClick={() => unequipCard(cardId as CombatCardId)}
      card={combatCardTable[cardId as CombatCardId]}
      hoverTranslateDirection="u"
    ></CombatDeckCard>
  ));
  let martialUnequipped = character.deck.unequippedMartial.map((cardId, id) => (
    <CombatDeckCard
      key={id + "unequipped"}
      onClick={() => equipCard(cardId as CombatCardId)}
      card={combatCardTable[cardId as CombatCardId]}
      hoverTranslateDirection="d"
    ></CombatDeckCard>
  ));

  let magicEquipped = character.deck.equippedMagic.map((cardId, id) => (
    <CombatDeckCard
      key={id + "equipped"}
      onClick={() => unequipCard(cardId as CombatCardId)}
      card={combatCardTable[cardId as CombatCardId]}
      hoverTranslateDirection="l"
    ></CombatDeckCard>
  ));
  let magicUnequipped = character.deck.unequippedMagic.map((cardId, id) => (
    <CombatDeckCard
      key={id + "unequipped"}
      onClick={() => equipCard(cardId as CombatCardId)}
      card={combatCardTable[cardId as CombatCardId]}
      hoverTranslateDirection="r"
    ></CombatDeckCard>
  ));

  return (
    <div className="flex h-full w-full flex-row gap-6 px-8">
      <div className="flex h-full w-[calc(100%-4px)] flex-col gap-6 overflow-y-scroll">
        <div className="flex w-full flex-row gap-6">
          <div className="w-0 border-4 shadow-xs"></div>
          <div className="flex grow flex-col gap-1">
            <Label className="pb-2 text-xl font-medium">Martial</Label>
            <Label className="text-muted-foreground text-lg font-medium">
              Available
            </Label>
            <Card className="flex h-[200px] w-full flex-row px-6">
              <div className="flex h-full w-full flex-row items-center gap-3">
                {martialUnequipped}
              </div>
            </Card>
            <div className="flex w-1/2 items-end justify-between">
              <Label className="text-muted-foreground text-lg font-medium">
                {`Equipped (${martialEquipped.length} / ${MARTIAL_DECK_LIMIT})`}
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
          <div className="w-0 border-4 shadow-xs"></div>
          <div className="flex w-full flex-col gap-1">
            <Label className="pb-2 text-xl font-medium">Magic</Label>
            <Label className="text-muted-foreground text-lg font-medium">
              Available
            </Label>
            <Card className="flex h-[200px] w-full flex-row px-6">
              <div className="flex h-full w-full flex-row items-center gap-3">
                {magicUnequipped}
              </div>
            </Card>
            <div className="flex w-1/2 items-end justify-between">
              <Label className="text-muted-foreground text-lg font-medium">
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

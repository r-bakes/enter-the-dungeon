import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { ArrowDownUp, Sword } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { combatCardTable } from "@/data/combatCards/combatCards";
import CombatDeckCard from "@/features/common/cards/combatDeckCard";
import {
  MAGIC_DECK_LIMIT,
  MARTIAL_DECK_LIMIT,
  LEVEL_CAP,
} from "@/configurations/configurations";
import useDeckActions from "@/features/common/deck/hooks/useDeckActions";
import { CombatCardId } from "@/data/combatCards/enums";
import { SkillId } from "@/data/skills/enums";
import { renderIcon, formatRoundedQuantity } from "@/features/common/utils/formattingUtilities";
import { requiredExpForLevelUp } from "@/features/common/experience/utils/experienceUtils";

export default function DeckMenu({}: {}) {
  const { equipCard, unequipCard } = useDeckActions();
  const { character } = useCharacterEngineContext();

  // Martial skill experience calculations
  const martialLevel = character.skills[SkillId.MARTIAL].level;
  const martialExperience = character.skills[SkillId.MARTIAL].experience;
  const martialExpGainedAtLevel = martialExperience - requiredExpForLevelUp(martialLevel - 1);
  const martialExpRemainingForLevelUp = requiredExpForLevelUp(martialLevel) - requiredExpForLevelUp(martialLevel - 1);
  const martialProgressPercent = martialLevel >= LEVEL_CAP ? 100 : (martialExpGainedAtLevel / martialExpRemainingForLevelUp) * 100;

  // Magic skill experience calculations  
  const magicLevel = character.skills[SkillId.MAGIC].level;
  const magicExperience = character.skills[SkillId.MAGIC].experience;
  const magicExpGainedAtLevel = magicExperience - requiredExpForLevelUp(magicLevel - 1);
  const magicExpRemainingForLevelUp = requiredExpForLevelUp(magicLevel) - requiredExpForLevelUp(magicLevel - 1);
  const magicProgressPercent = magicLevel >= LEVEL_CAP ? 100 : (magicExpGainedAtLevel / magicExpRemainingForLevelUp) * 100;

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
    <div className="flex h-full w-full flex-col gap-4 px-4 lg:gap-6 lg:px-8">
      {/* Header Card */}
      <Card className="w-full items-center">
        <CardHeader className="flex flex-row items-center">
          <div className="lg:hidden">
            {renderIcon(Sword, 32, {
              strokeWidth: 1,
            })}
          </div>
          <div className="hidden lg:block">
            {renderIcon(Sword, 44, { strokeWidth: 1 })}
          </div>
          <div className="m-0 flex flex-col pl-3 lg:pl-4">
            <CardTitle className="text-base lg:text-lg">Combat Cards</CardTitle>
            <CardDescription className="text-xs lg:text-sm">
              Manage your martial and magic combat deck.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content */}
      <div className="flex h-full w-full flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="hidden w-0 border-4 shadow-xs lg:block"></div>

        <div className="flex h-full w-full flex-col gap-4 overflow-y-auto lg:flex-row lg:gap-6">
          {/* Martial Cards Section */}
          <div className="flex w-full flex-col gap-2 lg:w-1/2">
            <div className="flex items-center justify-between">
              <Label className="text-lg font-medium lg:text-xl">Martial</Label>
              <div className="flex items-center gap-2">
                <Label className="text-sm lg:text-base">Lv. {martialLevel}</Label>
                {martialLevel < LEVEL_CAP && (
                  <Label className="text-muted-foreground text-xs lg:text-sm">
                    {formatRoundedQuantity(martialExperience)} / {formatRoundedQuantity(requiredExpForLevelUp(martialLevel))} XP
                  </Label>
                )}
              </div>
            </div>
            
            {martialLevel < LEVEL_CAP && (
              <Progress 
                className="h-1.5 w-full lg:h-2" 
                value={martialProgressPercent} 
              />
            )}

            <div className="flex flex-col gap-1">
              <Label className="text-muted-foreground text-sm font-medium lg:text-base">
                Available
              </Label>
              <Card className="flex min-h-[120px] w-full p-3 lg:min-h-[160px] lg:px-6">
                <div className="flex h-full w-full flex-wrap items-center gap-2 overflow-visible lg:flex-row lg:gap-3">
                  {martialUnequipped}
                </div>
              </Card>
            </div>

            <div className="flex items-center justify-between py-1">
              <Label className="text-muted-foreground text-sm font-medium lg:text-base">
                {`Equipped (${martialEquipped.length} / ${MARTIAL_DECK_LIMIT})`}
              </Label>
              <ArrowDownUp
                size={24}
                strokeWidth={1}
                className="lg:h-8 lg:w-8"
              />
            </div>

            <Card className="flex min-h-[120px] w-full p-3 lg:min-h-[160px] lg:px-6">
              <div className="flex h-full w-full flex-wrap items-center gap-2 overflow-visible lg:flex-row lg:gap-3">
                {martialEquipped}
              </div>
            </Card>
          </div>

          {/* Separator */}
          <div className="flex w-full justify-center py-2 lg:hidden">
            <Separator className="w-3/4" />
          </div>

          {/* Magic Cards Section */}
          <div className="flex w-full flex-col gap-2 lg:w-1/2">
            <div className="flex items-center justify-between">
              <Label className="text-lg font-medium lg:text-xl">Magic</Label>
              <div className="flex items-center gap-2">
                <Label className="text-sm lg:text-base">Lv. {magicLevel}</Label>
                {magicLevel < LEVEL_CAP && (
                  <Label className="text-muted-foreground text-xs lg:text-sm">
                    {formatRoundedQuantity(magicExperience)} / {formatRoundedQuantity(requiredExpForLevelUp(magicLevel))} XP
                  </Label>
                )}
              </div>
            </div>
            
            {magicLevel < LEVEL_CAP && (
              <Progress 
                className="h-1.5 w-full lg:h-2" 
                value={magicProgressPercent} 
              />
            )}

            <div className="flex flex-col gap-1">
              <Label className="text-muted-foreground text-sm font-medium lg:text-base">
                Available
              </Label>
              <Card className="flex min-h-[120px] w-full p-3 lg:min-h-[160px] lg:px-6">
                <div className="flex h-full w-full flex-wrap items-center gap-2 overflow-visible lg:flex-row lg:gap-3">
                  {magicUnequipped}
                </div>
              </Card>
            </div>

            <div className="flex items-center justify-between py-1">
              <Label className="text-muted-foreground text-sm font-medium lg:text-base">
                {`Equipped (${magicEquipped.length} / ${MAGIC_DECK_LIMIT})`}
              </Label>
              <ArrowDownUp
                size={24}
                strokeWidth={1}
                className="lg:h-8 lg:w-8"
              />
            </div>

            <Card className="flex min-h-[120px] w-full p-3 lg:min-h-[160px] lg:px-6">
              <div className="flex h-full w-full flex-wrap items-center gap-2 overflow-visible lg:flex-row lg:gap-3">
                {magicEquipped}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

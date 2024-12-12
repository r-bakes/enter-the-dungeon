import { Shield, Sword, Swords } from "lucide-react";
import { CombatCard, CombatCardTemplate } from "@/types/combatCards";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { barsTable } from "@/data/items/bars";
import { CombatCardId, Target } from "@/data/combatCards/enums";
import { BarId } from "../items/enums";

export const combatCardTable: { [id in CombatCardId]: CombatCardTemplate } = {
  [CombatCardId.SLICE]: {
    id: CombatCardId.SLICE,
    name: "Slice",
    target: Target.ENEMIES,
    icon: Sword,
    iconStyle: {
      fill: barsTable[BarId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    description: "They won't see it coming.",
    strikes: 1,
    targets: 1,
    modifier: 1,
    cost: 1,
  },
  [CombatCardId.STAB]: {
    id: CombatCardId.STAB,
    name: "Stab",
    target: Target.ENEMIES,
    icon: Swords,
    iconStyle: {
      fill: barsTable[BarId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    description: "They won't see it coming.",
    strikes: 2,
    targets: 1,
    modifier: 0.5,
    cost: 1,
  },
  [CombatCardId.DEFEND]: {
    id: CombatCardId.DEFEND,
    name: "Defend",
    target: Target.ALLIES,
    icon: Shield,
    iconStyle: {
      fill: barsTable[BarId.STEEL_BAR].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    description: "They won't see it coming.",
    strikes: 0,
    targets: 1,
    modifier: 1,
    cost: 1,
  },
};

export const createCombatCard = (
  cardId: CombatCardId,
  deckId: number,
): CombatCard => {
  return {
    deckId: deckId,
    ...combatCardTable[cardId],
  };
};

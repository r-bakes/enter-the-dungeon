import { Shield, Sword, Swords } from "lucide-react";
import { barsTable } from "../items/bars";
import { TASK_AND_ITEM_ICON_STYLE } from "../configurations";
import { CombatCard, CombatCardTemplate, Target } from "./types";

export const combatCardTable: { [cardId: string]: CombatCardTemplate } = {
  slice: {
    id: "slice",
    name: "Slice",
    target: Target.ENEMIES,
    icon: Sword,
    iconStyle: {
      fill: barsTable.ironBar.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    description: "They won't see it coming.",
    strikes: 1,
    targets: 1,
    modifier: 1,
    cost: 1,
  },
  stab: {
    id: "stab",
    name: "Stab",
    target: Target.ENEMIES,
    icon: Swords,
    iconStyle: {
      fill: barsTable.ironBar.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    description: "They won't see it coming.",
    strikes: 2,
    targets: 1,
    modifier: 0.5,
    cost: 1,
  },
  defend: {
    id: "defend",
    name: "Defend",
    target: Target.ALLIES,
    icon: Shield,
    iconStyle: {
      fill: barsTable.ironBar.iconStyle.fill,
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
  cardId: string,
  deckId: number,
): CombatCard => {
  return {
    deckId: deckId,
    ...combatCardTable[cardId],
  };
};

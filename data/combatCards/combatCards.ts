import { Shield, Sword, Swords } from "lucide-react";
import { CombatCard, CombatCardTemplate } from "@/types/combatCards";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { CombatCardId, CombatCardTarget, CombatCardType } from "./enums";

export const combatCardTable: { [id in CombatCardId]: CombatCardTemplate } = {
  [CombatCardId.SLICE]: {
    id: CombatCardId.SLICE,
    name: "Slice",
    target: CombatCardTarget.ENEMIES,
    icon: Sword,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    description: "They won't see it coming.",
    strikes: 1,
    targets: 1,
    modifier: 1,
    cost: 1,
    type: CombatCardType.MARTIAL,
  },
  [CombatCardId.STAB]: {
    id: CombatCardId.STAB,
    name: "Stab",
    target: CombatCardTarget.ENEMIES,
    icon: Swords,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    description: "They won't see it coming.",
    strikes: 2,
    targets: 1,
    modifier: 0.5,
    cost: 1,
    type: CombatCardType.MARTIAL,
  },
  [CombatCardId.DEFEND]: {
    id: CombatCardId.DEFEND,
    name: "Defend",
    target: CombatCardTarget.ALLIES,
    icon: Shield,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    description: "They won't see it coming.",
    strikes: 0,
    targets: 1,
    modifier: 1,
    cost: 1,
    type: CombatCardType.MARTIAL,
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

import { User } from "lucide-react";
import { CombatantTemplate } from "@/types/combatants";
import { CombatantId } from "./enums";
import { ItemId } from "../items/enums";

export const goblinRunt: CombatantTemplate = {
  id: CombatantId.GOBLIN_RUNT,
  name: "Goblin Runt",
  description: "A puny goblin.",
  icon: User,
  iconStyle: { fill: "#81A263" },
  lootTable: {
    gems: {
      [ItemId.SAPPHIRE]: { weight: 20, minQuantity: 1, maxQuantity: 1 },
      [ItemId.EMERALD]: { weight: 10, minQuantity: 1, maxQuantity: 1 },
    },
  },
  baseAtk: 1,
  baseDef: 1,
  baseHp: 5,
  modifiers: [],
};

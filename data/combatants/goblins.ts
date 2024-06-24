import { User } from "lucide-react";
import { CombatantTemplate } from "./combatants";

export const goblinRunt: CombatantTemplate = {
  id: "goblinRunt",
  name: "Goblin Runt",
  description: "A puny goblin.",
  icon: User,
  lootTable: {
    gems: {
      sapphire: { weight: 20, minQuantity: 1, maxQuantity: 1 },
      emerald: { weight: 10, minQuantity: 1, maxQuantity: 1 },
    },
  },
  baseAtk: 1,
  baseDef: 1,
  baseHp: 5,
  modifiers: [],
};

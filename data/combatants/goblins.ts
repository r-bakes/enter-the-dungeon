import { User } from "lucide-react";
import { Combatant } from "./combatants";

export const goblinRunt: Combatant = {
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
  atk: 1,
  def: 1,
  maxHp: 5,
  hp: 5,
};

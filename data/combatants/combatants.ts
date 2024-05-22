import { LootTable } from "@/engine/utils/lootUtilities";
import { GameObject } from "../gameObject";

export type Combatant = {
  atk: number;
  def: number;
  maxHp: number;
  hp: number;
  lootTable: LootTable;
} & GameObject;

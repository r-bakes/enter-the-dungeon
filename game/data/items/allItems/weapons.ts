import { Equipment, ItemType } from "../../GameObject";
import { defend, slice } from "../../cards/Card";
import { Shield, Sword } from "lucide-react";
import { Slot } from "../../character/Character";

export const bronzeSword: Equipment = {
  id: "bronzeSword",
  name: "Bronze Sword",
  description: "A bronze sword.",
  icon: Sword,
  type: ItemType.EQUIPEMENT,
  value: 10,
  slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
  cards: [slice, slice],
  attackBonus: 1,
  defenseBonus: 1,
  healthBonus: 0,
};
export const ironSword: Equipment = {
  id: "ironSword",
  name: "Iron Sword",
  description: "An iron sword.",
  icon: Sword,
  type: ItemType.EQUIPEMENT,
  value: 10,
  slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
  cards: [slice, slice],
  attackBonus: 10,
  defenseBonus: 10,
  healthBonus: 0,
};
export const ironShield: Equipment = {
  id: "ironShield",
  name: "Iron Shield",
  description: "An iron shield.",
  icon: Shield,
  type: ItemType.EQUIPEMENT,
  value: 10,
  slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
  cards: [defend, defend],
  attackBonus: 0,
  defenseBonus: 20,
  healthBonus: 0,
};
export const ironGreatSword: Equipment = {
  id: "ironGreatSword",
  name: "Iron Great Sword",
  description: "An iron great sword.",
  icon: Sword,
  type: ItemType.EQUIPEMENT,
  value: 10,
  isTwoHanded: true,
  slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
  cards: [],
  attackBonus: 20,
  defenseBonus: 5,
  healthBonus: 0,
};
export const steelSword: Equipment = {
  id: "steelSword",
  name: "Steel Sword",
  description: "A steel sword.",
  icon: Sword,
  type: ItemType.EQUIPEMENT,
  value: 10,
  slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
  cards: [slice, slice],
  attackBonus: 20,
  defenseBonus: 20,
  healthBonus: 0,
};

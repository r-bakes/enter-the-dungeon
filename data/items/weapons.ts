import { Equipment, ItemType } from "./types";
import { defend, slice } from "../cards/cards";
import { Shield, Sword } from "lucide-react";
import { Slot } from "../character/character";

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
  defenseBonus: 0,
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
  attackBonus: 2,
  defenseBonus: 0,
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
  defenseBonus: 2,
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
  attackBonus: 4,
  defenseBonus: 0,
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
  attackBonus: 3,
  defenseBonus: 0,
  healthBonus: 0,
};
export const mithrilSword: Equipment = {
  id: "mithrilSword",
  name: "Mithril Sword",
  description: "A mithril sword.",
  icon: Sword,
  type: ItemType.EQUIPEMENT,
  value: 10,
  slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
  cards: [slice, slice],
  attackBonus: 4,
  defenseBonus: 0,
  healthBonus: 0,
};
export const adamantSword: Equipment = {
  id: "adamantSword",
  name: "Adamant Sword",
  description: "An adamant sword.",
  icon: Sword,
  type: ItemType.EQUIPEMENT,
  value: 10,
  slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
  cards: [slice, slice],
  attackBonus: 5,
  defenseBonus: 0,
  healthBonus: 0,
};

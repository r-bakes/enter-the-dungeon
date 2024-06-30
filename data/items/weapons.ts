import { Equipment, ItemType } from "./types";
import { cardTable } from "../cards/cards";
import { Shield, Slice, Sword } from "lucide-react";
import { Slot } from "../character/character";

export const weaponTable: { [weaponId: string]: Equipment } = {
  bronzeDagger: {
    id: "bronzeDagger",
    name: "Bronze Dagger",
    description: "A bronze dagger.",
    icon: Slice,
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [cardTable.stab, cardTable.stab, cardTable.stab],
    attackBonus: 1,
    defenseBonus: 0,
    healthBonus: 0,
  },
  bronzeSword: {
    id: "bronzeSword",
    name: "Bronze Sword",
    description: "A bronze sword.",
    icon: Sword,
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [cardTable.slice, cardTable.slice, cardTable.slice],
    attackBonus: 1,
    defenseBonus: 0,
    healthBonus: 0,
  },
  bronzeShield: {
    id: "bronzeShield",
    name: "Bronze Shield",
    description: "A bronze shield.",
    icon: Shield,
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [cardTable.defend, cardTable.defend, cardTable.defend],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  bronzeGreatSword: {
    id: "bronzeGreatSword",
    name: "Bronze Great Sword",
    description: "A bronze great sword.",
    icon: Sword,
    type: ItemType.EQUIPEMENT,
    value: 10,
    isTwoHanded: true,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [],
    attackBonus: 2,
    defenseBonus: 0,
    healthBonus: 0,
  },
  ironSword: {
    id: "ironSword",
    name: "Iron Sword",
    description: "An iron sword.",
    icon: Sword,
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [cardTable.slice, cardTable.slice, cardTable.slice],
    attackBonus: 2,
    defenseBonus: 0,
    healthBonus: 0,
  },
  ironShield: {
    id: "ironShield",
    name: "Iron Shield",
    description: "An iron shield.",
    icon: Shield,
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [cardTable.defend, cardTable.defend, cardTable.defend],
    attackBonus: 0,
    defenseBonus: 2,
    healthBonus: 0,
  },
  ironGreatSword: {
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
  },
  steelSword: {
    id: "steelSword",
    name: "Steel Sword",
    description: "A steel sword.",
    icon: Sword,
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [cardTable.slice, cardTable.slice, cardTable.slice],
    attackBonus: 3,
    defenseBonus: 0,
    healthBonus: 0,
  },
  mithrilSword: {
    id: "mithrilSword",
    name: "Mithril Sword",
    description: "A mithril sword.",
    icon: Sword,
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [cardTable.slice, cardTable.slice, cardTable.slice],
    attackBonus: 4,
    defenseBonus: 0,
    healthBonus: 0,
  },
  adamantSword: {
    id: "adamantSword",
    name: "Adamant Sword",
    description: "An adamant sword.",
    icon: Sword,
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEFTHAND, Slot.RIGHTHAND],
    cards: [cardTable.slice, cardTable.slice, cardTable.slice],
    attackBonus: 5,
    defenseBonus: 0,
    healthBonus: 0,
  },
};

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Slot } from "@/data/character/character";
import { ItemType } from "@/data/items/enums";
import { mineralsTable } from "@/data/items/minerals";
import { Equipment } from "@/types/items";
import { Hand, HardHat, Shirt, Tangent, ToyBrick } from "lucide-react";

export const armorTable: { [armorId: string]: Equipment } = {
  bronzeHelmet: {
    id: "bronzeHelmet",
    name: "Bronze Helmet",
    description: "A bronze helmet.",
    icon: HardHat,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.HEAD],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  bronzeChestplate: {
    id: "bronzeChestplate",
    name: "Bronze Chestplate",
    description: "A bronze chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.CHEST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  bronzeBelt: {
    id: "bronzeBelt",
    name: "Bronze Belt",
    description: "A bronze belt.",
    icon: Tangent,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.WAIST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  bronzePlateleggings: {
    id: "bronzePlateleggings",
    name: "Bronze Plateleggings",
    description: "Bronze plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.LEG],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  bronzeGauntlets: {
    id: "bronzeGauntlets",
    name: "Bronze Gauntlets",
    description: "A pair of bronze gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPEMENT,
    value: 10,
    slots: [Slot.GLOVE],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
};

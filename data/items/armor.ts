import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Slot } from "@/data/character/character";
import { ItemId, ItemType } from "@/data/items/enums";
import { Equipment } from "@/types/items";
import { Hand, HardHat, Shirt, Tangent, ToyBrick } from "lucide-react";
import { itemTable } from "./items";

export const armorTable: { [id in ItemId]?: Equipment } = {
  // Bronze Armor
  [ItemId.BRONZE_HELMET]: {
    id: ItemId.BRONZE_HELMET,
    name: "Bronze Helmet",
    description: "A sturdy bronze helmet.",
    icon: HardHat,
    iconStyle: {
      fill: "#F2613F",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 10,
    slots: [Slot.HEAD],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  [ItemId.BRONZE_CHESTPLATE]: {
    id: ItemId.BRONZE_CHESTPLATE,
    name: "Bronze Chestplate",
    description: "A durable bronze chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: "#F2613F",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 10,
    slots: [Slot.CHEST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  [ItemId.BRONZE_BELT]: {
    id: ItemId.BRONZE_BELT,
    name: "Bronze Belt",
    description: "A reliable bronze belt.",
    icon: Tangent,
    iconStyle: {
      fill: "#F2613F",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 10,
    slots: [Slot.WAIST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  [ItemId.BRONZE_PLATELEGGINGS]: {
    id: ItemId.BRONZE_PLATELEGGINGS,
    name: "Bronze Plateleggings",
    description: "Robust bronze plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: "#F2613F",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 10,
    slots: [Slot.LEG],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },
  [ItemId.BRONZE_GAUNTLETS]: {
    id: ItemId.BRONZE_GAUNTLETS,
    name: "Bronze Gauntlets",
    description: "A pair of sturdy bronze gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: "#F2613F",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 10,
    slots: [Slot.GLOVE],
    cards: [],
    attackBonus: 0,
    defenseBonus: 1,
    healthBonus: 0,
  },

  // Iron Armor
  [ItemId.IRON_HELMET]: {
    id: ItemId.IRON_HELMET,
    name: "Iron Helmet",
    description: "A strong iron helmet.",
    icon: HardHat,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 20,
    slots: [Slot.HEAD],
    cards: [],
    attackBonus: 0,
    defenseBonus: 2,
    healthBonus: 0,
  },
  [ItemId.IRON_CHESTPLATE]: {
    id: ItemId.IRON_CHESTPLATE,
    name: "Iron Chestplate",
    description: "A durable iron chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 20,
    slots: [Slot.CHEST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 2,
    healthBonus: 0,
  },
  [ItemId.IRON_BELT]: {
    id: ItemId.IRON_BELT,
    name: "Iron Belt",
    description: "A reliable iron belt.",
    icon: Tangent,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 20,
    slots: [Slot.WAIST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 2,
    healthBonus: 0,
  },
  [ItemId.IRON_PLATELEGGINGS]: {
    id: ItemId.IRON_PLATELEGGINGS,
    name: "Iron Plateleggings",
    description: "Sturdy iron plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 20,
    slots: [Slot.LEG],
    cards: [],
    attackBonus: 0,
    defenseBonus: 2,
    healthBonus: 0,
  },
  [ItemId.IRON_GAUNTLETS]: {
    id: ItemId.IRON_GAUNTLETS,
    name: "Iron Gauntlets",
    description: "A pair of strong iron gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 20,
    slots: [Slot.GLOVE],
    cards: [],
    attackBonus: 0,
    defenseBonus: 2,
    healthBonus: 0,
  },

  // Steel Armor
  [ItemId.STEEL_HELMET]: {
    id: ItemId.STEEL_HELMET,
    name: "Steel Helmet",
    description: "A robust steel helmet.",
    icon: HardHat,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 30,
    slots: [Slot.HEAD],
    cards: [],
    attackBonus: 0,
    defenseBonus: 3,
    healthBonus: 0,
  },
  [ItemId.STEEL_CHESTPLATE]: {
    id: ItemId.STEEL_CHESTPLATE,
    name: "Steel Chestplate",
    description: "A strong steel chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 30,
    slots: [Slot.CHEST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 3,
    healthBonus: 0,
  },
  [ItemId.STEEL_BELT]: {
    id: ItemId.STEEL_BELT,
    name: "Steel Belt",
    description: "A dependable steel belt.",
    icon: Tangent,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 30,
    slots: [Slot.WAIST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 3,
    healthBonus: 0,
  },
  [ItemId.STEEL_PLATELEGGINGS]: {
    id: ItemId.STEEL_PLATELEGGINGS,
    name: "Steel Plateleggings",
    description: "Sturdy steel plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 30,
    slots: [Slot.LEG],
    cards: [],
    attackBonus: 0,
    defenseBonus: 3,
    healthBonus: 0,
  },
  [ItemId.STEEL_GAUNTLETS]: {
    id: ItemId.STEEL_GAUNTLETS,
    name: "Steel Gauntlets",
    description: "A pair of strong steel gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 30,
    slots: [Slot.GLOVE],
    cards: [],
    attackBonus: 0,
    defenseBonus: 3,
    healthBonus: 0,
  },

  // Mithril Armor
  [ItemId.MITHRIL_HELMET]: {
    id: ItemId.MITHRIL_HELMET,
    name: "Mithril Helmet",
    description: "A lightweight mithril helmet.",
    icon: HardHat,
    iconStyle: {
      fill: "#5C88C4",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 40,
    slots: [Slot.HEAD],
    cards: [],
    attackBonus: 0,
    defenseBonus: 4,
    healthBonus: 0,
  },
  [ItemId.MITHRIL_CHESTPLATE]: {
    id: ItemId.MITHRIL_CHESTPLATE,
    name: "Mithril Chestplate",
    description: "A resilient mithril chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: "#5C88C4",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 40,
    slots: [Slot.CHEST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 4,
    healthBonus: 0,
  },
  [ItemId.MITHRIL_BELT]: {
    id: ItemId.MITHRIL_BELT,
    name: "Mithril Belt",
    description: "A flexible mithril belt.",
    icon: Tangent,
    iconStyle: {
      fill: "#5C88C4",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 40,
    slots: [Slot.WAIST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 4,
    healthBonus: 0,
  },
  [ItemId.MITHRIL_PLATELEGGINGS]: {
    id: ItemId.MITHRIL_PLATELEGGINGS,
    name: "Mithril Plateleggings",
    description: "Elegant mithril plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: "#5C88C4",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 40,
    slots: [Slot.LEG],
    cards: [],
    attackBonus: 0,
    defenseBonus: 4,
    healthBonus: 0,
  },
  [ItemId.MITHRIL_GAUNTLETS]: {
    id: ItemId.MITHRIL_GAUNTLETS,
    name: "Mithril Gauntlets",
    description: "A pair of dexterous mithril gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: "#5C88C4",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 40,
    slots: [Slot.GLOVE],
    cards: [],
    attackBonus: 0,
    defenseBonus: 4,
    healthBonus: 0,
  },

  // Adamant Armor
  [ItemId.ADAMANT_HELMET]: {
    id: ItemId.ADAMANT_HELMET,
    name: "Adamant Helmet",
    description: "An indestructible adamant helmet.",
    icon: HardHat,
    iconStyle: {
      fill: "#B2A4FF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 50,
    slots: [Slot.HEAD],
    cards: [],
    attackBonus: 0,
    defenseBonus: 5,
    healthBonus: 0,
  },
  [ItemId.ADAMANT_CHESTPLATE]: {
    id: ItemId.ADAMANT_CHESTPLATE,
    name: "Adamant Chestplate",
    description: "A formidable adamant chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: "#B2A4FF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 50,
    slots: [Slot.CHEST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 5,
    healthBonus: 0,
  },
  [ItemId.ADAMANT_BELT]: {
    id: ItemId.ADAMANT_BELT,
    name: "Adamant Belt",
    description: "A sturdy adamant belt.",
    icon: Tangent,
    iconStyle: {
      fill: "#B2A4FF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 50,
    slots: [Slot.WAIST],
    cards: [],
    attackBonus: 0,
    defenseBonus: 5,
    healthBonus: 0,
  },
  [ItemId.ADAMANT_PLATELEGGINGS]: {
    id: ItemId.ADAMANT_PLATELEGGINGS,
    name: "Adamant Plateleggings",
    description: "Impenetrable adamant plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: "#B2A4FF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 50,
    slots: [Slot.LEG],
    cards: [],
    attackBonus: 0,
    defenseBonus: 5,
    healthBonus: 0,
  },
  [ItemId.ADAMANT_GAUNTLETS]: {
    id: ItemId.ADAMANT_GAUNTLETS,
    name: "Adamant Gauntlets",
    description: "A pair of unyielding adamant gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: "#B2A4FF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.EQUIPMENT,
    value: 50,
    slots: [Slot.GLOVE],
    cards: [],
    attackBonus: 0,
    defenseBonus: 5,
    healthBonus: 0,
  },
};

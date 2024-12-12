import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Slot } from "@/data/character/character";
import { ItemType, ArmorId, MineralId } from "@/data/items/enums";
import { Equipment } from "@/types/items";
import { Hand, HardHat, Shirt, Tangent, ToyBrick } from "lucide-react";
import { mineralsTable } from "./minerals";

export const armorTable: { [id in ArmorId]: Equipment } = {
  // Bronze Armor
  [ArmorId.BRONZE_HELMET]: {
    id: ArmorId.BRONZE_HELMET,
    name: "Bronze Helmet",
    description: "A sturdy bronze helmet.",
    icon: HardHat,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
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
  [ArmorId.BRONZE_CHESTPLATE]: {
    id: ArmorId.BRONZE_CHESTPLATE,
    name: "Bronze Chestplate",
    description: "A durable bronze chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
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
  [ArmorId.BRONZE_BELT]: {
    id: ArmorId.BRONZE_BELT,
    name: "Bronze Belt",
    description: "A reliable bronze belt.",
    icon: Tangent,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
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
  [ArmorId.BRONZE_PLATELEGGINGS]: {
    id: ArmorId.BRONZE_PLATELEGGINGS,
    name: "Bronze Plateleggings",
    description: "Robust bronze plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
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
  [ArmorId.BRONZE_GAUNTLETS]: {
    id: ArmorId.BRONZE_GAUNTLETS,
    name: "Bronze Gauntlets",
    description: "A pair of sturdy bronze gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
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
  [ArmorId.IRON_HELMET]: {
    id: ArmorId.IRON_HELMET,
    name: "Iron Helmet",
    description: "A strong iron helmet.",
    icon: HardHat,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.IRON_CHESTPLATE]: {
    id: ArmorId.IRON_CHESTPLATE,
    name: "Iron Chestplate",
    description: "A durable iron chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.IRON_BELT]: {
    id: ArmorId.IRON_BELT,
    name: "Iron Belt",
    description: "A reliable iron belt.",
    icon: Tangent,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.IRON_PLATELEGGINGS]: {
    id: ArmorId.IRON_PLATELEGGINGS,
    name: "Iron Plateleggings",
    description: "Sturdy iron plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.IRON_GAUNTLETS]: {
    id: ArmorId.IRON_GAUNTLETS,
    name: "Iron Gauntlets",
    description: "A pair of strong iron gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.STEEL_HELMET]: {
    id: ArmorId.STEEL_HELMET,
    name: "Steel Helmet",
    description: "A robust steel helmet.",
    icon: HardHat,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.STEEL_CHESTPLATE]: {
    id: ArmorId.STEEL_CHESTPLATE,
    name: "Steel Chestplate",
    description: "A strong steel chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.STEEL_BELT]: {
    id: ArmorId.STEEL_BELT,
    name: "Steel Belt",
    description: "A dependable steel belt.",
    icon: Tangent,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.STEEL_PLATELEGGINGS]: {
    id: ArmorId.STEEL_PLATELEGGINGS,
    name: "Steel Plateleggings",
    description: "Sturdy steel plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.STEEL_GAUNTLETS]: {
    id: ArmorId.STEEL_GAUNTLETS,
    name: "Steel Gauntlets",
    description: "A pair of strong steel gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
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
  [ArmorId.MITHRIL_HELMET]: {
    id: ArmorId.MITHRIL_HELMET,
    name: "Mithril Helmet",
    description: "A lightweight mithril helmet.",
    icon: HardHat,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
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
  [ArmorId.MITHRIL_CHESTPLATE]: {
    id: ArmorId.MITHRIL_CHESTPLATE,
    name: "Mithril Chestplate",
    description: "A resilient mithril chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
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
  [ArmorId.MITHRIL_BELT]: {
    id: ArmorId.MITHRIL_BELT,
    name: "Mithril Belt",
    description: "A flexible mithril belt.",
    icon: Tangent,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
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
  [ArmorId.MITHRIL_PLATELEGGINGS]: {
    id: ArmorId.MITHRIL_PLATELEGGINGS,
    name: "Mithril Plateleggings",
    description: "Elegant mithril plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
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
  [ArmorId.MITHRIL_GAUNTLETS]: {
    id: ArmorId.MITHRIL_GAUNTLETS,
    name: "Mithril Gauntlets",
    description: "A pair of dexterous mithril gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
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
  [ArmorId.ADAMANT_HELMET]: {
    id: ArmorId.ADAMANT_HELMET,
    name: "Adamant Helmet",
    description: "An indestructible adamant helmet.",
    icon: HardHat,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
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
  [ArmorId.ADAMANT_CHESTPLATE]: {
    id: ArmorId.ADAMANT_CHESTPLATE,
    name: "Adamant Chestplate",
    description: "A formidable adamant chestplate.",
    icon: Shirt,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
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
  [ArmorId.ADAMANT_BELT]: {
    id: ArmorId.ADAMANT_BELT,
    name: "Adamant Belt",
    description: "A sturdy adamant belt.",
    icon: Tangent,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
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
  [ArmorId.ADAMANT_PLATELEGGINGS]: {
    id: ArmorId.ADAMANT_PLATELEGGINGS,
    name: "Adamant Plateleggings",
    description: "Impenetrable adamant plateleggings.",
    icon: ToyBrick,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
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
  [ArmorId.ADAMANT_GAUNTLETS]: {
    id: ArmorId.ADAMANT_GAUNTLETS,
    name: "Adamant Gauntlets",
    description: "A pair of unyielding adamant gauntlets.",
    icon: Hand,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
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

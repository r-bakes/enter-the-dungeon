import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ItemType } from "@/data/items/enums";
import { Item } from "@/types/items";
import { Circle, Gem, Mountain } from "lucide-react";

export const mineralsTable: { [mineralId: string]: Item } = {
  ironOre: {
    id: "ironOre",
    name: "Iron Ore",
    description: "a lump of iron ore.",
    value: 1,
    icon: Mountain,
    iconStyle: { fill: "#B3C8CF", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  coal: {
    id: "coal",
    name: "Coal",
    description: "a lump of coal.",
    value: 1,
    icon: Circle,
    iconStyle: { fill: "#31363F", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  copperOre: {
    id: "copperOre",
    name: "Copper Ore",
    description: "a lump of copper ore.",
    value: 1,
    icon: Mountain,
    iconStyle: { fill: "#F2613F", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  geode: {
    id: "geode",
    name: "Geode",
    description: "an unknown gem geode.",
    value: 1,
    icon: Circle,
    iconStyle: { fill: "#A25B5B", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  sapphire: {
    id: "sapphire",
    name: "Sapphire",
    description: "a sapphire.",
    value: 1000,
    icon: Gem,
    iconStyle: { fill: "#1679AB", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  emerald: {
    id: "emerald",
    name: "Emerald",
    description: "an emerald.",
    value: 10000,
    icon: Gem,
    iconStyle: { fill: "#36BA98", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  diamond: {
    id: "diamond",
    name: "Diamond",
    description: "a diamond.",
    value: 100000,
    icon: Gem,
    iconStyle: { fill: "#E0F4FF", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  silverOre: {
    id: "silverOre",
    name: "Silver Ore",
    description: "a lump of silver ore.",
    value: 1,
    icon: Mountain,
    iconStyle: { fill: "#BED7DC", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  tinOre: {
    id: "tinOre",
    name: "Tin Ore",
    description: "a lump of tin ore.",
    value: 1,
    icon: Mountain,
    iconStyle: { fill: "#D7E9F7", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  goldOre: {
    id: "goldOre",
    name: "Gold Ore",
    description: "a lump of gold ore.",
    value: 1,
    icon: Mountain,
    iconStyle: { fill: "#F3CA52", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  mithrilOre: {
    id: "mithrilOre",
    name: "Mithril Ore",
    description: "a lump of mithril ore.",
    value: 1,
    icon: Mountain,
    iconStyle: { fill: "#5C88C4", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  platinumOre: {
    id: "platinumOre",
    name: "Platinum Ore",
    description: "a lump of platinum ore.",
    value: 1,
    icon: Mountain,
    iconStyle: { fill: "#CAF4FF", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  adamantiteOre: {
    id: "adamantiteOre",
    name: "Adamantite Ore",
    description: "a lump of adamantite ore.",
    value: 1,
    icon: Mountain,
    iconStyle: { fill: "#B2A4FF", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
};

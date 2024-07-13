import { RectangleVertical } from "lucide-react";
import { Item } from "./types";
import { ItemType } from "./types";
import { mineralsTable } from "./minerals";

export const barsTable: { [barId: string]: Item } = {
  bronzeBar: {
    id: "bronzeBar",
    name: "Bronze Bar",
    value: 1,
    description: "a bronze bar.",
    icon: RectangleVertical,
    iconStyle: { fill: mineralsTable.copperOre.iconStyle.fill },
    type: ItemType.TRADEGOODS,
  },
  ironBar: {
    id: "ironBar",
    name: "Iron Bar",
    value: 1,
    description: "an iron bar.",
    icon: RectangleVertical,
    iconStyle: { fill: mineralsTable.ironOre.iconStyle.fill },
    type: ItemType.TRADEGOODS,
  },
  steelBar: {
    id: "steelBar",
    name: "Steel Bar",
    description: "a steel bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: { fill: "#7C9D96" },
    type: ItemType.TRADEGOODS,
  },
  silverBar: {
    id: "silverBar",
    name: "Silver Bar",
    description: "a silver bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: { fill: mineralsTable.silverOre.iconStyle.fill },
    type: ItemType.TRADEGOODS,
  },
  goldBar: {
    id: "goldBar",
    name: "Gold Bar",
    description: "a gold bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: { fill: mineralsTable.goldOre.iconStyle.fill },
    type: ItemType.TRADEGOODS,
  },
  mithrilBar: {
    id: "mithrilBar",
    name: "Mithril Bar",
    description: "a Mithril bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: { fill: mineralsTable.mithrilOre.iconStyle.fill },
    type: ItemType.TRADEGOODS,
  },
  adamantBar: {
    id: "adamantBar",
    name: "Adamant Bar",
    description: "an adamant bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: { fill: mineralsTable.adamantiteOre.iconStyle.fill },
    type: ItemType.TRADEGOODS,
  },
};

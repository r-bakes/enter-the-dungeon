import { RectangleVertical } from "lucide-react";
import { Item } from "./types";
import { ItemType } from "./types";

export const barsTable: { [barId: string]: Item } = {
  bronzeBar: {
    id: "bronzeBar",
    name: "Bronze Bar",
    value: 1,
    description: "a bronze bar.",
    icon: RectangleVertical,
    type: ItemType.TRADEGOODS,
  },
  ironBar: {
    id: "ironBar",
    name: "Iron Bar",
    value: 1,
    description: "an iron bar.",
    icon: RectangleVertical,
    type: ItemType.TRADEGOODS,
  },
  steelBar: {
    id: "steelBar",
    name: "Steel Bar",
    description: "a steel bar.",
    value: 1,
    icon: RectangleVertical,
    type: ItemType.TRADEGOODS,
  },
  silverBar: {
    id: "silverBar",
    name: "Silver Bar",
    description: "a silver bar.",
    value: 1,
    icon: RectangleVertical,
    type: ItemType.TRADEGOODS,
  },
  goldBar: {
    id: "goldBar",
    name: "Gold Bar",
    description: "a gold bar.",
    value: 1,
    icon: RectangleVertical,
    type: ItemType.TRADEGOODS,
  },
  mithrilBar: {
    id: "mithrilBar",
    name: "Mithril Bar",
    description: "a Mithril bar.",
    value: 1,
    icon: RectangleVertical,
    type: ItemType.TRADEGOODS,
  },
  adamantBar: {
    id: "adamantBar",
    name: "Adamant Bar",
    description: "an adamant bar.",
    value: 1,
    icon: RectangleVertical,
    type: ItemType.TRADEGOODS,
  },
};

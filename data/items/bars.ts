import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Item } from "@/types/items";
import { RectangleVertical } from "lucide-react";
import { ItemId, ItemType } from "./enums";
import { itemTable } from "./items";

export const barsTable: { [id in ItemId]?: Item } = {
  [ItemId.BRONZE_BAR]: {
    id: ItemId.BRONZE_BAR,
    name: "Bronze Bar",
    value: 1,
    description: "a bronze bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: "#F2613F",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.IRON_BAR]: {
    id: ItemId.IRON_BAR,
    name: "Iron Bar",
    value: 1,
    description: "an iron bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: "#B3C8CF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.STEEL_BAR]: {
    id: ItemId.STEEL_BAR,
    name: "Steel Bar",
    description: "a steel bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: { fill: "#7C9D96", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.SILVER_BAR]: {
    id: ItemId.SILVER_BAR,
    name: "Silver Bar",
    description: "a silver bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: "#BED7DC",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.GOLD_BAR]: {
    id: ItemId.GOLD_BAR,
    name: "Gold Bar",
    description: "a gold bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: "#F3CA52",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.MITHRIL_BAR]: {
    id: ItemId.MITHRIL_BAR,
    name: "Mithril Bar",
    description: "a mithril bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: "#5C88C4",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.PLATINUM_BAR]: {
    id: ItemId.PLATINUM_BAR,
    name: "Platinum Bar",
    description: "a platinum bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: "#CAF4FF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.ADAMANT_BAR]: {
    id: ItemId.ADAMANT_BAR,
    name: "Adamant Bar",
    description: "an adamant bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: "#B2A4FF",
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
};

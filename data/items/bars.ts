import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { BarId, ItemType, MineralId } from "@/data/items/enums";
import { mineralsTable } from "@/data/items/minerals";
import { Item } from "@/types/items";
import { RectangleVertical } from "lucide-react";

export const barsTable: { [id in BarId]: Item } = {
  [BarId.BRONZE_BAR]: {
    id: BarId.BRONZE_BAR,
    name: "Bronze Bar",
    value: 1,
    description: "a bronze bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.COPPER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [BarId.IRON_BAR]: {
    id: BarId.IRON_BAR,
    name: "Iron Bar",
    value: 1,
    description: "an iron bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.IRON_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [BarId.STEEL_BAR]: {
    id: BarId.STEEL_BAR,
    name: "Steel Bar",
    description: "a steel bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: { fill: "#7C9D96", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.TRADEGOODS,
  },
  [BarId.SILVER_BAR]: {
    id: BarId.SILVER_BAR,
    name: "Silver Bar",
    description: "a silver bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.SILVER_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [BarId.GOLD_BAR]: {
    id: BarId.GOLD_BAR,
    name: "Gold Bar",
    description: "a gold bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.GOLD_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [BarId.MITHRIL_BAR]: {
    id: BarId.MITHRIL_BAR,
    name: "Mithril Bar",
    description: "a mithril bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.MITHRIL_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [BarId.PLATINUM_BAR]: {
    id: BarId.PLATINUM_BAR,
    name: "Platinum Bar",
    description: "a platinum bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.PLATINUM_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [BarId.ADAMANT_BAR]: {
    id: BarId.ADAMANT_BAR,
    name: "Adamant Bar",
    description: "an adamant bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable[MineralId.ADAMANTITE_ORE].iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
};

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ItemType } from "@/data/items/enums";
import { mineralsTable } from "@/data/items/minerals";
import { Item } from "@/types/items";
import { RectangleVertical } from "lucide-react";

export const barsTable: { [barId: string]: Item } = {
  bronzeBar: {
    id: "bronzeBar",
    name: "Bronze Bar",
    value: 1,
    description: "a bronze bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.copperOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  ironBar: {
    id: "ironBar",
    name: "Iron Bar",
    value: 1,
    description: "an iron bar.",
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.ironOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  steelBar: {
    id: "steelBar",
    name: "Steel Bar",
    description: "a steel bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: { fill: "#7C9D96", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.TRADEGOODS,
  },
  silverBar: {
    id: "silverBar",
    name: "Silver Bar",
    description: "a silver bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.silverOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  goldBar: {
    id: "goldBar",
    name: "Gold Bar",
    description: "a gold bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.goldOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  mithrilBar: {
    id: "mithrilBar",
    name: "Mithril Bar",
    description: "a mithril bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.mithrilOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  platinumBar: {
    id: "platinumBar",
    name: "Platinum Bar",
    description: "a platinum bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.platinumOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  adamantBar: {
    id: "adamantBar",
    name: "Adamant Bar",
    description: "an adamant bar.",
    value: 1,
    icon: RectangleVertical,
    iconStyle: {
      fill: mineralsTable.adamantiteOre.iconStyle.fill,
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
};

import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Item } from "@/types/items";
import { CircleDollarSign } from "lucide-react";
import { ItemId, ItemType } from "./enums";

export const miscTable: { [id in ItemId]?: Item } = {
  [ItemId.GOLD]: {
    id: ItemId.GOLD,
    name: "Gold",
    description: "Currency of the realm.",
    value: 1,
    icon: CircleDollarSign,
    iconStyle: {
      fill: "#F6C90E",
      ...TASK_AND_ITEM_ICON_STYLE,
      strokeWidth: 1,
    },
    type: ItemType.HIDDEN,
  },
};

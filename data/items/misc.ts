import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { ItemType } from "@/data/items/enums";
import { Item } from "@/types/items";
import { CircleDollarSign } from "lucide-react";

export const miscTable: { [miscId: string]: Item } = {
  gold: {
    id: "gold",
    name: "Gold",
    description: "Currency of the realm.",
    value: 1,
    icon: CircleDollarSign,
    iconStyle: { fill: "#F6C90E", ...TASK_AND_ITEM_ICON_STYLE, strokeWidth: 1 },
    type: ItemType.HIDDEN,
  },
};

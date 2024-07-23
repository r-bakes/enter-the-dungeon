import { CircleDollarSign } from "lucide-react";
import { Item } from "./types";
import { ItemType } from "./types";
import { TASK_AND_ITEM_ICON_STYLE } from "../configurations";

export const miscTable: { [miscId: string]: Item } = {
  gold: {
    id: "gold",
    name: "Gold",
    description: "Currency of the realm.",
    value: 1,
    icon: CircleDollarSign,
    iconStyle: { fill: "gold", ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.HIDDEN,
  },
};

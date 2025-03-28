import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Item } from "@/types/items";
import {
  Biohazard,
  CircleDollarSign,
  Droplets,
  FlaskRound,
} from "lucide-react";
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
  [ItemId.GLASS_VIAL]: {
    id: ItemId.GLASS_VIAL,
    name: "Glass Vial",
    description: "Useful for Alchemy.",
    value: 10,
    icon: FlaskRound,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.COMPOST]: {
    id: ItemId.COMPOST,
    name: "Compost",
    description: "Useful for making fertilizer.",
    value: 100,
    icon: Droplets,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
  [ItemId.MANURE]: {
    id: ItemId.MANURE,
    name: "Monster Manure",
    description: "Useful for making fertilizer.",
    value: 100,
    icon: Biohazard,
    iconStyle: {
      ...TASK_AND_ITEM_ICON_STYLE,
    },
    type: ItemType.TRADEGOODS,
  },
};

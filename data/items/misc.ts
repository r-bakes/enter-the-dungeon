import { CircleDollarSign } from "lucide-react";
import { Item } from "./types";
import { ItemType } from "./types";

export const gold: Item = {
    id: "gold",
    name: "Gold Coin",
    description: "Currency of the realm.",
    value: 1,
    icon: CircleDollarSign,
    type: ItemType.HIDDEN,
  };
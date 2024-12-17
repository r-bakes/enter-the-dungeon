import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Item } from "@/types/items";
import { Bean } from "lucide-react";
import { ItemId, ItemType } from "./enums";

export const seedsTable: { [id in ItemId]?: Item } = {
  [ItemId.GINSENG_SEED]: {
    id: ItemId.GINSENG_SEED,
    name: "Ginseng Seed",
    description: "a ginseng seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
};

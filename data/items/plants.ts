import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Item } from "@/types/items";
import { Leaf } from "lucide-react";
import { ItemType, PlantId } from "./enums";

export const plantsTable: { [id in PlantId]: Item } = {
  [PlantId.GINSENG]: {
    id: PlantId.GINSENG,
    name: "Ginseng",
    description: "some ginseng.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
};

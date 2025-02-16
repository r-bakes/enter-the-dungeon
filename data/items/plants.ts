import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Item } from "@/types/items";
import { Leaf } from "lucide-react";
import { ItemType, ItemId } from "./enums";

export const plantsTable: { [id in ItemId]?: Item } = {
  [ItemId.GINSENG]: {
    id: ItemId.GINSENG,
    name: "Ginseng",
    description: "Some ginseng.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.MANDRAKE]: {
    id: ItemId.MANDRAKE,
    name: "Mandrake",
    description: "Some mandrake.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.NIGHTSHADE]: {
    id: ItemId.NIGHTSHADE,
    name: "Nightshade",
    description: "Some nightshade.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.SILVERLEAF]: {
    id: ItemId.SILVERLEAF,
    name: "Silverleaf",
    description: "Some silverleaf.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.EMBER_BLOSSOM]: {
    id: ItemId.EMBER_BLOSSOM,
    name: "Ember Blossom",
    description: "Some ember blossoms.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.CRYSTAL_FERN]: {
    id: ItemId.CRYSTAL_FERN,
    name: "Crystal Fern",
    description: "Some crystal ferns.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.GHOST_PEPPER]: {
    id: ItemId.GHOST_PEPPER,
    name: "Ghost Pepper",
    description: "Some ghost peppers.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.VENOMWEED]: {
    id: ItemId.VENOMWEED,
    name: "Venomweed",
    description: "Some venomweed.",
    value: 1,
    icon: Leaf,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
};

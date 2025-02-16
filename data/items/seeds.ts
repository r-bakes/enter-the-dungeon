import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Item } from "@/types/items";
import { Bean } from "lucide-react";
import { ItemId, ItemType } from "./enums";

export const seedsTable: { [id in ItemId]?: Item } = {
  [ItemId.GINSENG_SEED]: {
    id: ItemId.GINSENG_SEED,
    name: "Ginseng Seed",
    description: "A ginseng seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.MANDRAKE_SEED]: {
    id: ItemId.MANDRAKE_SEED,
    name: "Mandrake Seed",
    description: "A mandrake seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.NIGHTSHADE_SEED]: {
    id: ItemId.NIGHTSHADE_SEED,
    name: "Nightshade Seed",
    description: "A nightshade seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.SILVERLEAF_SEED]: {
    id: ItemId.SILVERLEAF_SEED,
    name: "Silverleaf Seed",
    description: "A silverleaf seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.EMBER_BLOSSOM_SEED]: {
    id: ItemId.EMBER_BLOSSOM_SEED,
    name: "Ember Blossom Seed",
    description: "An ember blossom seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.CRYSTAL_FERN_SEED]: {
    id: ItemId.CRYSTAL_FERN_SEED,
    name: "Crystal Fern Seed",
    description: "A crystal fern seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.GHOST_PEPPER_SEED]: {
    id: ItemId.GHOST_PEPPER_SEED,
    name: "Ghost Pepper Seed",
    description: "A ghost pepper seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
  [ItemId.VENOMWEED_SEED]: {
    id: ItemId.VENOMWEED_SEED,
    name: "Venomweed Seed",
    description: "A venomweed seed.",
    value: 1,
    icon: Bean,
    iconStyle: { ...TASK_AND_ITEM_ICON_STYLE },
    type: ItemType.MATERIALS,
  },
};

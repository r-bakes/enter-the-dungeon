import { Heart, Zap, Bolt, Sword, Shield, Wind, RefreshCw, Battery } from "lucide-react";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { Item } from "@/types/items";
import { ItemId, ItemType } from "./enums";

export const flasksTable: { [id in ItemId]?: Item } = {
  [ItemId.HEALING_FLASK]: {
    id: ItemId.HEALING_FLASK,
    name: "Healing Flask",
    description: "Restores health during combat. A crimson elixir that mends wounds.",
    type: ItemType.SUPPLIES,
    icon: Heart,
    iconStyle: { fill: "currentColor", ...TASK_AND_ITEM_ICON_STYLE },
    value: 25,
  },
  [ItemId.MANA_FLASK]: {
    id: ItemId.MANA_FLASK,
    name: "Mana Flask",
    description: "Restores magical energy for casting spells. Glows with ethereal blue light.",
    type: ItemType.SUPPLIES,
    icon: Zap,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    value: 20,
  },
  [ItemId.STAMINA_FLASK]: {
    id: ItemId.STAMINA_FLASK,
    name: "Stamina Flask",
    description: "Restores physical energy for actions. A vibrant green brew.",
    type: ItemType.SUPPLIES,
    icon: Battery,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    value: 15,
  },
  [ItemId.RAGE_FLASK]: {
    id: ItemId.RAGE_FLASK,
    name: "Rage Flask",
    description: "Temporarily increases attack power. Bubbles with violent energy.",
    type: ItemType.SUPPLIES,
    icon: Sword,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    value: 45,
  },
  [ItemId.SHIELD_FLASK]: {
    id: ItemId.SHIELD_FLASK,
    name: "Shield Flask",
    description: "Temporarily increases defense. Forms a protective aura around the drinker.",
    type: ItemType.SUPPLIES,
    icon: Shield,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    value: 40,
  },
  [ItemId.HASTE_FLASK]: {
    id: ItemId.HASTE_FLASK,
    name: "Haste Flask",
    description: "Increases action speed temporarily. Sparkles with kinetic energy.",
    type: ItemType.SUPPLIES,
    icon: Wind,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    value: 35,
  },
  [ItemId.CARD_DRAW_FLASK]: {
    id: ItemId.CARD_DRAW_FLASK,
    name: "Card Draw Flask",
    description: "Allows drawing additional combat cards. Shimmers with tactical insight.",
    type: ItemType.SUPPLIES,
    icon: RefreshCw,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    value: 30,
  },
  [ItemId.ENERGY_FLASK]: {
    id: ItemId.ENERGY_FLASK,
    name: "Energy Flask",
    description: "Restores energy for card play. Crackles with raw power.",
    type: ItemType.SUPPLIES,
    icon: Bolt,
    iconStyle: { fill: "none", ...TASK_AND_ITEM_ICON_STYLE },
    value: 20,
  },
};
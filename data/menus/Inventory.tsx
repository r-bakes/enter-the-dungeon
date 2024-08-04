import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { Backpack } from "lucide-react";
import { GameObject } from "@/types/gameObjects";

export const inventory: GameObject = {
  id: "inventory",
  name: "Inventory",
  description: "Manage and equip inventory items.",
  icon: Backpack,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

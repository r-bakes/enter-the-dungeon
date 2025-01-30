import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { Backpack } from "lucide-react";
import { GameObject } from "@/types/gameObjects";
import { MenuId } from "./enums";

export const inventory: GameObject = {
  id: MenuId.INVENTORY,
  name: "Inventory",
  description: "Manage and equip inventory items.",
  icon: Backpack,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

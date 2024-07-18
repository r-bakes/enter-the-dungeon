import { Backpack } from "lucide-react";
import { GameObject } from "../gameObject";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";

export const inventory: GameObject = {
  id: "inventory",
  name: "Inventory",
  description: "test",
  icon: Backpack,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

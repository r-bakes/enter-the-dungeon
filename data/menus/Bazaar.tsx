import { CircleDollarSign } from "lucide-react";
import { GameObject } from "../gameObject";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";

export const bazaar: GameObject = {
  id: "bazaar",
  name: "Bazaar",
  description: "test",
  icon: CircleDollarSign,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

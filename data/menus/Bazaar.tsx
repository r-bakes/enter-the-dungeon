import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { GameObject } from "@/types/gameObjects";
import { CircleDollarSign } from "lucide-react";

export const bazaar: GameObject = {
  id: "bazaar",
  name: "Bazaar",
  description: "The grand marketplace.",
  icon: CircleDollarSign,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

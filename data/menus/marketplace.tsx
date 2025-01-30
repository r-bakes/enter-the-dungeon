import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { GameObject } from "@/types/gameObjects";
import { CircleDollarSign } from "lucide-react";
import { MenuId } from "./enums";

export const marketplace: GameObject = {
  id: MenuId.MARKETPLACE,
  name: "Marketplace",
  description: "The Grand Marketplace.",
  icon: CircleDollarSign,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

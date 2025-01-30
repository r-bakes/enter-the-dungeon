import { Home } from "lucide-react";
import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { GameObject } from "@/types/gameObjects";
import { MenuId } from "./enums";

export const home: GameObject = {
  id: MenuId.HOME,
  name: "Home",
  description: "Where the heart is.",
  icon: Home,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

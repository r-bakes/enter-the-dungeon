import { Home } from "lucide-react";
import { GameObject } from "../gameObject";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";

export const home: GameObject = {
  id: "home",
  name: "Home",
  description: "Where the heart is.",
  icon: Home,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};



import { Map } from "lucide-react";
import { GameObject } from "../gameObject";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";

export const expeditions: GameObject = {
  id: "expeditions",
  name: "Expeditions",
  description: "Plan an expedition.",
  icon: Map,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

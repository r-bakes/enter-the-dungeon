import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { GameObject } from "@/types/gameObjects";
import { Map } from "lucide-react";

export const expeditions: GameObject = {
  id: "expeditions",
  name: "Expeditions",
  description: "Plan an expedition.",
  icon: Map,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

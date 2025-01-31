import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { GameObject } from "@/types/gameObjects";
import { Map } from "lucide-react";
import { MenuId } from "./enums";

export const expeditions: GameObject = {
  id: MenuId.EXPEDITIONS,
  name: "Expeditions",
  description: "Plan an expedition.",
  icon: Map,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
};

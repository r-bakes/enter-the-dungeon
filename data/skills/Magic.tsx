import { Wand2 } from "lucide-react";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";
import { Skill } from "./types";

export const magic: Skill = {
  id: "magic",
  name: "Magic",
  description: "test",
  icon: Wand2,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: {},
};

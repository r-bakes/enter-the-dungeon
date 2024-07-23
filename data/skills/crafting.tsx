import { PencilRuler } from "lucide-react";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";
import { CraftingTaskCategories, Skill } from "./types";

export const crafting: Skill = {
  id: "crafting",
  name: "Crafting",
  description: "The ability to create accessories.",
  icon: PencilRuler,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: CraftingTaskCategories,
};

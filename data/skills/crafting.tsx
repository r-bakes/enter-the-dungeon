import { PencilRuler } from "lucide-react";
import { Skill } from "./skills";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";

export enum CraftingTaskCategories {
  NECKLACES = "necklaces",
}
export const crafting: Skill = {
  id: "crafting",
  name: "Crafting",
  description: "The ability to create accessories.",
  icon: PencilRuler,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: CraftingTaskCategories,
};

import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { CraftingTaskCategories } from "@/data/skills/enums";
import { Skill } from "@/types/skills";
import { PencilRuler } from "lucide-react";

export const crafting: Skill = {
  id: "crafting",
  name: "Crafting",
  description: "The ability to create accessories.",
  icon: PencilRuler,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: CraftingTaskCategories,
};

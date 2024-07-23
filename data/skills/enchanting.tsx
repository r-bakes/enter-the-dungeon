import { Sparkles } from "lucide-react";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";
import { EnchantingTaskCategories, Skill } from "./types";

export const enchanting: Skill = {
  id: "enchanting",
  name: "Enchanting",
  description: "The ability to magically enhance equipment.",
  icon: Sparkles,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: EnchantingTaskCategories,
};

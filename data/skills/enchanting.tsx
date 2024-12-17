import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { EnchantingTaskCategories } from "@/data/skills/enums";
import { Skill } from "@/types/Skill";
import { Sparkles } from "lucide-react";

export const enchanting: Skill = {
  id: "enchanting",
  name: "Enchanting",
  description: "The ability to magically enhance equipment.",
  icon: Sparkles,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
  taskCategories: EnchantingTaskCategories,
};

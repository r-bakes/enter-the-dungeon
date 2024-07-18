import { Sparkles } from "lucide-react";
import { Skill, Task } from "./skills";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";

export const enchanting: Skill = {
  id: "enchanting",
  name: "Enchanting",
  description: "The ability to magically enhance equipment.",
  icon: Sparkles,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {
    enchants: [],
  },
};

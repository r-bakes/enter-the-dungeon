import { VenetianMask } from "lucide-react";

import { SKILL_AND_MENU_ICON_STYLE } from "@/configurations/configurations";
import { SkillId, StealthTaskCategories } from "@/data/skills/enums";
import { stealthTasks } from "../tasks/stealth/thieving";
import { Skill } from "@/types/skills";

export const stealth: Skill = {
  id: SkillId.STEALTH,
  name: "Stealth",
  description: "The ability to sneak and perform sleight of hand.",
  icon: VenetianMask,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: stealthTasks,
  taskCategories: StealthTaskCategories,
};

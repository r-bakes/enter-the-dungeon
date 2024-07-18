import { Swords } from "lucide-react";
import { Skill } from "./skills";
import { SKILL_AND_MENU_ICON_STYLE } from "../configurations";

export const martial: Skill = {
  id: "martial",
  name: "Martial",
  description: "test",
  icon: Swords,
  iconStyle: { fill: "none", ...SKILL_AND_MENU_ICON_STYLE },
  tasks: {},
};

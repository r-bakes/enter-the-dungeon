import { agriculture } from "@/data/skills/agriculture";
import { alchemy } from "@/data/skills/alchemy";
import { athletics } from "@/data/skills/athletics";
import { crafting } from "@/data/skills/crafting";
import { enchanting } from "@/data/skills/enchanting";
import { magic } from "@/data/skills/magic";
import { martial } from "@/data/skills/martial";
import { prospecting } from "@/data/skills/prospecting";
import { smithing } from "@/data/skills/smithing";
import { stealth } from "@/data/skills/stealth";
import { SkillId } from "./enums";
import { Skill } from "@/types/skills";

export const skillTable: { [id in SkillId]: Skill } = {
  [SkillId.PROSPECTING]: prospecting,
  [SkillId.SMITHING]: smithing,
  [SkillId.MARTIAL]: martial,
  [SkillId.MAGIC]: magic,
  [SkillId.ENCHANTING]: enchanting,
  [SkillId.CRAFTING]: crafting,
  [SkillId.ATHLETICS]: athletics,
  [SkillId.STEALTH]: stealth,
  [SkillId.ALCHEMY]: alchemy,
  [SkillId.AGRICULTURE]: agriculture,
};

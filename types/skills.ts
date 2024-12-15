import { SkillId } from "@/data/skills/enums";
import { GameObject } from "./gameObjects";
import { AthleticsTaskId, SmithingTaskId, Task } from "./tasks";

export type Skill<T extends string> = {
  tasks: { [taskId in T]: Task };
  taskCategories: { [categoryId: string]: string };
} & GameObject;

export type SkillMap = {
  [SkillId.PROSPECTING]: Skill<ProspectingTaskId>;
  [SkillId.SMITHING]: Skill<SmithingTaskId>;
  [SkillId.MARTIAL]: Skill<AgricultureTaskId>;
  [SkillId.MAGIC]: Skill<MagicTaskId>;
  [SkillId.ENCHANTING]: Skill<EnchantingTaskId>;
  [SkillId.CRAFTING]: Skill<CraftingTaskId>;
  [SkillId.ATHLETICS]: Skill<AthleticsTaskId>;
  [SkillId.STEALTH]: Skill<StealthTaskId>;
  [SkillId.ALCHEMY]: Skill<AlchemyTaskId>;
  [SkillId.AGRICULTURE]: Skill<AgricultureTaskId>;
};

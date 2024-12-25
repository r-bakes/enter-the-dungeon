import { SkillId } from "@/data/skills/enums";
import { skillTable } from "@/data/skills/skills";
import { TaskId } from "@/data/tasks/enum";

const instantiateTaskToSkill = (): { [id in TaskId]: SkillId } => {
  let map = {} as { [id in TaskId]: SkillId };

  for (let skillId of Object.values(SkillId)) {
    let skill = skillTable[skillId];

    for (let taskId of Object.keys(skill.tasks)) {
      map[taskId as TaskId] = skillId;
    }
  }
  return map as { [id in TaskId]: SkillId };
};

export const taskToSkill: { [id in TaskId]: SkillId } =
  instantiateTaskToSkill();

import { SkillId } from "@/data/skills/enums";
import { skillTable } from "@/data/skills/skills";
import { TaskId } from "@/data/tasks/enum";

const instantiateTaskToSkill = (): { [id in TaskId]: SkillId } => {
  let map = {} as { [id in TaskId]: SkillId };

  for (let skillId in SkillId) {
    let skill = skillTable[skillId as SkillId];

    for (let taskId in skill.tasks) {
      map[taskId as TaskId] = skillId as SkillId;
    }
  }
  return map as { [id in TaskId]: SkillId };
};

export const taskToSkill = instantiateTaskToSkill();

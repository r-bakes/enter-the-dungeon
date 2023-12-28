import {
  levelCap,
  requiredExpForLevelUp,
} from "../configurations/Configurations";

export class Skills {
  data: SkillsData;

  constructor(skillsData: SkillsData) {
    this.data = { ...skillsData };
  }

  addExp(id: string, exp: number) {
    while (
      this.data[id].experience + exp >=
        requiredExpForLevelUp(this.data[id].level) &&
      this.data[id].level < levelCap
    ) {
      this.data[id].level += 1;
    }
    this.data[id].experience += exp;
    this.data[id].experience = Math.min(
      requiredExpForLevelUp(levelCap),
      this.data[id].experience
    );
  }
}
export type SkillsData = {
  [skillId: string]: SkillData;
};
type SkillData = {
  id: string;
  level: number;
  experience: number;
};

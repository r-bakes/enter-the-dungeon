import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { requiredExpForLevelUp } from "../utils/experienceUtils";
import { LEVEL_CAP } from "@/configurations/configurations";
import { SkillId } from "@/data/skills/enums";
import { TaskId } from "@/data/tasks/enum";
import { taskToSkill } from "@/features/town/common/utils/utils";

const useExperienceActions = () => {
  const { character, setCharacter } = useCharacterEngineContext();

  const addExp = (skillOrTaskid: SkillId | TaskId, exp: number) => {
    let skillId: SkillId;
    if (skillOrTaskid in TaskId) {
      skillId = taskToSkill[skillOrTaskid as TaskId];
    } else {
      skillId = skillOrTaskid as SkillId;
    }

    while (
      character.skills[skillId].experience + exp >=
        requiredExpForLevelUp(character.skills[skillId as SkillId].level) &&
      character.skills[skillId].level < LEVEL_CAP
    ) {
      character.skills[skillId].level += 1;
    }

    character.skills[skillId].experience += exp;
    character.skills[skillId].experience = Math.min(
      requiredExpForLevelUp(LEVEL_CAP),
      character.skills[skillId].experience,
    );

    setCharacter({ ...character });
  };

  return addExp;
};
export default useExperienceActions;

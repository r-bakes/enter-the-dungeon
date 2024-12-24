import {
  AGILITY_LEVELS_FOR_STAMINA_BONUS,
  LEVEL_CAP,
} from "@/configurations/configurations";
import { ItemId } from "@/data/items/enums";
import { itemTable } from "@/data/items/items";
import { SkillModifierType } from "@/data/modifiers/enums";
import { SkillId } from "@/data/skills/enums";
import { skillTable } from "@/data/skills/skills";
import { TaskId } from "@/data/tasks/enum";
import { upgradeTable } from "@/data/upgrades/upgrades";
import { Character, Inventory, Skills, Upgrades } from "@/types/character";
import { Equipment } from "@/types/items";
import { SkillModifierTable } from "@/types/modifiers";
import { Upgrade } from "@/types/upgrades";

export function addExp(skills: Skills, skillId: SkillId, exp: number): Skills {
  while (
    skills[skillId].experience + exp >=
      requiredExpForLevelUp(skills[skillId].level) &&
    skills[skillId].level < LEVEL_CAP
  ) {
    skills[skillId].level += 1;
  }
  skills[skillId].experience += exp;
  skills[skillId].experience = Math.min(
    requiredExpForLevelUp(LEVEL_CAP),
    skills[skillId].experience,
  );

  return skills;
}

export function requiredExpForLevelUp(level: number) {
  if (level < 1) {
    return 0;
  }
  return Math.floor(10 * Math.pow(2, level / 2));
}

export function getCombatModifiers(character: Character) {
  let atk = 1;
  let def = 0;
  let hp = 10 * character.skills.MARTIAL.level;

  Object.entries(character.loadout).forEach(([_, equipmentId]) => {
    if (equipmentId != null) {
      let item = itemTable[equipmentId] as Equipment;
      atk += item.attackBonus;
      def += item.defenseBonus;
      hp += item.healthBonus;
    }
  });

  return { atk, def, hp };
}

export function getAgilityModifiers(agilityLevel: number) {
  let stamina = 2 + Math.floor(agilityLevel / AGILITY_LEVELS_FOR_STAMINA_BONUS);

  return { stamina };
}

export function addUpgrade(
  upgrade: Upgrade,
  modifierTable: SkillModifierTable,
  character: Character,
) {
  if (upgrade.previous) {
    const previousUpgrade = upgradeTable[upgrade.previous];

    for (const skillId in previousUpgrade.modifier.targets) {
      const tasks = previousUpgrade.modifier.targets[skillId as SkillId] ?? [];
      for (const taskId of tasks) {
        for (const type in previousUpgrade.modifier.values) {
          const value =
            previousUpgrade.modifier.values[type as SkillModifierType];
          modifierTable[skillId as SkillId][taskId as TaskId][
            type as SkillModifierType
          ] -= value;
        }
      }
    }
  }

  // Explicit iteration over `upgrade.modifier.targets`
  for (const skillId in upgrade.modifier.targets) {
    const tasks = upgrade.modifier.targets[skillId as SkillId];
    for (const taskId of tasks) {
      for (const type in upgrade.modifier.values) {
        const value = upgrade.modifier.values[type as ModifierType];
        modifierTable[skillId as SkillId][taskId][type as ModifierType] +=
          value;
      }
    }
  }

  character.upgrades.add(upgrade.id);
}

export const initializeCharacterModifierTable = (
  upgrades: Upgrades,
): SkillModifierTable => {
  let modifierTable: SkillModifierTable = {};

  Object.values(skillTable).forEach((skill) => {
    modifierTable[skill.id] = {};

    Object.values(skill.tasks).forEach((task) => {
      modifierTable[skill.id][task.id] = {};

      task.applicableModifiers.forEach((type) => {
        if (type === SkillModifierType.PRODUCTION_MULTIPLIER) {
          modifierTable[skill.id][task.id][type] = 1;
        } else {
          modifierTable[skill.id][task.id][type] = 0;
        }
      });
    });
  });

  for (const upgradeId of upgrades) {
    let upgrade = upgradeTable[upgradeId];

    for (const [skillId, tasks] of Object.entries(upgrade.modifier.targets)) {
      for (const taskId of tasks) {
        for (const [type, value] of Object.entries(upgrade.modifier.values)) {
          if (
            !(
              upgradeTable[upgradeId].next &&
              upgrades.has(upgradeTable[upgradeId].next)
            )
          ) {
            modifierTable[skillId][taskId][type] += value;
          }
        }
      }
    }
  }

  return modifierTable;
};

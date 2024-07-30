import { Milestones, Upgrades } from "@/data/character/character";
import { Upgrade } from "@/data/modifiers/types";
import { upgradeTable } from "@/data/modifiers/upgrades";

export const generateUpgradeOptions = (
  characterUpgrades: Upgrades,
  characterMilestones: Milestones,
): Upgrade[] => {
  let upgradeOptions: Upgrade[] = [];

  Object.entries(upgradeTable).forEach(([upgradeId, upgrade]) => {
    if (
      !characterUpgrades.has(upgradeId) &&
      requirementsMet(upgradeId, characterUpgrades, characterMilestones)
    ) {
      upgradeOptions.push(upgrade);
    }
  });

  return upgradeOptions;
};

const requirementsMet = (
  upgradeId: string,
  characterUpgrades: Upgrades,
  characterMilestones: Milestones,
): boolean => {
  let upgrade = upgradeTable[upgradeId];

  for (const previous_upgrade of upgrade.requiresUpgrades) {
    if (!characterUpgrades.has(previous_upgrade)) {
      return false;
    }
  }

  for (const milestone_requirement of upgrade.requiresMilestones) {
    if (!characterMilestones.has(milestone_requirement)) {
      return false;
    }
  }

  return true;
};

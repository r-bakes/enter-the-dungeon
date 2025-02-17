import { MilestoneId } from "@/data/milestones/enums";
import { UpgradeId } from "@/data/upgrades/enums";
import { upgradeTable } from "@/data/upgrades/upgrades";
import { Milestones, Upgrades } from "@/types/character";
import { Upgrade } from "@/types/upgrades";

export const generateUpgradeOptions = (
  characterUpgrades: Upgrades,
  characterMilestones: Milestones,
): Upgrade[] => {
  let upgradeOptions: Upgrade[] = [];

  Object.entries(upgradeTable).forEach(([upgradeId, upgrade]) => {
    if (
      !characterUpgrades.has(upgradeId) &&
      requirementsMet(
        upgradeId as UpgradeId,
        characterUpgrades,
        characterMilestones,
      )
    ) {
      upgradeOptions.push(upgrade);
    }
  });

  return upgradeOptions;
};

const requirementsMet = (
  upgradeId: UpgradeId,
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

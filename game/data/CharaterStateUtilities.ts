import { LEVEL_CAP } from "./Configurations";
import { Inventory, Skills } from "./character/Character";

export function addExp(skills: Skills, skillId: string, exp: number): Skills {
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
    skills[skillId].experience
  );

  return skills;
}


export function addItem(
  inventory: Inventory,
  itemId: string,
  amount: number = 1
): Inventory {
  if (Object.keys(inventory).includes(itemId)) {
    inventory[itemId] += amount;
  } else {
    inventory[itemId] = amount;
  }
  return inventory;
}

export function removeItem(
  inventory: Inventory,
  itemId: string,
  amount: number = 1
): Inventory {
  inventory[itemId] = inventory[itemId] - amount;
  return inventory;
}

export function requiredExpForLevelUp(level: number) {
  if (level < 1) {
    return 0;
  }
  return Math.floor(10 * Math.pow(2, level / 2));
}



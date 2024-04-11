import { levelCap, requiredExpForLevelUp } from "./Configurations";
import { Inventory, Skills } from "./GameObject";

function addExp(skills: Skills, skillId: string, exp: number): Skills {
  while (
    skills[skillId].experience + exp >=
      requiredExpForLevelUp(skills[skillId].level) &&
    skills[skillId].level < levelCap
  ) {
    skills[skillId].level += 1;
  }
  skills[skillId].experience += exp;
  skills[skillId].experience = Math.min(
    requiredExpForLevelUp(levelCap),
    skills[skillId].experience
  );

  return skills;
}


function addItem(
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

function removeItem(
  inventory: Inventory,
  itemId: string,
  amount: number = 1
): Inventory {
  if (inventory[itemId] - amount < 0) {
    throw new Error("Cannot remove item. Not enough in inventory.");
  }
  inventory[itemId] = Math.max(0, inventory[itemId] - amount);

  return inventory;
}

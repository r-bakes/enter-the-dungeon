import { LEVEL_CAP } from "../../data/configurations";
import { Equipment } from "@/data/items/types";
import { Inventory, Skills } from "../../data/character/character";
import { ITEM_BY_ID } from "../../data/items/items";

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

export function addCardsByItemId(itemId: string, unequipped: String[]) {
  let item = ITEM_BY_ID[itemId] as Equipment;

  item.cards.forEach((card) => unequipped.push(card.id));
}

export function removeCardsByItem(
  itemId: string,
  equipped: string[],
  unequipped: string[]
) {
  let item = ITEM_BY_ID[itemId] as Equipment;

  item.cards.forEach((card) => {
    if (unequipped.includes(card.id)) {
      unequipped.splice(
        unequipped.findIndex((unequippedCard) => unequippedCard === card.id),
        1
      );
    } else {
      equipped.splice(
        equipped.findIndex((equippedCard) => equippedCard === card.id),
        1
      );
    }
  });
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

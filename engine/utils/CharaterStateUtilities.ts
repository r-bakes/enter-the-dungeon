import {
  AGILITY_LEVELS_FOR_STAMINA_BONUS,
  LEVEL_CAP,
} from "../../data/configurations";
import { Equipment } from "@/data/items/types";
import {
  Character,
  Inventory,
  Loadout,
  SkillLevel,
  Skills,
} from "../../data/character/character";
import { itemTable } from "../../data/items/items";

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
  let item = itemTable[itemId] as Equipment;

  item.cards.forEach((card) => unequipped.push(card.id));
}

export function removeCardsByItem(
  itemId: string,
  equipped: string[],
  unequipped: string[]
) {
  let item = itemTable[itemId] as Equipment;

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

export function getCombatModifiers(character: Character) {
  let atk = 1;
  let def = 0;
  let hp = 10 * character.skills.martial.level;

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

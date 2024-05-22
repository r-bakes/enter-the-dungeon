import { Character, Slot, testCharacter } from "@/data/character/character";
import { toast } from "sonner";

import React from "react";
import { MAGIC_DECK_LIMIT, MARTIAL_DECK_LIMIT } from "@/data/configurations";
import {
  addCardsByItemId,
  addItem,
  removeCardsByItem,
  removeItem,
} from "./utils/charaterStateUtilities";
import { ITEM_BY_ID } from "@/data/items/items";
import { Equipment } from "@/data/items/types";

type CharacterEngineContextContents = {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  equipCard: (cardId: string) => void;
  unequipCard: (cardId: string) => void;
  equipItem: (itemId: string, slot: Slot) => void;
  unequip: (slot: Slot) => void;
  getModifiers: () => { hp: number; atk: number; def: number };
};

const CharacterEngineContext = React.createContext(
  {} as CharacterEngineContextContents
);
export const useCharacterEngineContext = () =>
  React.useContext(CharacterEngineContext);

export default function CharacterEngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [character, setCharacter] = React.useState<Character>(testCharacter);

  const equipCard = (cardId: string) => {
    if (character.deck.unequippedMartial.includes(cardId)) {
      if (character.deck.equppedMartial.length == MARTIAL_DECK_LIMIT) {
        toast.error("Deck limit reached!", {
          dismissible: true,
          position: "top-center",
          description: "Unequip a card and try again.",
        });
        return;
      }

      character.deck.unequippedMartial.splice(
        character.deck.unequippedMartial.findIndex(
          (unequippedCardId) => unequippedCardId === cardId
        ),
        1
      );
      character.deck.equppedMartial.push(cardId);
    } else {
      if (character.deck.equippedMagic.length == MAGIC_DECK_LIMIT) {
        toast.error("Deck limit reached!", {
          dismissible: true,
          position: "top-center",
          description: "Unequip a card and try again.",
        });
        return;
      }

      character.deck.unequippedMagic.splice(
        character.deck.unequippedMagic.findIndex(
          (unequippedCardId) => unequippedCardId === cardId
        ),
        1
      );
      character.deck.equippedMagic.push(cardId);
    }
    setCharacter({ ...character });
  };

  const equipItem = (itemId: string, slot: Slot) => {
    removeItem(character.inventory, itemId, 1);
    if (character.loadout[slot] != null) {
      unequipItem(slot);
    }
    character.loadout[slot] = itemId;
    addCardsByItemId(itemId, character.deck.unequippedMartial);
    setCharacter({ ...character });
  };

  const unequipItem = (slot: Slot) => {
    if (character.loadout[slot] != null) {
      let itemId = character.loadout[slot] as string;
      character.loadout[slot] = null;
      addItem(character.inventory, itemId, 1);
      removeCardsByItem(
        itemId,
        character.deck.equppedMartial,
        character.deck.unequippedMartial
      );
      setCharacter({ ...character });
    }
  };

  const unequipCard = (cardId: string) => {
    if (character.deck.equppedMartial.includes(cardId)) {
      character.deck.equppedMartial.splice(
        character.deck.equppedMartial.findIndex(
          (equippedCardId) => equippedCardId === cardId
        ),
        1
      );
      character.deck.unequippedMartial.push(cardId);
    } else {
      character.deck.equippedMagic.splice(
        character.deck.equippedMagic.findIndex(
          (equippedCardId) => equippedCardId === cardId
        ),
        1
      );
      character.deck.unequippedMagic.push(cardId);
    }
    setCharacter({ ...character });
  };

  const getModifiers = () => {
    let atk = character.skills["martial"].level;
    let def = character.skills["martial"].level;
    let hp = 10 * character.skills["martial"].level;

    Object.entries(character.loadout).forEach(([_, equipmentId]) => {
      if (equipmentId != null) {
        let item = ITEM_BY_ID[equipmentId] as Equipment;
        atk += item.attackBonus;
        def += item.defenseBonus;
        hp += item.healthBonus;
      }
    });
    return { atk, def, hp };
  };

  return (
    <CharacterEngineContext.Provider
      value={{
        character,
        setCharacter,
        equipCard,
        unequipCard,
        equipItem,
        unequip: unequipItem,
        getModifiers,
      }}
    >
      {children}
    </CharacterEngineContext.Provider>
  );
}

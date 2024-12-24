import { toast } from "sonner";

import React from "react";
import {
  addCardsByItemId,
  addItem,
  getAgilityModifiers,
  getCombatModifiers,
  removeCardsByItem,
  removeItem,
} from "@/features/common/utils/characterStateUtilities";
import { Character } from "@/types/character";
import {
  MAGIC_DECK_LIMIT,
  MARTIAL_DECK_LIMIT,
} from "@/configurations/configurations";
import { itemTable } from "@/data/items/items";
import { ItemId } from "@/data/items/enums";
import { CombatCardId } from "@/data/combatCards/enums";
import { Slot } from "@/data/character/enums";
import { testCharacter } from "@/data/character/character";

type CharacterEngineContextContents = {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  equipCard: (cardId: CombatCardId) => void;
  unequipCard: (cardId: CombatCardId) => void;
  equipItem: (itemId: ItemId, slot: Slot) => void;
  unequip: (slot: Slot) => void;
  getModifiers: () => { hp: number; atk: number; def: number; stamina: number };
  save: () => void;
};

const CharacterEngineContext = React.createContext(
  {} as CharacterEngineContextContents,
);
export const useCharacterEngineContext = () =>
  React.useContext(CharacterEngineContext);

export default function CharacterEngineProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          (unequippedCardId) => unequippedCardId === cardId,
        ),
        1,
      );
      character.deck.equppedMartial.push(cardId);
      character.deck.equppedMartial.sort((a, b) => a.localeCompare(b));
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
          (unequippedCardId) => unequippedCardId === cardId,
        ),
        1,
      );
      character.deck.equippedMagic.push(cardId);
      character.deck.equippedMagic.sort();
    }
    setCharacter({ ...character });
  };

  const equipItem = (itemId: ItemId, slot: Slot) => {
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
      let itemId = character.loadout[slot];
      character.loadout[slot] = null;
      addItem(character.inventory, itemId, 1);
      removeCardsByItem(
        itemId,
        character.deck.equppedMartial,
        character.deck.unequippedMartial,
      );
      setCharacter({ ...character });
    }
  };

  const unequipCard = (cardId: CombatCardId) => {
    if (character.deck.equppedMartial.includes(cardId)) {
      character.deck.equppedMartial.splice(
        character.deck.equppedMartial.findIndex(
          (equippedCardId) => equippedCardId === cardId,
        ),
        1,
      );
      character.deck.unequippedMartial.push(cardId);
      character.deck.unequippedMartial.sort();
    } else {
      character.deck.equippedMagic.splice(
        character.deck.equippedMagic.findIndex(
          (equippedCardId) => equippedCardId === cardId,
        ),
        1,
      );
      character.deck.unequippedMagic.push(cardId);
      character.deck.unequippedMagic.sort();
    }
    setCharacter({ ...character });
  };

  const getModifiers = () => {
    return {
      ...getCombatModifiers(character),
      ...getAgilityModifiers(character.skills.ATHLETICS.level),
    };
  };

  const save = () => {};

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
        save,
      }}
    >
      {children}
    </CharacterEngineContext.Provider>
  );
}

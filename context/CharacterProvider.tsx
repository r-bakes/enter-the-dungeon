import React, { createContext, useContext, useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client'
import { characters } from '@prisma/client';

const prisma = new PrismaClient()

const CharacterContext = createContext<characters>({} as characters);

export const useCharacter = () => useContext(CharacterContext);

export const CharacterProvider = ({ children } : { children: React.ReactNode }) => {
    const [characterData, setCharacterData] = useState<characters>({} as characters);

    useEffect(() => {
        const fetchData = async() => {
          try {
            const data = await fetch("/api/characters", {method: "GET"}); 
            return data.json()
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }

        };
        fetchData().then((data) => {
          console.log("Character loaded: ", data)
          setCharacterData(data.character)
        }
        );
      }, []);

      return (
        <CharacterContext.Provider value={characterData}>
          {children}
        </CharacterContext.Provider>
      );
}
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { MenuId } from "@/data/menus/enums";

// Define the shape of the context
type MenuEngineContextProps = {
  selectedMenu: MenuId;
  setSelectedMenu: React.Dispatch<React.SetStateAction<MenuId>>;
  isToastDisabled: boolean;
  setIsToastDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context with default undefined
const MenuEngineContext = createContext({} as MenuEngineContextProps);

// Create a provider component
export const MenuEngineProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMenu, setSelectedMenu] = useState(MenuId.HOME);
  const [isToastDisabled, setIsToastDisabled] = React.useState(false);

  return (
    <MenuEngineContext.Provider
      value={{
        selectedMenu,
        setSelectedMenu,
        isToastDisabled,
        setIsToastDisabled,
      }}
    >
      {children}
    </MenuEngineContext.Provider>
  );
};

// Custom hook for consuming the context
export const useMenuEngineContext = (): MenuEngineContextProps =>
  useContext(MenuEngineContext);

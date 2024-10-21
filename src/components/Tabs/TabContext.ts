import React, { useContext, createContext } from "react";

interface TabContextType {
  activeTabId: string | null;
  setActiveTabId: (id: string) => void;
  requiredWidth : string
}

export const TabContext = createContext<TabContextType>({
  activeTabId: null,
  setActiveTabId: () => {},
  requiredWidth: '90px'
});

export const useTabContext = () => useContext(TabContext);

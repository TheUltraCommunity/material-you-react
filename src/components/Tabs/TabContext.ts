import React, { useContext, createContext } from "react";

interface TabContextType {
  activeTabId: string | null;
  setActiveTabId: (id: string) => void;
}

export const TabContext = createContext<TabContextType>({
  activeTabId: null,
  setActiveTabId: () => {},
});

export const useTabContext = () => useContext(TabContext);

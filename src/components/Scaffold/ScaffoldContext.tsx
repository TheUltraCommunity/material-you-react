import { createContext, useContext, useState } from "react";

export type SnackbarParams = {
  action?: string;
  actionCallback?: () => void;
};

export type ScaffoldHost = {
  showSnackBar: (message: string, params?: SnackbarParams) => void;
  openDrawer: () => void;
};

export const ScaffoldContext = createContext<ScaffoldHost | null>(null);
export const useScaffoldHost = () => useContext(ScaffoldContext);

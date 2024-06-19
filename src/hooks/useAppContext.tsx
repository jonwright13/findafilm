import { FC, createContext, useContext, useState } from "react";
import {
  AppContextProps,
  AppContextProviderProps,
  SelectionProps,
} from "../interface/context.types";
import useInitialFetch from "./useInitialFetch";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  // Get the values to populate the dropdown
  const { dropdowns } = useInitialFetch();

  const [selection, setSelection] = useState<SelectionProps>({
    type: "movie",
    genre: "all",
    language: "all",
  });

  return (
    <AppContext.Provider
      value={{
        dropdowns,
        selection,
        setSelection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppContextProvider");
  }
  return context;
};

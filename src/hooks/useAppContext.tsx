import { FC, createContext, useContext, useState, useEffect } from "react";
import {
  AppContextProps,
  AppContextProviderProps,
  SelectionProps,
} from "../types/props";
import { Token, API_KEY } from "../types/types";
import { usePrefs } from "./usePrefs";
import useInitialFetch from "./useInitialFetch";

const APIK_Key = import.meta.env.VITE_API_KEY;
const TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

const AppContext = createContext<AppContextProps | null>(null);

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  // Get token from env
  const [token, setToken] = useState<Token>(TOKEN || undefined);

  // Get key from env
  const [key, setKey] = useState<API_KEY>(APIK_Key || undefined);

  // Get localStorage preferences or initialise if they don't exist
  const { storedValue, handleAddRating } = usePrefs();

  // Get the values to populate the dropdown
  const { dropdowns } = useInitialFetch(token);

  const [selection, setSelection] = useState<SelectionProps>({
    type: "movie",
    genre: "all",
    language: "all",
  });

  useEffect(() => {
    setToken(TOKEN);
    setKey(APIK_Key);
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        token,
        key,
        storedValue,
        handleAddRating,
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
  if (context === undefined)
    throw new Error("useApp must be used within an AppContextProvider");

  if (context?.token === undefined) throw new Error("Must provide a token");
  if (context?.key === undefined) throw new Error("Must provide a token");

  return context;
};

import { useLocalStorage } from "./useLocalStorage";
import { Preferences, Name, Pref, Type } from "../interface/general.types";
import { Title } from "../interface/api.types";

const defaultValue: Preferences = {
  watchlist: [],
  watched: [],
  ignore: [],
};

const getKeyOfVariable = (
  obj: any[],
  variable: string | number
): string | boolean => {
  for (const [key, array] of Object.entries(obj)) {
    if (Array.isArray(array)) {
      for (const item of array) {
        if (item.id === variable) return key;
      }
    }
  }
  return false; // Return null if the variable is not found in any array
};

const getType = (item: Title): Type => {
  if (item !== null && item !== undefined) {
    if ("title" in item) {
      return "movie";
    } else {
      return "tv";
    }
  } else {
    return "all";
  }
};

export const usePrefs = () => {
  const [storedValue, setStoredValue] = useLocalStorage(
    "preferences",
    defaultValue
  );

  const addItem = (updatedPrefs: Preferences, name: Name, item: Title) => {
    const newItem: Pref = { id: item.id, type: getType(item) };
    updatedPrefs[name] = [...updatedPrefs[name], newItem];
    return updatedPrefs;
  };

  const removeItem = (
    updatedPrefs: Preferences,
    name: Name,
    itemId: number
  ) => {
    updatedPrefs[name] = updatedPrefs[name].filter(
      (item: Pref) => item.id !== itemId
    );
    return updatedPrefs;
  };

  const removeFromAll = (updatedPrefs: Preferences, itemId: number) => {
    const keys = Object.keys(updatedPrefs) as Name[];
    keys.forEach((key) => removeItem(updatedPrefs, key, itemId));
    return updatedPrefs;
  };

  const handleAddRating = (name: Name, item: Title): void => {
    let updatedPrefs = { ...storedValue };

    // Check if the item id already exists within any of the value arrays
    const isExistsKey = getKeyOfVariable(updatedPrefs, item.id);

    if (isExistsKey === name) {
      // If key is the same as name, just remove the item
      updatedPrefs = removeItem(updatedPrefs, name, item.id);
    } else {
      if (isExistsKey) {
        // If the item exists in another key, remove all first
        updatedPrefs = removeFromAll(updatedPrefs, item.id);
      }

      //   Add the item to the key
      updatedPrefs = addItem(updatedPrefs, name, item);
    }
    setStoredValue(updatedPrefs);
  };

  return { storedValue, handleAddRating };
};

import { useLocalStorage } from "./useLocalStorage";
import { Preferences, Name, Title } from "../types/types";

const defaultValue: Preferences = {
  watchlist: [],
  watched: [],
  ignore: [],
};

function getKeyOfVariable(
  obj: any[],
  variable: string | number
): string | boolean {
  for (const [key, array] of Object.entries(obj)) {
    if (Array.isArray(array) && array.includes(variable)) {
      return key;
    }
  }
  return false; // Return null if the variable is not found in any array
}

export const usePrefs = () => {
  const [storedValue, setStoredValue] = useLocalStorage(
    "preferences",
    defaultValue
  );

  const addItem = (updatedValue: Preferences, name: Name, itemId: number) => {
    updatedValue[name] = [...updatedValue[name], itemId];
    return updatedValue;
  };

  const removeItem = (
    updatedValue: Preferences,
    name: Name,
    itemId: number
  ) => {
    updatedValue[name] = updatedValue[name].filter(
      (id: number) => id !== itemId
    );
    return updatedValue;
  };

  const removeFromAll = (updatedValue: Preferences, itemId: number) => {
    const keys = Object.keys(updatedValue) as Name[];
    keys.forEach((key) => removeItem(updatedValue, key, itemId));
    return updatedValue;
  };

  const handleAddRating = (name: Name, item: Title): void => {
    if (item !== null && item !== undefined && item.id !== undefined) {
      let updatedValue = { ...storedValue };

      // Check if the item id already exists within any of the value arrays
      const isExistsKey = getKeyOfVariable(updatedValue, item.id);

      if (isExistsKey === name) {
        // If key is the same as name, just remove the item
        updatedValue = removeItem(updatedValue, name, item.id);
      } else {
        if (isExistsKey) {
          // If the item exists in another key, remove all first
          updatedValue = removeFromAll(updatedValue, item.id);
        }

        //   Add the item to the key
        updatedValue = addItem(updatedValue, name, item.id);
      }
      setStoredValue(updatedValue);
    }
  };

  return { storedValue, handleAddRating };
};

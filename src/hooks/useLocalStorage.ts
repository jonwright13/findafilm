import { useState } from "react";

// Synchronises the state value with browser's local storage
export const useLocalStorage = (keyName: string, defaultValue = {}) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value && value !== "undefined") {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: any) => {
    try {
      setStoredValue(newValue);
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
};

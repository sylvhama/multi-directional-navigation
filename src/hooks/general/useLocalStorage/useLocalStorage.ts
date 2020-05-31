import React from "react";

// taken from https://usehooks.com/useLocalStorage/
export function useLocalStorage<ValueType>(
  key: string,
  initialValue: ValueType
): [ValueType, (nextValue: ValueType) => void] {
  const [storedValue, setStoredValue] = React.useState<ValueType>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: ValueType) => {
    try {
      const valueToStore: ValueType =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

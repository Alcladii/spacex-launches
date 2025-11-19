import { useState, type Dispatch, type SetStateAction } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const storedValue =
    typeof window !== "undefined" ? window.localStorage.getItem(key) : null;

  const [state, setState] = useState<T>(() => {
    if (storedValue) {
      try {
        return JSON.parse(storedValue) as T;
      } catch {
        return initialValue;
      }
    }
    return initialValue;
  });

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    setState((prev) => {
      const valueToStore =
        typeof value === "function" ? (value as (arg: T) => T)(prev) : value;

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }

      return valueToStore;
    });
  };

  return [state, setValue];
};

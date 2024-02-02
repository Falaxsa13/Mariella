import React, { useState } from "react";
import safeJsonParse from "../utils/safeJsonParse";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const initialData = safeJsonParse<T>(key, initialValue);
  const [storedData, setStoredData] = useState<T>(initialData);

  const wrappedSetStoredData = (data: T | ((prevData: T) => T)) => {
    try {
      const newData = data instanceof Function ? data(storedData) : data;
      setStoredData(newData);
      // localStorage.setItem(key, JSON.stringify(newData));
      dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error setting localStorage key ${key}`, error);
    }
  };

  return [storedData, wrappedSetStoredData];
}

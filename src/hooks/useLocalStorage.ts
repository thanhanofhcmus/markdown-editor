import { useState } from 'react';

const useStored = <T>(key: string, initValue: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch {
      return initValue;
    }
  });

  const setValue = (value: {}) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
};

const useLocalStorage = <T>(key: string, initValue: T): [T, (_: T) => void] => {
  const [stored, setStored] = useStored(key, initValue);
  const [value, setValue] = useState(stored);

  const setAndStoredValue = (t: T) => {
    setValue(t);
    setStored(t);
  };

  return [value, setAndStoredValue];
};

export default useLocalStorage;

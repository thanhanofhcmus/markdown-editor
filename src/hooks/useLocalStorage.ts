import { useState } from "react";

export const useLocalStorage = (key: string, initValue: {}) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initValue;
		} catch (e) {
			console.log(`useLocalStorage: ${e}`)
			return initValue;
		}
	});

	const setValue = (value: {}) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (e) {
			console.log(`useLocalStorage: ${e}`)
		}
	};

	return [storedValue, setValue];
}
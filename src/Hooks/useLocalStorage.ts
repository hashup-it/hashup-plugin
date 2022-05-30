import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue?: string) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);

            // TODO: fix
            return (item || initialValue) as any;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: string) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    };

    const clearValue = () => {
        try {
            setStoredValue(null);
            window.localStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue, clearValue];
};

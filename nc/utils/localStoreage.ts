export const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
    };

export const setLocalStorage = (key: string, value: any) => {
   return localStorage.setItem(key, JSON.stringify(value));
};
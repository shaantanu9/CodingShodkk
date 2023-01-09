export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    if(value && JSON.parse(value)) {
      return JSON.parse(value);
    }

    // return value ? JSON.parse(value) : null;
  }
  return null;
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// getSnipsFromLocalStorage
export const getSnipsFromLocalStorage = (id) => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(id);
    return value ? JSON.parse(value) : [];
  }
  return null;
};

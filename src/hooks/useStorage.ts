export const setStorage = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const getStorage = (name: string) => {
  return localStorage.getItem(name);
};

export const removeStorage = (name: string) => {
  localStorage.removeItem(name);
};

export const getValue = (key: string) => {
  const json = localStorage.getItem(key) ?? "null";

  return Promise.resolve()
    .then(() => JSON.parse(json));
};

export const setValue = (key: string, value: any) => {
  const json = value == null
    ? JSON.stringify(null)
    : JSON.stringify(value);

  return Promise.resolve()
    .then(() => localStorage.setItem(key, json));
};

export const remove = () => {};
export const hasKey = () => {};

const Storage = {
  getValue,
  setValue,
  remove,
  hasKey,
};

export default Storage;

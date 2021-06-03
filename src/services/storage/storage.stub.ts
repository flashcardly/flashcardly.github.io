export const getValue = (key: string) => {
  console.error("Storage not implemented");
  console.log(`tried to load ${key}`);
  return Promise.resolve() as Promise<any>;
};

export const setValue = (key: string, value: any) => {
  console.error("Storage not implemented");
  console.log(`tried to set ${key}`);
  return Promise.resolve() as Promise<void>;
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

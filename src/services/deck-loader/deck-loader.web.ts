
export const getDeck = (root: string, name: string) =>
  fetch(`${root}/${name}.json`).then(res => res.json());

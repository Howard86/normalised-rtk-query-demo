export const capitalize = (text: string) =>
  text[0].toUpperCase() + text.slice(1);

export const last = <T>(array: T[]) => array[array.length - 1];

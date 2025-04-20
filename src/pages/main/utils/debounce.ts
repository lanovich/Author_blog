export const debounce = (fn: any, delay: number) => {
  let timeoutId: string | number | NodeJS.Timeout | undefined;

  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay, ...args);
  };
};

let setLoadingFn: ((val: boolean) => void) | null = null;

export const setLoadingSetter = (fn: (val: boolean) => void) => {
  setLoadingFn = fn;
};

export const getLoadingSetter = () => setLoadingFn;

export const sleep = (time: number) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(_);
    }, time);
  });
};

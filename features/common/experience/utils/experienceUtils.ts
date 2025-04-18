export const requiredExpForLevelUp = (level: number) => {
  if (level < 1) {
    return 0;
  }
  return Math.floor(10 * Math.pow(2, level / 2));
};

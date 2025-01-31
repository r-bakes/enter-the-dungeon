export const rollStealthSuccess = (
  stealth: number,
  perception: number,
): boolean => {
  let successChance = calculateSuccessChance(stealth, perception);

  return Math.random() * 100 < successChance ? true : false;
};

export const calculateSuccessChance = (stealth: number, perception: number) => {
  return Math.floor(Math.min(1, stealth / perception) * 100);
};

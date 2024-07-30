export const formatCapitalCase = (words: string): string => {
  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const formatQuantity = (quantity: number): string => {
  if (quantity < 1000000 && quantity >= 1000) {
    let amount = quantity / 1000;
    return amount.toString() + "K";
  } else if (quantity < 10000000 && quantity >= 1000000) {
    let amount = quantity / 1000000;
    return amount.toString() + "M";
  } else if (quantity >= 10000000) {
    let amount = quantity / 10000000;
    return amount.toString() + "B";
  }
  return quantity.toString();
};

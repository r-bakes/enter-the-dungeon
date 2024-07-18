export const formatCapitalCase = (data: string): string => {
  return data
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

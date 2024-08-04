import { IconStyle } from "@/types/gameObjects";
import { LucideIcon } from "lucide-react";

export const formatCapitalCase = (words: string): string => {
  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const formatQuantity = (
  quantity: number | string | undefined,
): string => {
  if (!quantity) {
    return "0";
  }
  if (typeof quantity === "string") {
    quantity = Number.parseInt(quantity);
  }

  if (quantity < 1000000 && quantity >= 1000) {
    let amount = quantity / 1000;

    return (Math.round(amount * 1000) / 1000).toString() + "K";
  } else if (quantity < 10000000 && quantity >= 1000000) {
    let amount = quantity / 1000000;
    return (Math.round(amount * 1000) / 1000).toString() + "M";
  } else if (quantity >= 10000000) {
    let amount = quantity / 10000000;
    return (Math.round(amount * 1000) / 1000).toString() + "B";
  }
  return quantity.toString();
};

export const renderIcon = (
  icon: LucideIcon,
  size: number,
  iconStyle: IconStyle,
): React.ReactElement => {
  let Icon = icon;

  return (
    <Icon
      fill={iconStyle.fill}
      fillOpacity={iconStyle.fillOpacity}
      color={iconStyle.color}
      strokeWidth={iconStyle.strokeWidth}
      strokeOpacity={iconStyle.strokeOpacity}
      size={size}
    ></Icon>
  );
};

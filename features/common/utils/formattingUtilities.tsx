import { IconStyle } from "@/types/gameObjects";
import { LucideIcon } from "lucide-react";

export const formatCapitalCase = (words: string): string => {
  return words
    .replaceAll("_", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const formatLargeQuantity = (
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
  } else if (quantity < 1_000_000_000 && quantity >= 1_000_000) {
    let amount = quantity / 1000000;
    return (Math.round(amount * 1000) / 1000).toString() + "M";
  } else if (quantity >= 1_000_000_000) {
    let amount = quantity / 1_000_000_000;
    return (Math.round(amount * 1000) / 1000).toString() + "B";
  }
  return quantity.toString();
};

export const formatTime = (
  seconds: number | string,
): [string, "seconds" | "minutes" | "hours"] => {
  if (typeof seconds === "string") {
    seconds = Number.parseInt(seconds);
  }

  if (seconds < 60) {
    return [seconds.toString(), "seconds"];
  } else if (seconds < 3600 && seconds >= 60) {
    return [Math.round(seconds / 60).toString(), "minutes"];
  } else {
    return [Math.round(seconds / 3600).toString(), "hours"];
  }
};

export const formatRoundedQuantity = (
  quantity: number | string | undefined,
): string => {
  if (!quantity) {
    return "0";
  }
  if (typeof quantity === "string") {
    quantity = Number.parseInt(quantity);
  }

  if (quantity % 1 == 0) {
    return quantity.toString();
  } else {
    return quantity.toFixed(2).toString();
  }
};

export const renderIcon = (
  icon: LucideIcon,
  size: number,
  iconStyle: IconStyle,
): React.ReactElement => {
  let Icon = icon;

  return (
    <Icon
      className="shrink-0"
      fill={iconStyle.fill ? iconStyle.fill : "none"}
      fillOpacity={iconStyle.fillOpacity}
      color={iconStyle.color}
      strokeWidth={iconStyle.strokeWidth}
      strokeOpacity={iconStyle.strokeOpacity}
      size={size}
    ></Icon>
  );
};

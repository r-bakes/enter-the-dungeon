import { LucideIcon } from "lucide-react";

export type GameObject = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  iconStyle: IconStyle;
};

export type IconStyle = {
  fill?: string;
  fillOpacity?: number;
  strokeWidth?: number;
  strokeOpacity?: number;
  color?: string;
};

export type IconStylePrimitive = {
  fillOpacity: number;
  strokeWidth: number;
  strokeOpacity: number;
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
      fill={iconStyle.fill}
      fillOpacity={iconStyle.fillOpacity}
      color={iconStyle.color}
      strokeWidth={iconStyle.strokeWidth}
      strokeOpacity={iconStyle.strokeOpacity}
      size={size}
    ></Icon>
  );
};

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

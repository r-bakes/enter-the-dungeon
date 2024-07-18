import { LucideIcon } from "lucide-react";
import { SkillTasks, Task } from "./skills/skills";

export type GameObject = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  iconStyle: IconStyle;
};

export type IconStyle = {
  fill: string;
  fillOpacity: number;
  strokeWidth: number;
  strokeOpacity: number;
  color: string;
};

export type IconStylePrimitive = {
  fillOpacity: number;
  strokeWidth: number;
  strokeOpacity: number;
  color: string;
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

export const getAllTasks = (tasks: SkillTasks) => {
  let allTasks: Task[] = [];
  Object.keys(tasks).forEach((key) => {
    allTasks.push(...tasks[key]);
  });
  return allTasks;
};

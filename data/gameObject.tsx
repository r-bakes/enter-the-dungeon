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
  fill?: string;
  fillOpacity?: number;
  color?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
  size?: number;
};

export const renderIcon = (
  icon: LucideIcon,
  iconStyle: IconStyle
): React.ReactElement => {
  let Icon = icon;

  let color = iconStyle.color ? iconStyle.color : "black"
  let fill = iconStyle.fill ? iconStyle.fill : "none"
  let fillOpacity = iconStyle.fillOpacity ? iconStyle.fillOpacity : 1
  let strokeWidth = iconStyle.strokeWidth ? iconStyle.strokeWidth : 1
  let strokeOpacity = iconStyle.strokeOpacity ? iconStyle.strokeOpacity : 1
  
  return (
    <Icon
      fill={fill}
      fillOpacity={fillOpacity}
      color={color}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      size={iconStyle.size}
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

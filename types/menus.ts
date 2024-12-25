import { MenuId } from "@/data/menus/enums";
import { GameObject } from "./gameObjects";

export type MenuTable = {
  [id in MenuId]: {
    data: GameObject;
    menu: React.JSX.Element;
  };
};

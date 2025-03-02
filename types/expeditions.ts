import { ExpeditionId } from "@/data/expeditions/enums";
import { GameObject } from "./gameObjects";

export type Expedition = {
  id: ExpeditionId;
} & GameObject;

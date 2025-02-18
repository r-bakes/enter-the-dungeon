import { CombatAnimationId } from "@/data/combatAnimations/enums";
import { HTMLMotionProps, motion, Variant } from "framer-motion";
import { ForwardRefExoticComponent } from "react";

export type CombatAnimation = ModifyAnimation | SpawnAnimation;

export type ModifyAnimation = {
  type: AnimationTypes.MODIFY;
  id: CombatAnimationId;
  animation: Variant;
};

export type SpawnAnimation = {
  id: CombatAnimationId;
  type: AnimationTypes.SPAWN;
  div: ForwardRefExoticComponent<HTMLMotionProps<"div">>;
};

export enum AnimationTypes {
  SPAWN = "SPAWN",
  MODIFY = "MODIFY",
}

import { SpawnAnimation } from "@/types/combatAnimation";
import { AnimationTypes } from "./enums";
import { CombatAnimationId } from "./enums";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

const Slice = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        animate={{ x: [200, 0, -200], transition: { duration: 1 } }}
      >
        <div className="h-2 w-10"></div>
      </motion.div>
    );
  },
);
Slice.displayName = "Slice";

export const combatCardAnimationsTable: {
  [id in CombatAnimationId]?: SpawnAnimation;
} = {
  [CombatAnimationId.SLICE]: {
    id: CombatAnimationId.SLICE,
    type: AnimationTypes.SPAWN,
    div: Slice,
  },
};

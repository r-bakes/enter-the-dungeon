import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

const updateVariants = {
  idle: {},
  hp: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: {
      opacity: 0,
      rotate: [0, 75],
      x: [0, 40],
      y: [0, -30, 100],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  },
  defPlayerPhase: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  defEnemyPhase: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      rotate: [0, 75],
      x: [0, 40],
      y: [0, -30, 100],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  },
};
export type StatBlockUpdateVariant = keyof typeof updateVariants;

export default function StatBlock({
  icon: Icon,
  updateVariant = "idle",
  baseValue,
  value,
}: {
  icon: LucideIcon;
  updateVariant?: StatBlockUpdateVariant;
  baseValue: number;
  value: number;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon strokeWidth={1}></Icon>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={value}
          variants={updateVariants[updateVariant]}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Label className="text-muted-foreground">{value}</Label>
        </motion.div>
      </AnimatePresence>
      {value > baseValue && (
        <motion.div
          key={value}
          initial={{ scale: 8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Label className="text-muted-foreground">
            (+{value - baseValue})
          </Label>
        </motion.div>
      )}
    </div>
  );
}

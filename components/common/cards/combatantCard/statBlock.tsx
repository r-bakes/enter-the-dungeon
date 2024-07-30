import { Label } from "@radix-ui/react-label";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export default function StatBlock({
  icon: Icon,
  baseValue,
  value,
}: {
  icon: LucideIcon;
  baseValue: number;
  value: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Icon strokeWidth={1}></Icon>
      <motion.div
        key={baseValue}
        animate={{ scale: [1, 6, 8, 8, 6, 1], rotate: [0, 0, 25, -25, 0, 0] }}
        transition={{ duration: 0.6 }}
      >
        <Label className="text-muted-foreground">{baseValue}</Label>
      </motion.div>
      {value > baseValue && (
        <motion.div
          key={value}
          initial={{ scale: 8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
          }}
        >
          <Label className="text-muted-foreground">+{value - baseValue}</Label>
        </motion.div>
      )}
    </div>
  );
}

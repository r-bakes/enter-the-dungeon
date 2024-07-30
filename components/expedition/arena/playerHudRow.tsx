import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useEncounterContext } from "@/engines/encounterEngineContext";
import { motion } from "framer-motion";
import { Backpack, Zap } from "lucide-react";

export default function PlayerHudRow({}: {}) {
  const { round, stamina, finishTurn } = useEncounterContext();
  return (
    <div className="flex w-full min-w-full gap-4 items-end">
      <div className="flex flex-col gap-2 w-16 border-r border-r-1">
        <Label className="text-muted-foreground font-extralight">Round</Label>
        <div className="flex h-10 w-10 justify-left text-center">
          <motion.div
            key={round}
            className="flex"
            initial={{ opacity: 0.6, scale: 10, x: 400, y: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{
              duration: 2,
              delay: 0.2,
            }}
          >
            <Label className="font-bold text-2xl">{round}</Label>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">Stamina</Label>
        <Card className="flex h-10 w-80">
          <CardContent className="p-0 flex items-center justify-start gap-4 px-4 w-full h-full">
            {[...Array(stamina)].map((_, i) => (
              <motion.div
                className="flex"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 4,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Zap key={i} className="h-6 w-6"></Zap>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">Flasks</Label>
        <Card className="flex h-10 w-64">
          <CardContent className="flex items-center justify-center w-full h-full">
            {}
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">
          Trinkets
        </Label>
        <Card className="flex h-10 w-64">
          <CardContent className="flex items-center justify-center w-full h-full">
            {}
          </CardContent>
        </Card>
      </div>
      <Button variant="outline" size="icon">
        <Backpack></Backpack>
      </Button>
      <div className="flex grow"></div>
      <Button className="w-28" variant="destructive" onClick={finishTurn}>
        End Turn
      </Button>
    </div>
  );
}

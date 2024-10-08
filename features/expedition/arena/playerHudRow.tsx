import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useEncounterContext } from "@/engines/encounterEngineContext";
import { motion } from "framer-motion";
import { Backpack, Zap } from "lucide-react";

export default function PlayerHudRow({}: {}) {
  const { round, stamina, finishTurn } = useEncounterContext();
  return (
    <div className="flex w-full min-w-full items-end gap-4">
      <div className="border-r-1 flex w-16 flex-col gap-2 border-r">
        <Label className="font-extralight text-muted-foreground">Round</Label>
        <div className="justify-left flex h-10 w-10 text-center">
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
            <Label className="text-2xl font-bold">{round}</Label>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="font-extralight text-muted-foreground">Stamina</Label>
        <Card className="flex h-10 w-80">
          <CardContent className="flex h-full w-full items-center justify-start gap-4 p-0 px-4">
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
        <Label className="font-extralight text-muted-foreground">Flasks</Label>
        <Card className="flex h-10 w-64">
          <CardContent className="flex h-full w-full items-center justify-center">
            {}
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="font-extralight text-muted-foreground">
          Trinkets
        </Label>
        <Card className="flex h-10 w-64">
          <CardContent className="flex h-full w-full items-center justify-center">
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

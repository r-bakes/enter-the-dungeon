import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MenuId } from "@/data/menus/enums";
import { useEncounterContext } from "@/engines/encounterEngineContext";
import { useMenuEngineContext } from "@/engines/menuEngineContext";
import { AnimatePresence, motion } from "framer-motion";
import { Backpack, Zap } from "lucide-react";
import { useAnimationEngineContext } from "@/engines/animationEngineContext";

export default function PlayerHudRow({}: {}) {
  const { setSelectedMenu } = useMenuEngineContext();
  const { stamina, round } = useEncounterContext();
  const { finishTurn } = useAnimationEngineContext();

  return (
    <div className="flex w-full min-w-full items-end gap-4">
      <div className="flex w-16 flex-col gap-2 border-r border-r-1">
        <Label className="text-muted-foreground font-extralight">Round</Label>
        <div className="justify-left flex h-10 w-10 text-center">
          <Label className="text-2xl font-bold">{round}</Label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">Stamina</Label>
        <Card className="flex h-10 w-80">
          <CardContent className="flex h-full w-full items-center justify-start gap-4 p-0 px-4">
            <AnimatePresence>
              {[...Array(stamina)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  exit={{
                    opacity: 0,
                    y: -60,
                    transition: { duration: 0.5, east: "easeInOut" },
                  }}
                >
                  <Zap key={i} size={24} strokeWidth={1}></Zap>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">Flasks</Label>
        <Card className="flex h-10 w-64">
          <CardContent className="flex h-full w-full items-center justify-center">
            {}
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">
          Trinkets
        </Label>
        <Card className="flex h-10 w-64">
          <CardContent className="flex h-full w-full items-center justify-center">
            {}
          </CardContent>
        </Card>
      </div>
      <Button variant="outline" size="icon">
        <Backpack strokeWidth={1}></Backpack>
      </Button>
      <div className="flex grow"></div>
      <Button onClick={() => setSelectedMenu(MenuId.HOME)}>Escape</Button>
      <Button className="w-28" variant="destructive" onClick={finishTurn}>
        End Turn
      </Button>
    </div>
  );
}
